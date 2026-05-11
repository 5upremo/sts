import {
  ChevronLeft,
  ChevronRight,
  Info,
  Maximize2,
  Minimize2,
  BookOpen,
  HelpCircle,
  Eye,
  Settings,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { LESSONS, Lesson, Slide as SlideType } from "./data/lessons";

export default function App() {
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [showNotes, setShowNotes] = useState(false);
  const [showEngagement, setShowEngagement] = useState(false);
  const [showSelector, setShowSelector] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Sync logic
  const isPresenterRef = useRef(new URLSearchParams(window.location.search).get("view") === "presenter");
  const channelRef = useRef(new BroadcastChannel("presentation_sync"));

  useEffect(() => {
    const channel = channelRef.current;
    const onMessage = (event: MessageEvent) => {
      if (event.data.type === "SYNC_STATE") {
        setCurrentLessonIndex(event.data.lesson);
        setCurrentSlideIndex(event.data.slide);
        setShowEngagement(event.data.engagement);
      }
    };
    channel.addEventListener("message", onMessage);
    return () => channel.removeEventListener("message", onMessage);
  }, []);

  useEffect(() => {
    channelRef.current.postMessage({
      type: "SYNC_STATE",
      lesson: currentLessonIndex,
      slide: currentSlideIndex,
      engagement: showEngagement,
    });
  }, [currentLessonIndex, currentSlideIndex, showEngagement]);

  const launchPresenter = () => {
    const url = new URL(window.location.href);
    url.searchParams.set("view", "presenter");
    window.open(url.toString(), "PresenterWindow", "width=1000,height=800");
  };

  const currentLesson = LESSONS[currentLessonIndex];
  const currentSlide = currentLesson.slides[currentSlideIndex];

  const nextSlide = () => {
    if (currentSlideIndex < currentLesson.slides.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
      setShowEngagement(false);
    } else if (currentLessonIndex < LESSONS.length - 1) {
      // Prompt to go to next lesson?
    }
  };

  const prevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
      setShowEngagement(false);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "n") setShowNotes((prev) => !prev);
      if (e.key === "f") toggleFullscreen();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlideIndex, currentLessonIndex]);

  return (
    <div className="presentation-container bg-slate-900 text-white relative">
      {/* Header */}
      <header className="p-4 flex items-center justify-between border-b border-white/10 bg-slate-900/50 backdrop-blur-md z-10">
        <div className="flex items-center gap-3">
          <BookOpen className="text-blue-400 w-6 h-6" />
          <h1 className="text-sm font-semibold tracking-wide uppercase text-slate-400">
            {currentLesson.title}
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={launchPresenter}
            className="hidden md:flex text-xs font-bold px-3 py-1.5 rounded-full bg-amber-500/20 text-amber-400 hover:bg-amber-500/30 transition-colors items-center gap-2 border border-amber-500/30"
            title="Opens a second window with speaker notes and controls"
          >
            <Maximize2 className="w-3 h-3" /> Launch Presenter View
          </button>
          <button
            onClick={() => setShowSelector(true)}
            className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 transition-colors flex items-center gap-2"
          >
            <Settings className="w-3 h-3" /> Change Lesson
          </button>
          <button
            onClick={toggleFullscreen}
            className="p-1.5 rounded-full hover:bg-white/10 transition-colors"
          >
            {isFullscreen ? (
              <Minimize2 className="w-5 h-5" />
            ) : (
              <Maximize2 className="w-5 h-5" />
            )}
          </button>
        </div>
      </header>

      {/* Main Slide Area */}
      <main className="flex-1 overflow-hidden relative flex flex-col md:flex-row">
        <div className="flex-1 relative flex flex-col items-center justify-center p-4 md:p-12 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${currentLesson.id}-${currentSlide.id}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-5xl h-full flex flex-col"
            >
              <div className="mb-6">
                <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 leading-tight">
                  {currentSlide.title}
                </h2>
              </div>

              <div className="flex-1 slide-content-scroll overflow-y-auto pr-4">
                <ul className="space-y-4">
                  {currentSlide.onSlideText.map((text, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                      className="text-lg md:text-xl text-slate-200 flex gap-3"
                    >
                      <span className="text-blue-500 mt-1.5 flex-shrink-0">•</span>
                      <span>{text}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Visual Suggestion Box */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-12 p-6 rounded-2xl bg-slate-800/50 border border-white/5 flex gap-4 items-start"
                >
                  <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400">
                    <Eye className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-1">
                      Visual Suggestion
                    </h4>
                    <p className="text-sm text-slate-400 italic">
                      {currentSlide.visualSuggestion}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Engagement Element */}
          <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-20">
            <button
              onClick={() => setShowEngagement(true)}
              className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2.5 rounded-full shadow-lg shadow-blue-900/20 transition-all hover:scale-105"
            >
              <HelpCircle className="w-5 h-5" />
              <span className="font-semibold">Check Understanding</span>
            </button>
          </div>
        </div>

        {/* Sidebar / Speaker Notes (Only show if not in presenter mode, or if user explicitly toggles it in standard view) */}
        <AnimatePresence>
          {(showNotes || isPresenterRef.current) && (
            <motion.aside
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: isPresenterRef.current ? "100%" : 400, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              className={`bg-slate-950/80 backdrop-blur-xl border-l border-white/10 flex flex-col ${isPresenterRef.current ? 'md:max-w-md' : 'hidden md:flex'}`}
            >
              <div className="p-6 border-b border-white/10 flex items-center justify-between bg-amber-500/10">
                <div className="flex items-center gap-2 text-amber-400">
                  <Info className="w-5 h-5" />
                  <h3 className="font-bold uppercase tracking-tighter">
                    {isPresenterRef.current ? "Presenter: Speaker Notes" : "Speaker Notes"}
                  </h3>
                </div>
                {!isPresenterRef.current && (
                  <button
                    onClick={() => setShowNotes(false)}
                    className="hover:text-amber-400 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
              <div className="flex-1 p-6 overflow-y-auto space-y-6">
                {isPresenterRef.current && (
                  <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 space-y-2">
                    <div className="flex items-center gap-2 text-blue-400">
                      <HelpCircle className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase">Pro Tip: Google Meet</span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-tight">
                      To hide these notes from your audience, share the <strong>original tab</strong> in Google Meet, not this window. These windows will stay synced!
                    </p>
                  </div>
                )}

                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Current Context</h4>
                  <p className="text-slate-200 leading-relaxed text-sm md:text-lg font-medium font-serif">
                    {currentSlide.speakerNotes}
                  </p>
                </div>
                
                {isPresenterRef.current && (
                  <div className="pt-6 border-t border-white/10 space-y-4">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Navigation Controls</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <button 
                        onClick={prevSlide}
                        disabled={currentSlideIndex === 0}
                        className="py-3 bg-white/5 hover:bg-white/10 rounded-xl flex flex-col items-center gap-1 disabled:opacity-30"
                      >
                        <ChevronLeft className="w-5 h-5" />
                        <span className="text-[10px] uppercase font-bold">Previous</span>
                      </button>
                      <button 
                        onClick={nextSlide}
                        disabled={currentSlideIndex === currentLesson.slides.length - 1}
                        className="py-3 bg-blue-600 hover:bg-blue-500 rounded-xl flex flex-col items-center gap-1 disabled:opacity-30"
                      >
                        <ChevronRight className="w-5 h-5" />
                        <span className="text-[10px] uppercase font-bold text-white">Next</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.aside>
          )}
        </AnimatePresence>
      </main>

      {/* Footer Controls */}
      <footer className="p-4 md:p-6 bg-slate-950 border-t border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-2 md:gap-4">
          <button
            onClick={prevSlide}
            disabled={currentSlideIndex === 0}
            className="p-2 md:p-3 rounded-full bg-white/5 hover:bg-white/10 disabled:opacity-20 transition-all"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>
          <div className="text-xs md:text-sm font-mono text-slate-500">
            Slide {currentSlideIndex + 1} of {currentLesson.slides.length}
          </div>
          <button
            onClick={nextSlide}
            disabled={currentSlideIndex === currentLesson.slides.length - 1}
            className="p-2 md:p-3 rounded-full bg-white/5 hover:bg-white/10 disabled:opacity-20 transition-all"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>

        <button
          onClick={() => setShowNotes(!showNotes)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
            showNotes ? "bg-amber-500/20 text-amber-400 ring-1 ring-amber-500/50" : "bg-white/5 text-slate-400"
          }`}
        >
          <Info className="w-5 h-5" />
          <span className="hidden md:inline font-medium">Speaker Notes (N)</span>
        </button>

        <div className="w-32 md:w-64 h-1.5 bg-slate-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-blue-500"
            initial={false}
            animate={{
              width: `${((currentSlideIndex + 1) / currentLesson.slides.length) * 100}%`,
            }}
          />
        </div>
      </footer>

      {/* Engagement Modal */}
      <AnimatePresence>
        {showEngagement && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowEngagement(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-slate-900 border border-white/10 p-8 md:p-12 rounded-3xl max-w-2xl w-full shadow-2xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-blue-500/20 text-blue-400">
                  <HelpCircle className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-blue-400">
                    Check for Understanding
                  </h3>
                  <p className="text-2xl font-bold text-white">Interactive Review</p>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="text-sm font-medium text-slate-400 mb-2 uppercase italic tracking-wider">
                    Question
                  </h4>
                  <p className="text-xl md:text-2xl font-medium text-slate-100">
                    {currentSlide.engagementElement.question}
                  </p>
                </div>

                <div className="group overflow-hidden rounded-2xl border border-white/5 bg-slate-950/50">
                  <button className="w-full text-left p-6 flex items-center justify-between hover:bg-white/5 transition-colors group-hover:cursor-help">
                    <span className="text-slate-500 group-hover:text-blue-400 font-medium transition-colors">
                      Reveal Answer
                    </span>
                    <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-blue-400 transition-transform group-hover:translate-x-1" />
                  </button>
                  <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500">
                    <div className="p-6 pt-0 border-t border-white/5">
                      <p className="text-xl text-green-400 font-semibold">
                        {currentSlide.engagementElement.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setShowEngagement(false)}
                className="mt-12 w-full py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold transition-colors"
              >
                Close Question
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Lesson Selector Modal */}
      <AnimatePresence>
        {showSelector && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSelector(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-slate-900 border border-white/10 p-8 rounded-3xl max-w-md w-full shadow-2xl"
            >
              <h3 className="text-2xl font-bold mb-6">Select a Lesson</h3>
              <div className="space-y-4">
                {LESSONS.map((lesson, idx) => (
                  <button
                    key={lesson.id}
                    onClick={() => {
                      setCurrentLessonIndex(idx);
                      setCurrentSlideIndex(0);
                      setShowSelector(false);
                      setShowEngagement(false);
                    }}
                    className={`w-full text-left p-6 rounded-2xl border transition-all flex items-center justify-between group ${
                      currentLessonIndex === idx
                        ? "bg-blue-600/20 border-blue-500/50 text-blue-300"
                        : "bg-white/5 border-white/5 text-slate-400 hover:bg-white/10"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <BookOpen className={`w-6 h-6 ${currentLessonIndex === idx ? "text-blue-400" : "text-slate-500"}`} />
                      <span className="font-bold">{lesson.title}</span>
                    </div>
                    <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
              <button
                onClick={() => setShowSelector(false)}
                className="mt-8 w-full py-3 rounded-xl bg-slate-800 text-slate-400 font-semibold"
              >
                Cancel
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

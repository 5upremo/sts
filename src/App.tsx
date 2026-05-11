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
  MonitorPlay,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { LESSONS, Lesson, Slide as SlideType } from "./data/lessons";
import { SlideVisual } from "./components/PresentationVisuals";

export default function App() {
  const [navState, setNavState] = useState({
    lessonIndex: 0,
    slideIndex: 0,
    engagement: false,
    answerRevealed: false
  });
  const [showSelector, setShowSelector] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const contentScrollRef = useRef<HTMLDivElement>(null);

  const currentLessonIndex = navState.lessonIndex;
  const currentSlideIndex = navState.slideIndex;
  const showEngagement = navState.engagement;
  const isAnswerRevealed = navState.answerRevealed;

  // Sync logic
  const isPresenter = new URLSearchParams(window.location.search).get("view") === "presenter";
  const syncTimestampRef = useRef<number>(0);
  const syncChannelRef = useRef<BroadcastChannel | null>(null);
  const isIncomingChange = useRef(false);

  useEffect(() => {
    const applySync = (data: any) => {
      if (!data || typeof data !== 'object') return;
      if (data.timestamp > syncTimestampRef.current) {
        isIncomingChange.current = true;
        syncTimestampRef.current = data.timestamp;
        
        setNavState({
          lessonIndex: data.lesson ?? 0,
          slideIndex: data.slide ?? 0,
          engagement: !!data.engagement,
          answerRevealed: !!data.answerRevealed
        });
        
        if (data.scrollRatio !== undefined && contentScrollRef.current) {
          const element = contentScrollRef.current;
          element.scrollTop = data.scrollRatio * (element.scrollHeight - element.clientHeight);
        }

        setTimeout(() => {
          isIncomingChange.current = false;
        }, 50);
      }
    };

    // 1. Setup BroadcastChannel
    try {
      syncChannelRef.current = new BroadcastChannel("presentation_sync_stable");
      syncChannelRef.current.onmessage = (event) => {
        applySync(event.data);
      };
    } catch (e) {
      console.warn("BroadcastChannel not supported", e);
    }

    // 2. Setup Storage Events
    const handleSync = (event: StorageEvent) => {
      if (event.key === "presentation_sync_data" && event.newValue) {
        try {
          applySync(JSON.parse(event.newValue));
        } catch (e) {
          console.error("Sync data parsing failed", e);
        }
      }
      if (event.key === "answer_reveal_event") {
        try {
          const stored = localStorage.getItem("presentation_sync_data");
          if (stored) applySync(JSON.parse(stored));
        } catch (e) {
          console.error("Answer reveal sync failed", e);
        }
      }
    };

    window.addEventListener("storage", handleSync);
    return () => {
      window.removeEventListener("storage", handleSync);
      syncChannelRef.current?.close();
    };
  }, []);

  useEffect(() => {
    if (!isIncomingChange.current) {
      const element = contentScrollRef.current;
      const scrollRatio = element ? (element.scrollTop / (element.scrollHeight - element.clientHeight || 1)) : 0;
      const now = Date.now();
      syncTimestampRef.current = now;

      const syncData = {
        lesson: currentLessonIndex,
        slide: currentSlideIndex,
        engagement: showEngagement,
        answerRevealed: isAnswerRevealed,
        scrollRatio: scrollRatio,
        timestamp: now,
      };
      
      syncChannelRef.current?.postMessage(syncData);
      try {
        localStorage.setItem("presentation_sync_data", JSON.stringify(syncData));
        if (isAnswerRevealed) {
          localStorage.setItem("answer_reveal_event", now.toString());
        }
      } catch (e) {
        console.warn("Storage quota exceeded or unavailable", e);
      }
    }
  }, [currentLessonIndex, currentSlideIndex, showEngagement, isAnswerRevealed]);

  const launchPresenter = () => {
    try {
      const url = new URL(window.location.href);
      url.searchParams.set("view", "presenter");
      window.open(url.toString(), "PresenterWindow", "width=1000,height=800");
    } catch (e) {
      console.error("Failed to launch presenter window", e);
    }
  };

  useEffect(() => {
    if (contentScrollRef.current) {
      contentScrollRef.current.scrollTop = 0;
    }
  }, [currentSlideIndex, currentLessonIndex]);

  const currentLesson = LESSONS[currentLessonIndex] || LESSONS[0];
  const currentSlide = currentLesson?.slides?.[currentSlideIndex] || currentLesson?.slides?.[0];

  if (!currentSlide) {
    return <div className="bg-slate-900 text-white p-8">Loading or error in slide data...</div>;
  }

  const nextSlide = () => {
    if (currentSlideIndex < currentLesson.slides.length - 1) {
      setNavState(prev => ({
        ...prev,
        slideIndex: prev.slideIndex + 1,
        engagement: false,
        answerRevealed: false
      }));
    } else if (currentLessonIndex < LESSONS.length - 1) {
      // Prompt to go to next lesson?
    }
  };

  const prevSlide = () => {
    if (currentSlideIndex > 0) {
      setNavState(prev => ({
        ...prev,
        slideIndex: prev.slideIndex - 1,
        engagement: false,
        answerRevealed: false
      }));
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
    <div className="presentation-container bg-slate-900 text-white relative h-screen flex flex-col overflow-hidden">
      {/* Header */}
      <header className="p-3 md:p-4 flex items-center justify-between border-b border-white/10 bg-slate-900/50 backdrop-blur-md z-10">
        <div className="flex items-center gap-2 md:gap-3 overflow-hidden">
          <BookOpen className="text-blue-400 w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
          <h1 className="text-[10px] md:text-sm font-semibold tracking-wide uppercase text-slate-400 truncate max-w-[120px] md:max-w-none">
            {currentLesson.title}
          </h1>
        </div>
        <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
          {isPresenter && (
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-widest border border-blue-500/20">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              Presenter
            </div>
          )}
          <button
            onClick={launchPresenter}
            className="hidden md:flex p-2 rounded-full bg-amber-500/20 text-amber-400 hover:bg-amber-500/30 transition-colors items-center gap-2 border border-amber-500/30"
            title="Launch Presenter Mode"
          >
            <MonitorPlay className="w-4 h-4" />
          </button>
          <button
            onClick={() => setShowSelector(true)}
            className="text-[10px] md:text-xs font-medium px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 transition-colors flex items-center gap-2"
          >
            <Settings className="w-3 h-3 md:w-4 md:h-4" /> 
            <span className="hidden sm:inline">Change Lesson</span>
          </button>
          <button
            onClick={toggleFullscreen}
            className="p-1.5 rounded-full hover:bg-white/10 transition-colors hidden sm:block"
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
      <main className="flex-1 min-h-0 relative flex flex-col md:flex-row overflow-hidden bg-slate-900">
        <div className={`relative flex flex-col items-center p-6 md:p-12 transition-all ${isPresenter ? 'h-[40vh] md:h-auto md:flex-1' : 'flex-1'}`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={`${currentLesson.id}-${currentSlide.id}`}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-5xl h-full flex flex-col"
            >
              <div className="mb-4 md:mb-8">
                <h2 className="text-2xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 leading-tight">
                  {currentSlide.title}
                </h2>
              </div>

              <div className="flex-1 flex flex-col md:flex-row gap-6 md:gap-10 overflow-hidden">
                <div 
                  ref={contentScrollRef}
                  onScroll={() => {
                    if (!isIncomingChange.current) {
                      const element = contentScrollRef.current;
                      if (element) {
                        const scrollRatio = element.scrollTop / (element.scrollHeight - element.clientHeight || 1);
                        const syncData = {
                          lesson: currentLessonIndex,
                          slide: currentSlideIndex,
                          engagement: showEngagement,
                          answerRevealed: isAnswerRevealed,
                          scrollRatio: scrollRatio,
                          timestamp: Date.now(),
                        };
                        syncChannelRef.current?.postMessage(syncData);
                        localStorage.setItem("presentation_sync_data", JSON.stringify(syncData));
                      }
                    }
                  }}
                  className="flex-1 flex flex-col overflow-y-auto pr-2 no-scrollbar"
                >
                  <ul className="space-y-4 mb-6 md:mb-10">
                    {currentSlide.onSlideText.map((text, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.05 }}
                        className="text-base md:text-xl text-slate-200 flex gap-3 leading-relaxed"
                      >
                        <span className="text-blue-500 mt-1.5 flex-shrink-0">•</span>
                        <span>{text}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* On-Slide Engagement (Visible to All) */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-auto pt-6 border-t border-white/5 space-y-4"
                  >
                    <div className="bg-slate-950/40 rounded-2xl border border-white/5 p-4 md:p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <HelpCircle className="w-3.5 h-3.5 text-blue-400" />
                        <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-blue-400/60">Interaction</span>
                      </div>
                      <p className="text-sm md:text-base text-slate-300 font-medium mb-4 leading-relaxed">
                        {currentSlide.engagementElement.question}
                      </p>
                      
                      <div className="relative">
                        {!isAnswerRevealed ? (
                          <div className="py-3 flex items-center justify-center bg-slate-900 rounded-xl border border-dashed border-white/10 text-slate-500 text-[10px] md:text-xs">
                            <span className="animate-pulse">Waiting for presenter...</span>
                          </div>
                        ) : (
                          <motion.div
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl text-blue-300 font-semibold text-center text-sm"
                          >
                            {currentSlide.engagementElement.answer}
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="w-full md:w-[45%] flex flex-col gap-4">
                  <div className="relative group">
                    <SlideVisual slideId={currentSlide.id} />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity rounded-3xl" />
                  </div>
                  
                  {/* Visual Suggestion Label */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex items-center gap-3 text-[9px] uppercase font-bold tracking-[0.3em] text-slate-500 px-2"
                  >
                    <div className="w-6 h-px bg-slate-800" />
                    SIMULATION VIEW
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Floating Engagement Trigger (Hidden in Presenter Mode to avoid blocking footer navigation) */}
          {!isPresenter && (
            <div className="fixed bottom-28 right-6 md:bottom-32 md:right-10 z-30">
              <button
                onClick={() => setNavState(prev => ({ ...prev, engagement: true }))}
                className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white p-4 md:px-5 md:py-3 rounded-full shadow-2xl shadow-blue-900/50 transition-all hover:scale-105 active:scale-95 border border-white/20"
              >
                <HelpCircle className="w-6 h-6" />
                <span className="hidden md:inline font-bold">Ask the Class</span>
              </button>
            </div>
          )}
        </div>

        {/* Sidebar / Speaker Notes */}
        <AnimatePresence>
          {(showNotes || isPresenter) && (
            <motion.aside
              initial={{ x: 300, opacity: 0 }}
              animate={{ 
                x: 0,
                opacity: 1,
              }}
              exit={{ x: 300, opacity: 0 }}
              className={`bg-slate-950/90 backdrop-blur-2xl border-l border-white/10 flex flex-col z-20 ${isPresenter ? 'flex-1 md:flex-none md:w-[400px]' : 'w-full md:w-[400px] fixed md:relative inset-0 md:inset-auto'}`}
            >
              <div className="p-6 border-b border-white/10 flex items-center justify-between bg-amber-500/10">
                <div className="flex items-center gap-2 text-amber-400">
                  <Info className="w-5 h-5" />
                  <h3 className="font-bold uppercase tracking-tighter text-sm">
                    {isPresenter ? "Presenter View" : "Speaker Notes"}
                  </h3>
                </div>
                {!isPresenter && (
                  <button
                    onClick={() => setShowNotes(false)}
                    className="hover:text-amber-400 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
              <div className="flex-1 p-6 overflow-y-auto space-y-6">
                {isPresenter && (
                  <div className="space-y-4">
                    <button
                      onClick={() => setNavState(prev => ({ ...prev, engagement: true }))}
                      className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-900/40 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <HelpCircle className="w-5 h-5" />
                      Trigger "Ask the Class"
                    </button>
                    
                    <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 space-y-2">
                       <div className="flex items-center gap-2 text-blue-400">
                        <HelpCircle className="w-4 h-4" />
                        <span className="text-xs font-bold uppercase tracking-widest">Pro Tip: Sharing</span>
                      </div>
                      <p className="text-[10px] text-slate-400 leading-relaxed">
                        Share your <span className="text-blue-400 font-semibold">Audience Tab</span> to students, while keeping this <span className="text-amber-400 font-semibold">Presenter Window</span> on your private screen.
                      </p>
                    </div>
                  </div>
                )}
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Key Discussion Points</h4>
                  <ul className="text-xs text-slate-400 space-y-1 mb-6 list-disc pl-4">
                    <li>Ask students for real-world examples.</li>
                    <li>Emphasize the human impact of the technology.</li>
                    <li>Connect the slide to previous lessons.</li>
                  </ul>
                  
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Current Context & Script</h4>
                  <p className="text-slate-200 leading-relaxed text-sm md:text-lg font-medium font-serif">
                    {currentSlide.speakerNotes}
                  </p>
                </div>
                
                {isPresenter && (
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
      <footer className="p-4 md:px-8 md:py-6 bg-slate-950/90 backdrop-blur-md border-t border-white/5 flex items-center justify-between sticky bottom-0 z-40">
        <div className="flex items-center gap-1 md:gap-4 flex-shrink-0">
          <button
            onClick={prevSlide}
            disabled={currentSlideIndex === 0}
            className="p-2 md:p-3 rounded-full hover:bg-white/10 disabled:opacity-10 transition-all"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>
          <div className="text-[10px] md:text-sm font-mono text-slate-500 tabular-nums min-w-[60px] text-center">
            {currentSlideIndex + 1} / {currentLesson.slides.length}
          </div>
          <button
            onClick={nextSlide}
            disabled={currentSlideIndex === currentLesson.slides.length - 1}
            className="p-2 md:p-3 rounded-full hover:bg-white/10 disabled:opacity-10 transition-all text-blue-400"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>

        <div className="flex-1 px-4 md:px-12">
          <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-600 to-indigo-500"
              initial={false}
              animate={{
                width: `${((currentSlideIndex + 1) / currentLesson.slides.length) * 100}%`,
              }}
            />
          </div>
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
              onClick={() => setNavState(prev => ({ ...prev, engagement: false }))}
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

                <div className="rounded-2xl border border-white/5 bg-slate-950/50">
                  <button 
                    onClick={() => {
                      if (isPresenter) {
                        setNavState(prev => ({ ...prev, answerRevealed: !prev.answerRevealed }));
                      }
                    }}
                    className={`w-full text-left p-6 flex items-center justify-between transition-colors group ${isPresenter ? 'hover:bg-white/5' : 'cursor-default opacity-50'}`}
                  >
                    <span className={`${isAnswerRevealed ? 'text-blue-400' : 'text-slate-500'} font-medium transition-colors`}>
                      {isAnswerRevealed ? "Answer Revealed" : "Reveal Answer"}
                    </span>
                    <ChevronRight className={`w-5 h-5 transition-transform ${isAnswerRevealed ? 'rotate-90 text-blue-400' : 'text-slate-600'}`} />
                  </button>
                  <motion.div 
                    initial={false}
                    animate={{ maxHeight: isAnswerRevealed ? 200 : 0, opacity: isAnswerRevealed ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 border-t border-white/5">
                      <p className="text-xl text-green-400 font-semibold">
                        {currentSlide.engagementElement.answer}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

              <button
                onClick={() => setNavState(prev => ({ ...prev, engagement: false }))}
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
              <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                {LESSONS.map((lesson, idx) => (
                  <button
                    key={lesson.id}
                    onClick={() => {
                      setNavState({
                        lessonIndex: idx,
                        slideIndex: 0,
                        engagement: false,
                        answerRevealed: false
                      });
                      setShowSelector(false);
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

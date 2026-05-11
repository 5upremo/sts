import React from "react";
import { 
  Skull, 
  Biohazard, 
  Radiation, 
  FlaskConical, 
  ShieldAlert, 
  Globe, 
  History, 
  Microscope,
  Zap,
  Waves,
  Activity,
  Cpu,
  Wind,
  Shirt,
  AlertTriangle,
  Flame,
  Bomb,
  Target,
  Dna,
  Syringe,
  Ghost,
  BookOpen
} from "lucide-react";
import { motion } from "motion/react";

interface VisualProps {
  slideId: string;
}

export const SlideVisual: React.FC<VisualProps> = ({ slideId }) => {
  switch (slideId) {
    case "intro":
      return (
        <div className="relative w-full h-64 md:h-80 flex items-center justify-center bg-slate-950 rounded-3xl overflow-hidden border border-white/5">
          <div className="absolute inset-0 bg-gradient-to-t from-red-500/20 to-transparent" />
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Skull className="w-32 h-32 md:w-48 md:h-48 text-slate-800 drop-shadow-[0_0_50px_rgba(239,68,68,0.3)]" />
          </motion.div>
          <div className="absolute bottom-8 text-center px-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-red-500/60">High-Stakes Warning</p>
          </div>
        </div>
      );

    case "discussion-1":
      return (
        <div className="grid grid-cols-2 gap-4 w-full h-64 md:h-80 py-4">
          <div className="bg-slate-800/50 rounded-2xl p-6 flex flex-col items-center justify-center border border-white/5">
            <Target className="w-12 h-12 text-blue-400 mb-4" />
            <p className="text-sm font-bold uppercase text-slate-500">Conventional</p>
            <p className="text-[10px] text-slate-600 text-center mt-2">Precise, limited range</p>
          </div>
          <div className="bg-red-500/5 rounded-2xl p-6 flex flex-col items-center justify-center border border-red-500/10 relative overflow-hidden">
            <div className="absolute inset-0 border-2 border-dashed border-red-500/20 rounded-2xl animate-pulse" />
            <Waves className="w-12 h-12 text-red-500 mb-4" />
            <p className="text-sm font-bold uppercase text-red-400">WMD</p>
            <p className="text-[10px] text-red-500/60 text-center mt-2 font-bold italic">INDISCRIMINATE</p>
          </div>
        </div>
      );

    case "four-kinds":
      return (
        <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full h-80 py-4">
          {[
            { icon: Biohazard, label: "Biological", color: "text-green-400", bg: "bg-green-400/10" },
            { icon: FlaskConical, label: "Chemical", color: "text-yellow-400", bg: "bg-yellow-400/10" },
            { icon: Zap, label: "Nuclear", color: "text-blue-400", bg: "bg-blue-400/10" },
            { icon: Radiation, label: "Radiological", color: "text-orange-400", bg: "bg-orange-400/10" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className={`${item.bg} rounded-2xl flex flex-col items-center justify-center border border-white/5`}
            >
              <item.icon className={`w-10 h-10 ${item.color} mb-2`} />
              <p className={`text-[10px] font-bold uppercase tracking-wider ${item.color}`}>{item.label}</p>
            </motion.div>
          ))}
        </div>
      );

    case "history-1":
    case "history-2":
    case "history-3":
      return (
        <div className="w-full h-80 flex flex-col items-center justify-center bg-slate-800/30 rounded-3xl border border-white/5 p-8 relative overflow-hidden">
           <History className="absolute -right-8 -bottom-8 w-64 h-64 text-white/[0.02]" />
           <div className="relative z-10 flex flex-col items-center gap-6">
             <div className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center">
               <div className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
             </div>
             <p className="text-xl font-serif italic text-slate-400 text-center">
               "Tracing the path of human innovation in the darkest of arts."
             </p>
           </div>
        </div>
      );

    case "bio-warfare-1":
    case "bio-warfare-2":
    case "bio-warfare-3":
      return (
        <div className="w-full h-80 flex items-center justify-center bg-green-950/20 rounded-3xl border border-green-500/10 p-8">
           <div className="grid grid-cols-3 gap-6 opacity-40">
             <Dna className="w-12 h-12 text-green-400" />
             <Biohazard className="w-12 h-12 text-green-400" />
             <Syringe className="w-12 h-12 text-green-400" />
           </div>
           <div className="absolute inset-0 flex items-center justify-center">
             <motion.div
               animate={{ scale: [1, 1.1, 1] }}
               transition={{ duration: 4, repeat: Infinity }}
               className="p-12 rounded-full bg-green-500/5 border border-green-500/20"
             >
               <Dna className="w-24 h-24 text-green-500" />
             </motion.div>
           </div>
        </div>
      );

    case "chemical-warfare-1":
    case "chemical-agents-1":
    case "chemical-agents-2":
      return (
        <div className="w-full h-80 flex items-center justify-center bg-yellow-950/20 rounded-3xl border border-yellow-500/10 p-8 overflow-hidden">
           <div className="absolute inset-0 opacity-10">
              {Array.from({ length: 20 }).map((_, i) => (
                <div 
                  key={i} 
                  className="absolute bg-yellow-500 rounded-full blur-xl"
                  style={{
                    width: Math.random() * 100 + 50,
                    height: Math.random() * 100 + 50,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
           </div>
           <div className="relative z-10 flex flex-col items-center">
             <FlaskConical className="w-32 h-32 text-yellow-500 mb-4" />
             <p className="text-[10px] font-bold uppercase text-yellow-600 tracking-[0.2em]">Molecular Hazard</p>
           </div>
        </div>
      );

    case "nuclear-wmd-1":
    case "nuclear-effects":
      return (
        <div className="w-full h-80 flex items-center justify-center bg-blue-950/20 rounded-3xl border border-blue-500/10 p-8 overflow-hidden">
           <div className="absolute inset-0 flex items-center justify-center">
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               className="w-48 h-48 border border-blue-400/20 rounded-full"
             />
             <motion.div 
               animate={{ rotate: -360 }}
               transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
               className="w-64 h-64 border border-blue-400/10 rounded-full"
             />
           </div>
           <div className="relative z-10 flex flex-col items-center">
             <Zap className="w-32 h-32 text-blue-400 drop-shadow-[0_0_30px_rgba(96,165,250,0.5)]" />
             <p className="text-[10px] font-bold uppercase text-blue-500 tracking-[0.2em] mt-4">Fission / Fusion</p>
           </div>
        </div>
      );

    case "nt-intro":
    case "nt-definition":
      return (
        <div className="w-full h-80 flex items-center justify-center bg-indigo-950/20 rounded-3xl border border-indigo-500/10 p-8 overflow-hidden">
           <div className="grid grid-cols-8 grid-rows-8 gap-2 opacity-20">
             {Array.from({ length: 64 }).map((_, i) => (
               <div key={i} className="w-2 h-2 rounded-full bg-indigo-400" />
             ))}
           </div>
           <div className="absolute inset-0 flex items-center justify-center">
             <motion.div
               animate={{ scale: [0.8, 1.2, 0.8] }}
               transition={{ duration: 3, repeat: Infinity }}
             >
               <Microscope className="w-24 h-24 text-indigo-400" />
             </motion.div>
           </div>
        </div>
      );

    case "nt-key-devices":
      return (
        <div className="grid grid-cols-2 gap-4 w-full h-80">
          <div className="bg-slate-800/50 rounded-2xl p-6 flex flex-col items-center justify-center border border-white/5">
             <Microscope className="w-12 h-12 text-indigo-400 mb-4" />
             <p className="text-[10px] font-bold uppercase text-indigo-500">Atomic Force</p>
             <p className="text-[8px] text-slate-600 mt-1">100M+ Magnification</p>
          </div>
          <div className="bg-slate-800/50 rounded-2xl p-6 flex flex-col items-center justify-center border border-white/5">
             <Activity className="w-12 h-12 text-blue-400 mb-4" />
             <p className="text-[10px] font-bold uppercase text-blue-500">Scanning Tunneling</p>
             <p className="text-[8px] text-slate-600 mt-1">Molecular level probes</p>
          </div>
        </div>
      );

    case "nt-apps-medicine":
      return (
          <div className="w-full h-80 flex items-center justify-center bg-blue-950/20 rounded-3xl border border-blue-500/10 p-8 relative">
            <div className="absolute left-10 top-10 w-2 h-2 rounded-full bg-blue-400 animate-ping" />
            <div className="absolute right-20 bottom-10 w-2 h-2 rounded-full bg-blue-400 animate-ping" />
            <motion.div 
               animate={{ x: [0, 50, 0, -50, 0], y: [0, -30, 20, -30, 0] }}
               transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
               className="p-6 rounded-2xl bg-blue-500/20 border border-blue-500/40 shadow-[0_0_30px_rgba(59,130,246,0.3)]"
            >
              <Cpu className="w-12 h-12 text-blue-400" />
              <p className="text-[8px] font-bold mt-2 uppercase text-center">Nanorobot</p>
            </motion.div>
          </div>
      );

    case "nt-apps-electronics-env":
      return (
        <div className="grid grid-cols-2 gap-4 w-full h-80">
          <div className="bg-slate-800/50 rounded-2xl p-6 flex flex-col items-center justify-center border border-white/5">
             <Cpu className="w-12 h-12 text-indigo-400 mb-4" />
             <p className="text-[10px] font-bold uppercase text-indigo-500">Nanoelectronics</p>
          </div>
          <div className="bg-slate-800/50 rounded-2xl p-6 flex flex-col items-center justify-center border border-white/5">
             <Wind className="w-12 h-12 text-teal-400 mb-4" />
             <p className="text-[10px] font-bold uppercase text-teal-500">Environment</p>
          </div>
        </div>
      );

    case "nt-apps-consumer-sport":
      return (
        <div className="grid grid-cols-2 gap-4 w-full h-80">
          <div className="bg-slate-800/50 rounded-2xl p-6 flex flex-col items-center justify-center border border-white/5">
             <Shirt className="w-12 h-12 text-blue-400 mb-4" />
             <p className="text-[10px] font-bold uppercase text-blue-500">Smart Fabrics</p>
          </div>
          <div className="bg-slate-800/50 rounded-2xl p-6 flex flex-col items-center justify-center border border-white/5">
             <Target className="w-12 h-12 text-orange-400 mb-4" />
             <p className="text-[10px] font-bold uppercase text-orange-500">Sporting Goods</p>
          </div>
        </div>
      );

    case "nt-impact-health-security":
      return (
        <div className="w-full h-80 flex flex-col items-center justify-center bg-red-950/10 rounded-3xl border border-red-500/10 p-8">
           <div className="relative">
             <motion.div
               animate={{ rotate: [0, 10, -10, 0] }}
               transition={{ duration: 5, repeat: Infinity }}
             >
               <AlertTriangle className="w-32 h-32 text-red-500 drop-shadow-[0_0_20px_rgba(239,68,68,0.5)]" />
             </motion.div>
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <Ghost className="w-12 h-12 text-red-500 opacity-20" />
             </div>
           </div>
           <p className="text-xs font-bold uppercase tracking-[0.4em] text-red-600 mt-6">Gray Goo Scenario</p>
        </div>
      );

    case "summary-lesson-4":
    case "summary-lesson-6":
      return (
        <div className="w-full h-80 flex flex-col items-center justify-center bg-blue-500/10 rounded-3xl border border-blue-500/20 p-8">
           <div className="relative mb-6">
             <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 animate-pulse" />
             <div className="relative w-24 h-24 rounded-2xl bg-slate-900 border border-blue-500/50 flex items-center justify-center">
               <BookOpen className="w-12 h-12 text-blue-400" />
             </div>
           </div>
           <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500/30" />
              <div className="w-2 h-2 rounded-full bg-blue-500/50" />
              <div className="w-2 h-2 rounded-full bg-blue-500/30" />
           </div>
           <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-500 mt-4">Module Complete</p>
        </div>
      );

    case "radiological-dirty-bombs":
      return (
        <div className="w-full h-80 flex flex-col items-center justify-center bg-orange-950/20 rounded-3xl border border-orange-500/10 p-8 overflow-hidden">
           <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute inset-0 flex flex-wrap gap-4 items-center justify-center opacity-20">
                {Array.from({ length: 40 }).map((_, i) => (
                  <div key={i} className="w-1 h-1 rounded-full bg-orange-500 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                ))}
              </div>
              
              <div className="relative flex gap-12 items-center">
                <div className="flex flex-col items-center gap-2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-orange-500/20 blur-xl animate-pulse rounded-full" />
                    <Bomb className="w-20 h-20 text-orange-500 relative z-10" />
                  </div>
                  <p className="text-[8px] font-bold uppercase text-orange-600">Dispersal Device</p>
                </div>
                
                <div className="h-12 w-px bg-slate-800" />
                
                <div className="flex flex-col items-center gap-2">
                  <Radiation className="w-16 h-16 text-orange-400 animate-spin-slow" />
                  <p className="text-[8px] font-bold uppercase text-orange-600">Contamination</p>
                </div>
              </div>
           </div>
           <p className="text-[10px] font-bold uppercase text-orange-500 tracking-[0.2em] mt-4">Mass Disruption</p>
        </div>
      );

    default:
      return (
        <div className="w-full h-80 flex items-center justify-center bg-slate-800/20 rounded-3xl border border-dashed border-white/10">
          <Globe className="w-16 h-16 text-slate-700" />
        </div>
      );
  }
};

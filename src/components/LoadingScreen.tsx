import { useState, useEffect } from 'react';
import { Shield, Cpu, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const BOOT_LOGS = [
  'INITIALIZING NATIVEDEFENCE KERNEL V4.0.12...',
  'CONNECTING TO THREAT INTELLIGENCE NODES...',
  'LOADING ASYMMETRIC ENCRYPTION KEYSETS...',
  'STARTING AI-DRIVEN PACKET DECODERS...',
  'ESTABLISHING HANDSHAKE WITH NATIVEDEFENCE SOC...',
  'SECURE CONNECTION ESTABLISHED ON PORT 443.',
  'UPLINK OK. MEMORY VIRTUALIZATION UP...',
  'NATIVEDEFENCE PROTECTION ONLINE.'
];

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [logs, setLogs] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState(0);

  // Speed up progress bar and line printing
  useEffect(() => {
    const totalTime = 2200; // ms
    const intervalTime = 22;
    const increment = 100 / (totalTime / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  // Sync log stages with progress
  useEffect(() => {
    const logIndex = Math.min(Math.floor((progress / 100) * BOOT_LOGS.length), BOOT_LOGS.length - 1);
    if (logIndex >= stage && stage < BOOT_LOGS.length) {
      setLogs((prev) => [...prev, BOOT_LOGS[stage]]);
      setStage(stage + 1);
    }
  }, [progress, stage]);

  // Handle completion fade out
  useEffect(() => {
    if (progress === 100) {
      const delay = setTimeout(() => {
        onComplete();
      }, 400); // delay before completion
      return () => clearTimeout(delay);
    }
  }, [progress, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#0A0F1F] select-none"
    >
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 cyber-grid-bg opacity-20 pointer-events-none" />
      <div className="scan-line" style={{ animationDuration: '4s' }} />

      {/* Futuristic Cyber Badge HUD */}
      <div className="relative z-10 flex flex-col items-center max-w-xl w-full px-6 text-center">
        
        {/* Animated Outer Ring */}
        <div className="relative mb-8">
          <div className="absolute inset-0 rounded-full border border-[rgba(0,229,255,0.15)] scale-125 animate-ping-cyber" />
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-[rgba(0,229,255,0.3)] animate-spin-slow" />
          
          <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-[rgba(17,24,39,0.85)] border border-[rgba(0,229,255,0.25)] shadow-[0_0_30px_rgba(0,229,255,0.2)]">
            <Shield className="w-10 h-10 text-[#00E5FF] animate-pulse" />
          </div>
        </div>

        {/* Dynamic Title */}
        <h2 className="text-xl font-bold tracking-[0.2em] text-white uppercase mb-2">
          Initializing NativeDefence<sup className="text-[10px] text-[#00E5FF]">™</sup>
        </h2>
        <p className="text-xs text-[#7a9bb5] uppercase tracking-widest mb-6">
          Advanced Zero-Trust System Loader
        </p>

        {/* Boot Terminal Box */}
        <div className="w-full text-left bg-[rgba(17,24,39,0.85)] border border-[rgba(0,229,255,0.15)] rounded-xl p-5 mb-8 h-48 overflow-hidden font-mono shadow-[inset_0_0_20px_rgba(0,0,0,0.6)] relative">
          
          {/* Decorative Corner Borders */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#00E5FF]" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#00E5FF]" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#00E5FF]" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#00E5FF]" />

          {/* Scrolling log text */}
          <div className="flex flex-col gap-1.5 h-full overflow-y-auto pr-2 custom-scrollbar">
            {logs.map((log, i) => (
              <div key={i} className="flex items-start gap-2 text-[10px] sm:text-xs">
                <span className="text-[#00E5FF]/50 select-none">&gt;&gt;</span>
                <span className={i === logs.length - 1 ? 'text-[#00E5FF] font-semibold' : 'text-[#7a9bb5]'}>
                  {log}
                </span>
              </div>
            ))}
            
            {progress < 100 && (
              <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-[#00E5FF] animate-pulse">
                <span className="text-[#00E5FF]/50">&gt;&gt;</span>
                <span>PROCESSING SYSTEM SECURITY HANDSHAKE...</span>
                <span className="w-1.5 h-3 bg-[#00E5FF] inline-block animate-pulse-fast" />
              </div>
            )}
          </div>
        </div>

        {/* Progress Bar & Numerical Glow */}
        <div className="w-full">
          <div className="flex items-center justify-between text-xs font-mono text-[#7a9bb5] mb-2 px-1">
            <span className="flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-[#00E5FF] animate-spin-slow" />
              INTEGRITY CHECK
            </span>
            <span className="text-[#00E5FF] font-bold tracking-widest">{Math.round(progress)}%</span>
          </div>

          {/* Outer track */}
          <div className="h-2 w-full bg-[rgba(17,24,39,0.8)] border border-[rgba(0,229,255,0.15)] rounded-full overflow-hidden p-[1px]">
            {/* Loading Fill */}
            <div
              className="h-full rounded-full transition-all duration-75 ease-out shadow-[0_0_10px_rgba(0,229,255,0.6)]"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #3B82F6 0%, #00E5FF 100%)',
              }}
            />
          </div>
        </div>

        {/* Micro System Indicators */}
        <div className="flex items-center justify-center gap-6 mt-8 text-[9px] font-mono text-[#7a9bb5] uppercase tracking-widest">
          <span className="flex items-center gap-1">
            <Activity className="w-3 h-3 text-[#3B82F6] animate-pulse" />
            SOC LINKED
          </span>
          <span>·</span>
          <span>SECURE SHELL</span>
          <span>·</span>
          <span>AES-256</span>
        </div>
      </div>
    </motion.div>
  );
}

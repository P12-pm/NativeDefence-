import { useRef } from 'react';

export default function HeroVideoBg() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="absolute inset-0 z-0">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
        style={{ filter: 'brightness(0.35) saturate(1.2)' }}
      >
        <source src="/NativeDefence-/Create_a_premium_cinematic_cyb.mp4" type="video/mp4" />
      </video>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 hero-video-overlay" />

      {/* Cyber grid overlay */}
      <div className="absolute inset-0 cyber-grid-bg opacity-40" />

      {/* Scan line animation */}
      <div className="scan-line" style={{ animationDuration: '8s', top: 0 }} />

      {/* Corner glow effects */}
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,229,255,0.08) 0%, transparent 60%)',
          transform: 'translate(-30%, 30%)',
        }}
      />
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 60%)',
          transform: 'translate(20%, -20%)',
        }}
      />
    </div>
  );
}

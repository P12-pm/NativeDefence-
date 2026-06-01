import { useEffect, useState } from 'react';

export default function MouseFollowGlow() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Smooth tracking with standard translate
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-30 transition-opacity duration-500 ease-out hidden lg:block opacity-40"
      style={{
        mixBlendMode: 'screen',
      }}
    >
      <div
        className="absolute w-[450px] h-[450px] rounded-full blur-[110px] pointer-events-none transform -translate-x-1/2 -translate-y-1/2 will-change-transform"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          background: 'radial-gradient(circle, rgba(0,229,255,0.12) 0%, rgba(59,130,246,0.06) 50%, transparent 80%)',
          transition: 'left 0.15s cubic-bezier(0.25, 1, 0.5, 1), top 0.15s cubic-bezier(0.25, 1, 0.5, 1)',
        }}
      />
    </div>
  );
}

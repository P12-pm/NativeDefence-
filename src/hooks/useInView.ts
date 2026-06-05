import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export function useCountUp(target: number, active: boolean, duration = 1.8) {
  const [count, setCount] = useState(0);
  const valRef = useRef({ val: 0 });

  useEffect(() => {
    if (!active) return;
    const obj = valRef.current;
    obj.val = 0; // Reset count-up target

    const tween = gsap.to(obj, {
      val: target,
      duration: duration,
      ease: 'power2.out',
      onUpdate: () => {
        setCount(Math.floor(obj.val));
      }
    });

    return () => {
      tween.kill();
    };
  }, [active, target, duration]);

  return count;
}


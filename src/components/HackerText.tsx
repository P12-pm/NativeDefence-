import { useState, useEffect, useRef, useCallback } from 'react';

interface HackerTextProps {
  text: string;
  className?: string;
  delay?: number;
  triggerOnHover?: boolean;
}

const GLYPHS = '01#X%$&@*[]{}<>?/\\_+=~^';

export default function HackerText({ text, className = '', delay = 0, triggerOnHover = false }: HackerTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startScramble = useCallback(() => {
    if (isScrambling) return;
    setIsScrambling(true);

    let iterations = 0;
    const targetText = text;

    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setDisplayText(() => {
        return targetText
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iterations) {
              return targetText[index];
            }
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join('');
      });

      if (iterations >= targetText.length) {
        setIsScrambling(false);
        if (timerRef.current) clearInterval(timerRef.current);
      }

      iterations += 1 / 3; // speed of resolving characters
    }, 25);
  }, [text, isScrambling]);

  useEffect(() => {
    const startDelay = setTimeout(() => {
      startScramble();
    }, delay);

    return () => {
      clearTimeout(startDelay);
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [text, delay, startScramble]);

  return (
    <span
      className={`inline-block ${className} cursor-default select-none`}
      onMouseEnter={triggerOnHover ? startScramble : undefined}
    >
      {displayText}
    </span>
  );
}

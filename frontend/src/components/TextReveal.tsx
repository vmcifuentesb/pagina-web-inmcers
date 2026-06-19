import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  highlightWords?: string[]; // Words to highlight with a gradient
  as?: 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'span';
}

export const TextReveal: React.FC<TextRevealProps> = ({ text, className = '', delay = 0, highlightWords = [], as = 'div' }) => {
  const containerRef = useRef<any>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Select all the word spans
    const words = el.querySelectorAll('.reveal-word');

    const ctx = gsap.context(() => {
      gsap.fromTo(words, 
        { y: '120%', rotationZ: 5, opacity: 0 },
        { 
          y: '0%', 
          rotationZ: 0, 
          opacity: 1,
          duration: 0.8, 
          stagger: 0.05, 
          ease: 'power4.out',
          delay: delay,
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          }
        }
      );
    }, el);

    return () => ctx.revert();
  }, [delay, text]);

  // Split text into words
  const words = text.split(' ');

  const Component = as;

  return (
    <Component ref={containerRef} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        // Check if word contains a highlight word (ignoring punctuation like commas)
        const cleanWord = word.replace(/[.,]/g, '');
        const isHighlight = highlightWords.some(hw => hw.toLowerCase() === cleanWord.toLowerCase());
        
        return (
          <span key={i} className="text-reveal-mask inline-block mr-[0.25em] pb-1">
            <span className={`reveal-word inline-block origin-bottom-left ${isHighlight ? 'text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-primary to-accent' : ''}`}>
              {word}
            </span>
          </span>
        );
      })}
    </Component>
  );
};

export default TextReveal;

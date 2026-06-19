import { useEffect, useRef, useState } from 'react';

export const useScrollReveal = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const ref = useRef<any>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          // Una vez revelado, no necesitamos seguir observando
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold: 0.05, // Se activa cuando el 5% del elemento es visible
        rootMargin: '0px 0px -40px 0px', // Activar un poco antes de que toque la base del viewport
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return [ref, isRevealed] as const;
};

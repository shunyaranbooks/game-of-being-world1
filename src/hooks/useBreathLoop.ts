import { useCallback, useEffect, useRef, useState } from 'react';

type Phase = 'idle' | 'inhale' | 'exhale' | 'done';

export function useBreathLoop(
  inhaleMs = 3000,
  exhaleMs = 6000,
  onComplete?: () => void
) {
  const [phase, setPhase] = useState<Phase>('idle');
  const [progress, setProgress] = useState(0);
  const timer = useRef<number | null>(null);
  const started = useRef(false);

  const clear = () => {
    if (timer.current) cancelAnimationFrame(timer.current);
    timer.current = null;
  };

  const runPhase = useCallback((duration: number, next: Phase) => {
    const start = performance.now();
    const step = (t: number) => {
      const elapsed = t - start;
      setProgress(Math.min(1, elapsed / duration));
      if (elapsed >= duration) {
        setProgress(1);
        setPhase(next);
      } else {
        timer.current = requestAnimationFrame(step);
      }
    };
    timer.current = requestAnimationFrame(step);
  }, []);

  useEffect(() => {
    if (phase === 'inhale') runPhase(inhaleMs, 'exhale');
    else if (phase === 'exhale') runPhase(exhaleMs, 'done');
    else if (phase === 'done') {
      clear();
      onComplete?.();
      const id = requestAnimationFrame(() => setTimeout(() => {
        setPhase('idle'); setProgress(0); started.current = false;
      }, 250));
      return () => cancelAnimationFrame(id);
    }
    return clear;
  }, [phase]);

  const start = useCallback(() => {
    if (started.current) return;
    started.current = true;
    setProgress(0);
    setPhase('inhale');
  }, []);

  useEffect(() => () => clear(), []);

  return { phase, progress, start };
}

import React from 'react';
import { useBreathLoop } from '../hooks/useBreathLoop';

type Props = { onSaved?: () => void; inhaleMs?: number; exhaleMs?: number };

export default function SaveButton({ onSaved, inhaleMs = 3000, exhaleMs = 6000 }: Props) {
  const { phase, progress, start } = useBreathLoop(inhaleMs, exhaleMs, onSaved);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.repeat) return;
      if (e.code === 'Space' || e.key.toLowerCase() === 's') {
        e.preventDefault();
        start();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [start]);

  const label =
    phase === 'idle'   ? 'Save' :
    phase === 'inhale' ? 'Inhale…' :
    phase === 'exhale' ? 'Exhale…' :
    'Saved';

  const sub =
    phase === 'idle'   ? '(inhale 1 • exhale 2)' :
    phase === 'inhale' ? 'Fill gently' :
    phase === 'exhale' ? 'Let go—twice as long' :
    'Checkpoint set';

  const total =
    phase === 'exhale' ? 0.5 + progress * 0.5 :
    phase === 'inhale' ? progress * 0.5 :
    phase === 'done'   ? 1 : 0;

  return (
    <div className="save-wrap" role="group" aria-label="Breath Save">
      <button className={`save-btn ${phase}`} onClick={start}>
        {label}
      </button>
      <div className="save-sub">{sub}</div>
      <div className="save-bar">
        <div className="save-fill" style={{ transform: `scaleX(${total})` }} />
      </div>
      <div className="save-hint">Press <kbd>Space</kbd> or <kbd>S</kbd></div>
    </div>
  );
}

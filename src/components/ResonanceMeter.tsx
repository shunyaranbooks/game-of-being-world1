import React from "react";
import { useApp } from "../state/store";

export default function ResonanceMeter(){
  const resonance = useApp(s=>s.resonance);
  const pct = Math.max(0, Math.min(100, resonance));
  const hue = 170 + (pct/100)*70; // teal → green
  return (
    <div className="stack">
      <div className="small">Resonance</div>
      <div className="meter"><div className="fill" style={{width:`${pct}%`, background:`hsl(${hue} 70% 50%)`}}/></div>
    </div>
  );
}

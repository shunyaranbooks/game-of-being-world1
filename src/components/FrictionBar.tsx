import React from "react";
import { useApp } from "../state/store";
export default function FrictionBar(){
  const friction = useApp(s=>s.friction);
  return(
    <div className="stack">
      <div className="small">Friction</div>
      <div className="friction"><div className="bar" style={{width:`${friction}%`}}/></div>
      <div className="meta">{friction.toFixed(0)} / 100 — lower by recognition (gratitude, silence, edit loop)</div>
    </div>
  );
}

import React, { useEffect, useRef, useState } from "react";
import { useApp } from "../state/store";

type Props = { inhaleMs?: number; exhaleMs?: number; onSaved?: () => void; label?: string; };
export default function SaveButton({ inhaleMs = 3000, exhaleMs = 6000, onSaved, label="Save" }: Props) {
  const [phase,setPhase]=useState<"idle"|"inhale"|"exhale"|"done">("idle");
  const tRef=useRef<number|null>(null);
  const saveBreath = useApp(s=>s.saveBreath);

  const run=()=>{setPhase("inhale");
    tRef.current=window.setTimeout(()=>{setPhase("exhale");
      tRef.current=window.setTimeout(()=>{setPhase("done");saveBreath();onSaved?.();},exhaleMs);
    },inhaleMs);};
  useEffect(()=>{const onKey=(e:KeyboardEvent)=>{if(e.code==="Space"||e.key.toLowerCase()==="s"){e.preventDefault();if(phase==="idle")run();}};
    window.addEventListener("keydown",onKey);return()=>window.removeEventListener("keydown",onKey);},[phase]);

  return(
    <div className="stack">
      <button className="btn" disabled={phase!=="idle"} onClick={()=>phase==="idle"&&run()}>
        {phase==="idle"&&label}
        {phase==="inhale"&&"Inhale…"}
        {phase==="exhale"&&"Exhale…"}
        {phase==="done"&&"Checkpoint set ✓"}
      </button>
      <div className="meta">(inhale 1 • exhale 2) — Press <span className="kbd">Space</span> or <span className="kbd">S</span></div>
      <div id="halo"><div className="bar" style={{width: phase==="inhale"?"33%":phase==="exhale"?"100%":phase==="done"?"100%":"0%"}}/></div>
    </div>
  );
}

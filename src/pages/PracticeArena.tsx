import React from "react";
import SaveButton from "../components/SaveButton";
import { useNavigate } from "react-router-dom";
import { nextScenePath, saveCheckpoint } from "../sceneFlow";
import { useApp } from "../state/store";
import ScoreCard from "../components/ScoreCard";

export default function PracticeArena(){
  const nav = useNavigate();
  const addRes = useApp(s=>s.addResonance);

  return (
    <main>
      <div className="h2">Practice Arena — Seeing · Breath · Echo</div>
      <p className="lead">Stable Wobble: keep rhythm through change. Breath is the controller.</p>

      <div className="grid grid3">
        <div className="card stack">
          <b>Drill 1 — Three-Step Seeing</b>
          <div className="small">Object → Seeing → Knowing of seeing.</div>
          <button className="btn" onClick={()=>addRes(2)}>Run once (RES +2)</button>
        </div>
        <div className="card stack">
          <b>Drill 2 — Breath Alignment (Halo)</b>
          <div className="small">Inhale 1 • Exhale 2 → Halo smooths.</div>
          <button className="btn" onClick={()=>addRes(2)}>Hold rhythm (RES +2)</button>
        </div>
        <div className="card stack">
          <b>Drill 3 — Echo Response</b>
          <div className="small">Throw a thought; listen for what returns.</div>
          <button className="btn" onClick={()=>addRes(2)}>Call and response (RES +2)</button>
        </div>
      </div>

      <ScoreCard label="Practice Summary — 0 / +1 / +2"/>
      <div className="panel">
        <SaveButton onSaved={()=>{ saveCheckpoint("practice"); nav(nextScenePath("practice")); }} />
      </div>
    </main>
  );
}

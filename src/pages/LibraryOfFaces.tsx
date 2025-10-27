import React from "react";
import FrictionBar from "../components/FrictionBar";
import SaveButton from "../components/SaveButton";
import { useNavigate } from "react-router-dom";
import { nextScenePath, saveCheckpoint } from "../sceneFlow";
import { useApp } from "../state/store";
import ScoreCard from "../components/ScoreCard";

export default function LibraryOfFaces(){
  const nav = useNavigate();
  const editLoopUpstream = useApp(s=>s.editLoopUpstream);
  const editLoopMidstream = useApp(s=>s.editLoopMidstream);
  const insertSilence = useApp(s=>s.insertSilence);
  const unlockQuietName = useApp(s=>s.unlockQuietName);

  return (
    <main>
      <div className="h2">Library of Faces — Boss Paradox</div>
      <p className="lead">No enemies; only habits. Lower Friction by recognition (edit loop, silence, gratitude).</p>
      <FrictionBar/>

      <div className="grid grid3">
        <div className="card stack">
          <b>Pass 2 — Breath at Pattern</b>
          <div className="small">Superstition ↓ → Story shrinks.</div>
          <button className="btn" onClick={editLoopUpstream}>Run edit (Pattern)</button>
        </div>
        <div className="card stack">
          <b>Pass 3 — Smallest True Sentence</b>
          <div className="small">Story becomes bridge.</div>
          <button className="btn" onClick={editLoopMidstream}>Run edit (Story)</button>
        </div>
        <div className="card stack">
          <b>Pass 4 — Silence First</b>
          <div className="small">Stillness refreshes motion.</div>
          <button className="btn" onClick={insertSilence}>Insert Silence</button>
        </div>
      </div>

      <div className="panel stack">
        <b>Integration — Quiet Name</b>
        <div className="quote">“I am the space where this moment knows itself.”</div>
        <button className="btn" onClick={unlockQuietName}>Unlock Quiet Name (Friction → 0)</button>
      </div>

      <ScoreCard label="Boss Paradox — 0 / +1 / +2"/>

      <div className="panel">
        <SaveButton onSaved={()=>{ saveCheckpoint("library"); nav(nextScenePath("library")); }} />
      </div>
    </main>
  );
}

import React from "react";
import SaveButton from "../components/SaveButton";
import { useNavigate } from "react-router-dom";
import { nextScenePath, saveCheckpoint } from "../sceneFlow";
import { useApp } from "../state/store";
import ScoreCard from "../components/ScoreCard";

export default function CostumeRoom(){
  const nav = useNavigate();
  const gratitudeSolvent = useApp(s=>s.gratitudeSolvent);
  const addItem = useApp(s=>s.addItem);
  const sentinelPing = useApp(s=>s.sentinelPing);
  const clearSentinel = useApp(s=>s.clearSentinel);

  return (
    <main>
      <div className="h2">Section G · Costume Room — Roles & Transparency</div>
      <p className="lead">Roles are tools, not tyrants. Wear consciously. Remove gently. Bow both ways.</p>

      <div className="grid grid3">
        <div className="card stack">
          <b>Retitle Critic → Curator</b>
          <button className="btn" onClick={()=>gratitudeSolvent()}>Say “Thank you for guarding quality.” (Friction ↓)</button>
        </div>
        <div className="card stack">
          <b>Performer → Communicator</b>
          <button className="btn" onClick={()=>addItem("Quiet Compass")}>Equip Quiet Compass (points toward sincerity)</button>
        </div>
        <div className="card stack">
          <b>Sentinel Mode</b>
          <div className="small">Guard → Guide. “One ping, then none.”</div>
          <div className="row">
            <button className="btn" onClick={()=>sentinelPing("bow-loop")}>Type B — Loop (bow)</button>
            <button className="btn" onClick={()=>sentinelPing("raise-border")}>Type C — Border</button>
            <button className="btn" onClick={()=>clearSentinel()}>Stand down</button>
          </div>
        </div>
      </div>

      <ScoreCard label="Transparency Protocol — 0 / +1 / +2" />

      <div className="panel">
        <SaveButton onSaved={()=>{ saveCheckpoint("costume"); nav(nextScenePath("costume")); }} />
      </div>
    </main>
  );
}

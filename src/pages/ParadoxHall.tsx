import React from "react";
import SaveButton from "../components/SaveButton";
import { useNavigate } from "react-router-dom";
import { nextScenePath, saveCheckpoint } from "../sceneFlow";
import { useApp } from "../state/store";
import ScoreCard from "../components/ScoreCard";

export default function ParadoxHall(){
  const nav = useNavigate();
  const setTint = useApp(s=>s.setTint);

  return (
    <main>
      <div className="h2">Section C · Paradox Hall — Sigils of Inquiry</div>
      <p className="lead">“You are the question pretending it already has an answer.” Choose a stance to tint the world.</p>

      <div className="row">
        <button className="btn" onClick={()=>setTint("Deep Blue")}>Ask (Deep Blue)</button>
        <button className="btn" onClick={()=>setTint("Luminous White")}>Write (Luminous White)</button>
        <button className="btn" onClick={()=>setTint("Warm Amber")}>See (Warm Amber)</button>
      </div>

      <div className="panel">
        <div className="small">Press Save to continue.</div>
        <SaveButton onSaved={()=>{ saveCheckpoint("paradox"); nav(nextScenePath("paradox")); }} />
      </div>

      <ScoreCard label="Resonance Loop 02 — Ask → Feel → Open"/>
    </main>
  );
}

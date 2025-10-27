import React from "react";
import SaveButton from "../components/SaveButton";
import ResonanceMeter from "../components/ResonanceMeter";
import { useNavigate } from "react-router-dom";
import { nextScenePath, saveCheckpoint } from "../sceneFlow";
import { useApp } from "../state/store";

export default function Home(){
  const nav = useNavigate();
  const addRes = useApp(s=>s.addResonance);
  return (
    <main>
      <div className="h1">Game of Being — World I · Level 1 — Who Am I?</div>
      <p className="lead">Begin where certainty ends. One breath is enough to load the world.</p>
      <div className="panel stack">
        <div><b>Mission:</b> Notice the player is also the game. <span className="tag">Paradox Card #1</span></div>
        <div className="quote">“Don’t just read philosophy—play it.”</div>
        <ResonanceMeter/>
        <SaveButton onSaved={()=>{ saveCheckpoint("home"); addRes(2); nav(nextScenePath("home")); }} />
      </div>
      <div className="grid grid3">
        <div className="card"><b>Controls</b><div className="small">Look = Attention • Move = Curiosity • Interact = Honesty • Jump = Silence • Save = Breath</div></div>
        <div className="card"><b>Scoring</b><div className="small">No leaderboards. Self-score each drill <b>0 / +1 / +2</b> by sincerity.</div></div>
        <div className="card"><b>Failure</b><div className="small">None. Only loops. Recognition lowers friction.</div></div>
      </div>
    </main>
  );
}

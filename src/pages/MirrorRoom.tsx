import React from "react";
import SaveButton from "../components/SaveButton";
import { useNavigate } from "react-router-dom";
import { nextScenePath, saveCheckpoint } from "../sceneFlow";
import MirrorAlign from "../components/MirrorAlign";
import ScoreCard from "../components/ScoreCard";

export default function MirrorRoom(){
  const nav = useNavigate();
  return (
    <main>
      <div className="h2">Section H · Mirror Room — Image vs Awareness</div>
      <p className="lead">Stand simply. Let the watcher lose hunger. Align panes to acquire the <b>Mirror Key</b>.</p>
      <MirrorAlign/>
      <ScoreCard label="Mirror Suite — 0 / +1 / +2"/>
      <div className="panel">
        <SaveButton onSaved={()=>{ saveCheckpoint("mirror"); nav(nextScenePath("mirror")); }} />
      </div>
    </main>
  );
}

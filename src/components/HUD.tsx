import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useApp } from "../state/store";
import { SCENE_PATH } from "../sceneFlow";

export default function HUD(){
  const loc = useLocation();
  const resonance = useApp(s=>s.resonance);
  const tint = useApp(s=>s.tint);
  const sentinel = useApp(s=>s.sentinel);
  const inv = useApp(s=>s.inventory);

  return (
    <>
      <nav className="nav">
        <Link to={SCENE_PATH.home}>Home</Link>
        <Link to={SCENE_PATH.paradox}>Paradox Hall</Link>
        <Link to={SCENE_PATH.costume}>Costume Room</Link>
        <Link to={SCENE_PATH.mirror}>Mirror Room</Link>
        <Link to={SCENE_PATH.practice}>Practice Arena</Link>
        <Link to={SCENE_PATH.library}>Library</Link>
        <Link to={SCENE_PATH.debrief}>Debrief</Link>
      </nav>
      <div className="container">
        <div className="hud">
          <div className="badge">Resonance ★ {resonance}</div>
          <div className="badge">Tint: {tint}</div>
          <div className="badge">Sentinel: {sentinel === "idle" ? "lantern idle" : sentinel}</div>
          <div className="badge">Inventory: {Array.from(inv).join(" • ") || "—"}</div>
          <div className="badge">◉ Save</div>
          <div className="badge">{loc.pathname}</div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import SixRings from "../components/SixRings";
import ResonanceMeter from "../components/ResonanceMeter";
import { useApp } from "../state/store";

export default function Debrief(){
  const inv = useApp(s=>s.inventory);
  const history = useApp(s=>s.scoreHistory);

  return (
    <main>
      <div className="h2">Debrief & Carry-Forward</div>
      <p className="lead">Resonance Ledger saved. Silence now counts as a move. Items and skills carry into World II.</p>

      <div className="grid grid2">
        <div className="card stack">
          <b>Inventory</b>
          <div className="small">{Array.from(inv).join(" • ") || "—"}</div>
          <ResonanceMeter/>
        </div>
        <div className="card stack">
          <b>Scores</b>
          <div className="small">{history.length ? history.join(", ") : "No drills scored yet"}</div>
          <div className="meta">Rule: calibration &gt; applause.</div>
        </div>
      </div>

      <div className="h2">Six Rings — Quick Tuning</div>
      <SixRings/>

      <div className="panel">
        <div className="small">Carryover: Quiet Name • Mirror Key • Quiet Compass • Half-Inch of Freedom • Transparency Protocol • Stable Wobble • Sentinel v2.0 • Loop Overlay</div>
      </div>
    </main>
  );
}

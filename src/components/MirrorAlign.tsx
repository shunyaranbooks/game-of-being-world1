import React, { useState } from "react";
import { useApp } from "../state/store";

/** Simulates IMAGE vs AWARENESS panes. Dropping "pose" aligns panes and grants Mirror Key. */
export default function MirrorAlign(){
  const [posing,setPosing]=useState(true);
  const addItem = useApp(s=>s.addItem);
  const addRes = useApp(s=>s.addResonance);

  const standSimply = ()=>{
    setPosing(false);
    addItem("Mirror Key");
    addRes(5);
  };

  return(
    <div className="stack">
      <div className="mirror">
        <div className="pane">
          <b>IMAGE</b>
          <p className="meta">{posing ? "managed picture; trying to be seen" : "relaxed picture; un-arranged face"}</p>
        </div>
        <div className="pane">
          <b>AWARENESS</b>
          <p className="meta">{posing ? "dimmed (watching the watcher)" : "present (seeing seeing)"}</p>
        </div>
      </div>
      {posing ? (
        <button className="btn" onClick={standSimply}>Stand simply (drop the pose) → Acquire Mirror Key</button>
      ) : (
        <div className="ok">Mirror Key acquired. Lag between seeing and knowing reduced.</div>
      )}
    </div>
  );
}

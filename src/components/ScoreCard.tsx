import React, { useState } from "react";
import { useApp } from "../state/store";
export default function ScoreCard({label="Self-score 0 / +1 / +2"}:{label?:string}){
  const score = useApp(s=>s.score);
  const [picked,setPicked]=useState<number|null>(null);
  return(
    <div className="panel">
      <div className="small">{label}</div>
      <div className="row">
        {[0,1,2].map(n=>(
          <button key={n} className="btn" onClick={()=>{setPicked(n); score(n as 0|1|2);}}>
            {n===0?"0 — noise / habit":n===1?"+1 — small click":"+2 — breath stood by itself"}
          </button>
        ))}
      </div>
      {picked!==null && <div className="meta">Saved: {picked}</div>}
    </div>
  );
}

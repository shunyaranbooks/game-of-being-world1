import React from "react";
import { useApp, Ring } from "../state/store";
const RINGS: Ring[] = ["Sense","Pattern","Story","Identity","Choice","Silence"];

export default function SixRings(){
  const rings = useApp(s=>s.rings);
  const setRing = useApp(s=>s.setRing);
  const color = (st: "balanced"|"overfed"|"starved") =>
    st==="balanced"?"var(--ring-ok)":st==="overfed"?"var(--ring-warn)":"var(--ring-bad)";
  return(
    <div className="rings">
      {RINGS.map(r=>
        <div className="ring" key={r}>
          <h4>{r}</h4>
          <div className="row">
            {(["balanced","overfed","starved"] as const).map(st=>
              <button key={st} className="btn small"
                style={{borderColor:"rgba(255,255,255,.12)", color: color(st)}}
                onClick={()=>setRing(r,st)}>{st}</button>
            )}
          </div>
          <div className="meta">State: <b style={{color:color(rings[r])}}>{rings[r]}</b></div>
        </div>
      )}
    </div>
  );
}

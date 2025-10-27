import { create } from "zustand";

export type Item = "Mirror Key" | "Quiet Name" | "Quiet Compass" | "Half-Inch of Freedom";
export type Ring = "Sense" | "Pattern" | "Story" | "Identity" | "Choice" | "Silence";

export type WorldTint = "Deep Blue" | "Luminous White" | "Warm Amber";

type SentinelType = "idle" | "ping-cliff" | "bow-loop" | "raise-border";

export interface AppState {
  resonance: number; // 0..100
  friction: number;  // 0..100 (Boss bar)
  tint: WorldTint;
  inventory: Set<Item>;
  rings: Record<Ring, "balanced" | "overfed" | "starved">;
  sentinel: SentinelType;
  debuffs: { certaintySpike: boolean; jawTension: boolean };
  scoreHistory: number[]; // 0,1,2

  addResonance(delta: number): void;
  setFriction(v: number): void;
  setTint(t: WorldTint): void;
  addItem(i: Item): void;
  setRing(r: Ring, state: "balanced" | "overfed" | "starved"): void;

  saveBreath(): void;
  score(n: 0|1|2): void;

  sentinelPing(type: SentinelType): void;
  clearSentinel(): void;

  editLoopUpstream(): void;     // Pattern → Story shrinks
  editLoopMidstream(): void;    // Story minimal line
  insertSilence(): void;        // Silence refreshes

  gratitudeSolvent(): void;     // lowers compulsion (friction--)

  unlockQuietName(): void;
}

export const useApp = create<AppState>((set,get)=>({
  resonance: 12,
  friction: 85,
  tint: "Warm Amber",
  inventory: new Set<Item>(["Quiet Compass"]),
  rings: {
    Sense: "balanced", Pattern: "balanced", Story: "balanced",
    Identity: "balanced", Choice: "balanced", Silence: "balanced"
  },
  sentinel: "idle",
  debuffs: { certaintySpike:false, jawTension:false },
  scoreHistory: [],

  addResonance: (d)=> set(s=>({ resonance: Math.max(0, Math.min(100, s.resonance + d)) })),
  setFriction: (v)=> set(()=>({ friction: Math.max(0, Math.min(100, v)) })),
  setTint: (t)=> set(()=>({ tint:t })),
  addItem: (i)=> set(s=>{
    const inv = new Set(s.inventory); inv.add(i); return { inventory: inv };
  }),
  setRing: (r,st)=> set(s=>({ rings: { ...s.rings, [r]: st }})),

  saveBreath: ()=> {
    // inhale/exhale → small resonance bump, soften certainty, tiny friction drop
    const { resonance, friction } = get();
    const nextR = Math.min(100, resonance + 2);
    const nextF = Math.max(0, friction - 2);
    set(()=>({ resonance: nextR, friction: nextF, debuffs: { certaintySpike:false, jawTension:false } }));
  },

  score: (n)=> set(s=>({ scoreHistory: [...s.scoreHistory, n], resonance: Math.min(100, s.resonance + n) })),

  sentinelPing: (type)=> set(()=>({ sentinel:type })),
  clearSentinel: ()=> set(()=>({ sentinel:"idle" })),

  editLoopUpstream: ()=> {
    // Pattern breath → superstition↓ → story shrinks
    get().setRing("Pattern","balanced");
    get().addResonance(3);
    get().setFriction(get().friction - 4);
  },
  editLoopMidstream: ()=> {
    // Story smallest true sentence
    get().setRing("Story","balanced");
    get().addResonance(3);
    get().setFriction(get().friction - 4);
  },
  insertSilence: ()=> {
    // Silence central → refresh
    get().setRing("Silence","balanced");
    get().addResonance(4);
    get().setFriction(get().friction - 6);
  },

  gratitudeSolvent: ()=> {
    get().addResonance(2);
    get().setFriction(get().friction - 5);
  },

  unlockQuietName: ()=> {
    get().addItem("Quiet Name");
    get().addResonance(6);
    get().setFriction(0);
  },
}));

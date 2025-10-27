export type SceneKey =
  | "home" | "paradox" | "costume" | "mirror" | "practice" | "library" | "debrief";

export const SCENE_ORDER: SceneKey[] = [
  "home","paradox","costume","mirror","practice","library","debrief",
];

export const SCENE_PATH: Record<SceneKey,string> = {
  home:"/", paradox:"/paradox-hall", costume:"/costume-room", mirror:"/mirror-room",
  practice:"/practice-arena", library:"/library-of-faces", debrief:"/debrief",
};

export function nextScenePath(current: SceneKey): string {
  const i = SCENE_ORDER.indexOf(current);
  const j = Math.min(i + 1, SCENE_ORDER.length - 1);
  return SCENE_PATH[SCENE_ORDER[j]];
}

const KEY = "gob.checkpoint";
export function saveCheckpoint(scene: SceneKey) { localStorage.setItem(KEY, scene); }
export function loadCheckpoint(): SceneKey | null {
  const v = localStorage.getItem(KEY);
  return (v as SceneKey) || null;
}

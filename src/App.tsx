import React from "react";
import { Routes, Route } from "react-router-dom";
import HUD from "./components/HUD";
import Home from "./pages/Home";
import ParadoxHall from "./pages/ParadoxHall";
import CostumeRoom from "./pages/CostumeRoom";
import MirrorRoom from "./pages/MirrorRoom";
import PracticeArena from "./pages/PracticeArena";
import LibraryOfFaces from "./pages/LibraryOfFaces";
import Debrief from "./pages/Debrief";

export default function App(){
  return (
    <>
      <HUD/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/paradox-hall" element={<ParadoxHall/>}/>
          <Route path="/costume-room" element={<CostumeRoom/>}/>
          <Route path="/mirror-room" element={<MirrorRoom/>}/>
          <Route path="/practice-arena" element={<PracticeArena/>}/>
          <Route path="/library-of-faces" element={<LibraryOfFaces/>}/>
          <Route path="/debrief" element={<Debrief/>}/>
        </Routes>
      </div>
    </>
  );
}

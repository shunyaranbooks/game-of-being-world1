
import React, { useEffect, useState } from 'react'
import content from './content.json'

type Section = { id:string, name:string, items:string[] }
type Content = { title:string, subtitle:string, author:string, bullets:string[], sections:Section[] }

function Pill({children}:{children:React.ReactNode}){
  return <span className="pill" style={{marginRight:8}}>{children}</span>
}

function SectionCard({s}:{s:Section}){
  return (
    <div className="card">
      <h3 style={{marginTop:0}}>{s.id}. {s.name}</h3>
      <ul style={{margin:0,paddingLeft:18,lineHeight:1.7}}>
        {s.items.map((it,i)=>(<li key={i}>{it}</li>))}
      </ul>
    </div>
  )
}

export default function App(){
  const [resStars,setResStars]=useState(3)

  useEffect(()=>{
    // playful tiny resonance bump after a long exhale
    const onKey=(e:KeyboardEvent)=>{
      if(e.key===' '){
        setTimeout(()=>setResStars(x=>Math.min(4,x+1)),600)
        setTimeout(()=>setResStars(3),4000)
      }
    }
    window.addEventListener('keydown',onKey)
    return ()=>window.removeEventListener('keydown',onKey)
  },[])

  const c = content as unknown as Content

  return (
    <div style={{maxWidth:1080, margin:"0 auto", padding:"32px 20px"}}>
      <header className="card" style={{marginBottom:18}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:16,flexWrap:'wrap'}}>
          <div>
            <h1 style={{margin:"0 0 6px 0"}}>Game of Being: World I — Who Am I?</h1>
            <div style={{opacity:.8}}>{c.subtitle}</div>
            <div style={{opacity:.6, marginTop:6}}>by {c.author}</div>
          </div>
          <button className="btn" onClick={()=>alert('⦿ Save: Inhale 1 • Exhale 2')}>⦿ Save</button>
        </div>
        <p className="quote" style={{marginTop:14}}>
          Game of Being invents its own genre: <strong>playable philosophy</strong>. Don’t just read philosophy—play it.
          World I is a practice of awareness—a meditation written as a video game.
        </p>
        <ul style={{margin:"10px 0 0 0", paddingLeft:18, lineHeight:1.7}}>
          {c.bullets.map((b,i)=>(<li key={i}>{b}</li>))}
        </ul>
        <div style={{marginTop:10}}>
          <Pill>Look = Attention</Pill>
          <Pill>Move = Curiosity</Pill>
          <Pill>Interact = Honesty</Pill>
          <Pill>Jump = Silence</Pill>
          <Pill>Save = Breath</Pill>
        </div>
      </header>

      <section className="grid">
        {c.sections.map((s)=>(<SectionCard s={s} key={s.id}/>))}
      </section>

      <footer className="footer">
        Scoring: No leaderboards. Self‑score each drill <strong>0 / +1 / +2</strong> by sincerity. · Resonance ★★★☆
      </footer>
    </div>
  )
}

import React from 'react'
import ThemeToggle from './ThemeToggle'

export default function Navbar(){
  const scrollTo = (id)=>{
    const el = document.getElementById(id)
    if(el) el.scrollIntoView({behavior:'smooth', block:'start'})
  }

  return (
    <nav className="nav">
      <div style={{display:'flex',gap:12,alignItems:'center'}}>
        <a href="#home" onClick={(e)=>{e.preventDefault(); scrollTo('home')}} style={{fontWeight:700,color:'var(--text)'}}>Mia Bartolo</a>
        <div className="links" style={{marginLeft:12}}>
          <a href="#about" onClick={(e)=>{e.preventDefault(); scrollTo('about')}}>About</a>
          <a href="#experience" onClick={(e)=>{e.preventDefault(); scrollTo('experience')}}>Experience</a>
          <a href="#projects" onClick={(e)=>{e.preventDefault(); scrollTo('projects')}}>Projects</a>
          <a href="#contact" onClick={(e)=>{e.preventDefault(); scrollTo('contact')}}>Contact</a>
        </div>
      </div>
      <div style={{display:'flex',gap:10,alignItems:'center'}}>
        <a href="https://github.com/mbartolo002" target="_blank" rel="noreferrer" style={{color:'var(--muted)'}}>GitHub</a>
        <a href="https://www.linkedin.com/in/mia-bartolo/" target="_blank" rel="noreferrer" style={{color:'var(--muted)'}}>LinkedIn</a>
        <ThemeToggle />
      </div>
    </nav>
  )
}
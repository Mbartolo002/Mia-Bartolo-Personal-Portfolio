import React from 'react'

export default function Home(){
  return (
    <section id="home" className="section hero">
      <div>
        <h1 className="fade-up">Hi, I'm Mia !</h1>
        <p className="fade-up">I love building things — mixing tech and design to turn ideas into real products. Welcome to my portfolio!</p>
        <div style={{marginTop:'1.5rem',display:'flex',gap:'1rem'}}>
          <a href="#projects" onClick={(e)=>{e.preventDefault(); document.getElementById('projects')?.scrollIntoView({behavior:'smooth'})}}>See projects</a>
          <a href="#contact" onClick={(e)=>{e.preventDefault(); document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}} style={{background:'transparent',color:'var(--text)',border:'1px solid var(--border)'}}>Contact me</a>
        </div>
      </div>
      <div className="hero-avatar">
        <img src="me.jpeg" alt="Mia Bartolo" />
      </div>
    </section>
  )
}

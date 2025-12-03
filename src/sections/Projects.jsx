import React from 'react'

const projects = [
  {title:'Project 1',desc:'Currently in progress',link:'#'},
  {title:'Project 2',desc:'Currently in progress',link:'#'}
]

export default function Projects(){
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="projects">
        {projects.map((p,idx)=> (
          <a key={idx} className="card" href={p.link} target="_blank" rel="noreferrer" style={{textDecoration:'none',color:'inherit',display:'block'}}>
            <h3 style={{margin:'0 0 0.75rem 0',fontSize:'16px',fontWeight:600}}>{p.title}</h3>
            <p style={{margin:0,color:'var(--text-secondary)',fontSize:'14px',lineHeight:'1.6'}}>{p.desc}</p>
          </a>
        ))}
      </div>
    </section>
  )
}

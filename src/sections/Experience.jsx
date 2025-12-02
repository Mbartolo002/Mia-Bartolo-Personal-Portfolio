import React from 'react'

const items = [
  {role:'Sier SideKick',company:'Marketing',period:'August 2025 - Present',desc:'A LLM-powered productivity assistant designed to manage tasks, summarize context, and automate daily workflows. Launched MVP with 100+ users, 25% weekly engagement, and a 40% cut in task-tracking time through AI automation.'},
  {role:'Ulta Beauty',company:'Beauty Advisor',period:'July 2023 - Present',desc:'Conducted 10+ daily consultations to recommend skincare and makeup products, increasing average basket size by 15%. Operated POS system to complete 100+ transactions per week, maintaining 98% accuracy rate.'},
  {role:'HeadStart Fellowship',company:'Fellow 2025',period:'Sep 2025 - Present',desc:'Selected as 1 of 60 fellows out of 2,000+ candidates to join mentorship program backed by Cambridge Associates, DE Shaw, General Atlantic, Insight Partners, Rothschild, Sixth Street, etc. Participated in 10+ workshops and 20+ hours of mentorship focused on professional and leadership development.'}
]

export default function Experience(){
  return (
    <section id="experience" className="section">
      <h2>Experience</h2>
      <div className="experience-list">
        {items.map((it,idx)=> (
          <div className="card" key={idx}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',gap:'1rem',marginBottom:'0.75rem'}}>
              <div>
                <strong style={{display:'block',marginBottom:'0.25rem'}}>{it.role}</strong>
                <div style={{color:'var(--text-secondary)',fontSize:'14px'}}>{it.company}</div>
              </div>
              <div className="period">{it.period}</div>
            </div>
            <p style={{margin:0,color:'var(--text-secondary)',lineHeight:'1.7',fontSize:'14px'}}>{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

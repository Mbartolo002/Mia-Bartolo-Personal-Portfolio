import React, {useEffect, useState} from 'react'

export default function ThemeToggle(){
  const [theme, setTheme] = useState(localStorage.getItem('theme')||'light')

  useEffect(()=>{
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  },[theme])

  return (
    <button 
      aria-label="Toggle theme" 
      onClick={()=>setTheme(t=> t==='light'?'dark':'light')} 
      style={{
        padding:'6px 10px',
        borderRadius:'6px',
        border:'1px solid var(--border)',
        background:'transparent',
        cursor:'pointer',
        color:'var(--text)',
        fontSize:'16px',
        transition:'all .2s',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
      }}
      onMouseEnter={(e)=>{e.target.style.background='var(--hover-bg)'}}
      onMouseLeave={(e)=>{e.target.style.background='transparent'}}
    >
      {theme==='light' ? '☀️' : '🌙'}
    </button>
  )
}

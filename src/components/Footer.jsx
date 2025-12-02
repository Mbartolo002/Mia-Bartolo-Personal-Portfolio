import React from 'react'

export default function Footer(){
  return (
    <div className="footer">
      <div>© {new Date().getFullYear()} Mia Bartolo </div>
      <div style={{display:'flex',gap:'2rem'}}>
        <a href="mbartolo002@gmail.com">mbartolo002@gmail.com</a>
        <a href="/">Privacy</a>
      </div>
    </div>
  )
}

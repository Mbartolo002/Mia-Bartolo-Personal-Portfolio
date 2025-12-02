import React, {useState} from 'react'

export default function Contact(){
  const [sent, setSent] = useState(false)
  const handleSubmit = (e)=>{
    e.preventDefault()
    // For demo: just mark as sent. Integrate with real API or email service later.
    setSent(true)
    setTimeout(()=>setSent(false),4000)
  }

  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <div className="card">
        <p style={{margin:'0 0 1.5rem 0',color:'var(--text-secondary)',lineHeight:'1.7'}}>If you'd like to work together or say hello, feel free to reach out.</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input name="name" placeholder="Your name" required />
          <input name="email" type="email" placeholder="Email" required />
          <textarea name="message" placeholder="Message" rows={5} required />
          <div style={{display:'flex',gap:'1rem',alignItems:'center'}}>
            <button type="submit">Send</button>
            {sent && <div className="form-success">Message sent!</div>}
          </div>
        </form>
      </div>
    </section>
  )
}

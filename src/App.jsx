import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './sections/Home'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

export default function App(){
  return (
    <div data-theme={localStorage.getItem('theme') || 'light'}>
      <header>
        <div className="container nav">
          <Navbar />
        </div>
      </header>

      <main className="container">
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <footer className="container footer">
        <Footer />
      </footer>
    </div>
  )
}

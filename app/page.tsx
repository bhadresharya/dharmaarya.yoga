'use client'

import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import OnlineYogaClasses from './components/OnlineYogaClasses'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  useEffect(() => {
    // Initialize AOS
    const initAOS = async () => {
      if (typeof window !== 'undefined') {
        const AOS = (await import('aos')).default
        AOS.init({
          offset: 25,
          easing: 'ease-out',
        })
      }
    }
    initAOS()

    // Add scroll event listener for header
    const handleScroll = () => {
      const brandLogo = document.getElementById('brandLogo')
      if (brandLogo) {
        if (window.scrollY > 0) {
          brandLogo.classList.add('scrolled')
        } else {
          brandLogo.classList.remove('scrolled')
        }
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <Header />
      <main>
        <div className="container">
          <Hero />
          <About />
          <OnlineYogaClasses />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  )
}


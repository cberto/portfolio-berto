import React from 'react'
import About from './components/about/About'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Experience from './components/experience/Esperience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Services from './components/services/Services'
import Education from './components/education/Education'
import HeaderTest from './components/header/HeaderTest'

export const App = () => {
  return (
    <>

      <HeaderTest />
      <Nav />
      <About />
      <Education />
      <Experience />
      <Portfolio />
      <Contact />
      <Services />
      <Footer />

    </>
  )
}
export default App
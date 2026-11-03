import BackToTop from './components/BackToTop'
import CustomCursor from './components/CustomCursor'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Reveal from './components/Reveal'

function App() {
  return (
    <>
    <>
    <>
  <Preloader />
  <CustomCursor />
  <Navbar />
</>
  <Preloader />
  <Navbar />

</>
      <Navbar />
      <main>
        <Reveal>
          <Hero />
        </Reveal>

        <Reveal delay={0.1}>
          <Projects />
        </Reveal>

        <Reveal delay={0.1}>
          <About />
        </Reveal>

        <Reveal delay={0.1}>
          <Skills />
        </Reveal>

        <Reveal delay={0.1}>
          <Contact />
        </Reveal>
      </main>

      <Footer />
        <BackToTop />
    </>
  )
}

export default App

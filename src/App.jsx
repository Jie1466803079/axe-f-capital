import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Offerings from './components/Offerings'
import Visit from './components/Visit'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Offerings />
        <Visit />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

import Footer from '../components/Footer'
import Header from '../components/Header'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default HomePage

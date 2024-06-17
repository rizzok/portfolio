import Footer from '../components/Footer'
import Header from '../components/Header'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import styled from 'styled-components'

const StyledMain = styled.main`
  flex: 1;
  padding: 0 20px;
`

const HomePage = () => {
  return (
    <>
      <Header />
      <StyledMain>
        <About />
        <Projects />
        <Contact />
      </StyledMain>
      <Footer />
    </>
  )
}

export default HomePage

import Footer from '../components/Footer'
import Header from '../components/Header'
import About from '../components/About'
import Projects from '../components/Projects'
import styled from 'styled-components'
import Experience from '../components/Experience'

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
        <Experience />
        <Projects />
      </StyledMain>
      <Footer />
    </>
  )
}

export default HomePage

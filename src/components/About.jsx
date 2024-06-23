import { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'

const StyledAbout = styled.div`
  margin: 60px 0 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 26px;
  > * {
    text-align: center;
  }
`

const About = () => {
  const [yearsOfExperience, setYearsOfExperience] = useState(0)

  useEffect(() => {
    const startYear = 2018
    const currentYear = new Date().getFullYear()
    setYearsOfExperience(currentYear - startYear)
  }, [])

  return (
    <StyledAbout id="about">
      <h1>Hi 👋 I’m Kevin Rizzo.</h1>
      <p>
        I have {yearsOfExperience} years of experience in frontend and
        e-commerce development, <br />
        with {yearsOfExperience - 2} years in companies and 2 years freelancing.
      </p>
    </StyledAbout>
  )
}

export default About

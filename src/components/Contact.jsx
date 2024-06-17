import styled from 'styled-components'

const StyledContact = styled.div`
  margin: 80px 0;
`

const Contact = () => {
  return (
    <StyledContact id="contact">
      <h2>Contact</h2>
      <div>
        <p>
          <a href="emailto:test@test.com">test@test.com</a>
        </p>
        <p>
          <a href="tel:+61400000000">+61400000000</a>
        </p>
      </div>
      <h3>Contact Form</h3>
    </StyledContact>
  )
}

export default Contact

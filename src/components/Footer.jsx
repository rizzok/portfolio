import styled from 'styled-components'

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 80px 20px;
  padding: 40px 60px;
  background-color: #f6f6f9;
  border-radius: 30px;
`

const StyledForm = styled.form`
  margin: 20px 0;
`

const Footer = () => {
  return (
    <StyledFooter id="footer">
      <h2>Contact me!</h2>
      <StyledForm action="" method="post">
        <p>
          Email: <input type="email" name="" id="" />
        </p>
        <p>Message:</p>
        <textarea name="" id=""></textarea>
        <div>
          <button type="submit">Send</button>
        </div>
      </StyledForm>
      <div>
        <p>
          Email: <a href="emailto:test@test.com">test@test.com</a>
        </p>
        <p>
          Phone: <a href="tel:+61400000000">+61400000000</a>
        </p>
      </div>
    </StyledFooter>
  )
}

export default Footer

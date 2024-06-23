import styled from 'styled-components'

const StyledButton = styled.button`
  color: 'black';
  border-color: 'black';
  &:hover {
    color: 'black';
    background-color: 'white';
    border-color: 'black';
  }
`

const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>
}

export default Button

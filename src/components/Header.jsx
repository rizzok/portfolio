import styled from 'styled-components'

const StyledHeader = styled.header`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`

const StyledNav = styled.nav``

const StyledNavLink = styled.a`
  padding: 0 10px;
  color: rgb(0, 0, 238);
  &:visited {
    color: rgb(0, 0, 238);
  }
`

const Header = () => {
  return (
    <StyledHeader>
      <p>KEVIN RIZZO</p>
      <StyledNav>
        <StyledNavLink href="#about">About</StyledNavLink>
        <StyledNavLink href="#projects">Projects</StyledNavLink>
        <StyledNavLink href="#contact">Contact</StyledNavLink>
      </StyledNav>
    </StyledHeader>
  )
}

export default Header

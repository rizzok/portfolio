import styled from 'styled-components'

const StyledHeader = styled.header`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Name = styled.p`
  font-size: 20px;
`

const StyledNav = styled.nav``

const StyledNavLink = styled.a`
  padding: 0 18px;
  /* color: rgb(0, 0, 238);
  &:visited {
    color: rgb(0, 0, 238);
  } */
`

const Header = () => {
  return (
    <StyledHeader>
      <Name>KEVIN RIZZO</Name>
      <StyledNav>
        <StyledNavLink href="#about">About</StyledNavLink>
        <StyledNavLink href="#experience">Experience</StyledNavLink>
        <StyledNavLink href="#projects">Projects</StyledNavLink>
        <StyledNavLink href="#footer">Contact</StyledNavLink>
      </StyledNav>
    </StyledHeader>
  )
}

export default Header

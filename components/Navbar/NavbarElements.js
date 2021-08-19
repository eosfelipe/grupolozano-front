import { useBreakpointValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

export const Nav = styled.nav`
  background: ${({ show, theme, color }) => (show ? theme.colors.dark : color ? theme.colors.dark : 'transparent')};
  display: flex;
  font-family: 'Noto Sans JP';
  font-size: 0.85rem;
  font-weight: 400;
  align-items: center;
  justify-content: space-between;
  height: ${({ show }) => (show ? '70px' : '')};
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1101;
  padding-inline-start: ${props => useBreakpointValue({ base: '1rem', lg: '4rem', md: '1.5rem', sm: '1rem' })};
  padding-inline-end: ${props => useBreakpointValue({ base: '1rem', lg: '4rem', md: '1.5rem', sm: '1rem' })};
  transition: background 0.5s ease;

  .logo {
    padding: ${({ show }) => (show ? '0px 10px' : '18px 10px')};
    height: auto;
  }
`

export const UL = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;

  li {
    padding: 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: ${({ theme }) => theme.colors.dark};
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #f5f5f5;
      font-size: 1rem;
    }
  }
`

export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ theme }) => theme.colors.light};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-of-type(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-of-type(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translate(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-of-type(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`

export const NavLink = styled.button`
  margin: 20px auto;
  border: none;
  padding: 10px 44px;
  position: relative;

  &:before {
    transition: all 0.85s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    content: '';
    width: 10%;
    height: 100%;
    background: black;
    position: absolute;
    top: 0;
    left: 0;
  }

  span {
    color: white;
    mix-blend-mode: difference;
  }

  &:hover {
    &:before {
      background: black;
      width: 100%;
    }
  }
`

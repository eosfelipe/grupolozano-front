import NextLink from 'next/link'
import { useEffect, useState } from 'react'
import { Image, LinkOverlay } from '@chakra-ui/react'
import { Nav } from './NavbarElements'
import Burger from './Burger'
import Logo from '../../public/img/logo_invert.png'

const Navbar = ({ color }) => {
  const [show, setShow] = useState(false)
  const navbarControl = () => {
    if (window.scrollY > 100) {
      setShow(true)
    } else {
      setShow(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', navbarControl)
    return () => window.removeEventListener('scroll', navbarControl)
  }, [])
  return (
    <Nav show={show} color={color}>
      <div className="logo">
        <NextLink href="/" passHref>
          <LinkOverlay cursor={'pointer'} _before={'none'}>
            <Image src={Logo.src} alt="Grupo Lozano Migoya" h={show ? '55px' : '65px'} />
          </LinkOverlay>
        </NextLink>
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar

import { Image } from '@chakra-ui/react'
import { Nav } from './NavbarElements'
import Burger from './Burger'
import Logo from '../../public/img/logo.png'
import { useEffect, useState } from 'react'

const Navbar = ({ color = 'false' }) => {
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
        <Image src={Logo.src} alt="Grupo Lozano Migoya" h={'65px'} />
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar

import { Box, Image } from '@chakra-ui/react'
import { Nav } from './NavbarElements'
import Burger from './Burger'
import Logo from '../../public/img/logo.png'

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <Image src={Logo.src} alt="Grupo Lozano Migoya" h={'65px'} />
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar

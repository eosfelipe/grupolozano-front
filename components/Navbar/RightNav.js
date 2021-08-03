import { LinkBox, LinkOverlay } from '@chakra-ui/react'
import NextLink from 'next/link'
import { UL } from './NavbarElements'

const links = [
  {
    id: 1,
    name: 'Inicio',
    href: '/'
  },
  {
    id: 2,
    name: 'Productos y Servicios',
    href: '/about'
  },
  {
    id: 3,
    name: 'Información sobre el mercado',
    href: '/about'
  },
  {
    id: 4,
    name: 'Noticias',
    href: '/services'
  },
  {
    id: 5,
    name: 'Contacto',
    href: '/contact'
  }
]

const RightNav = ({ open }) => {
  return (
    <UL open={open}>
      {links.map(link => (
        <LinkBox as={'li'} key={link.id}>
          <NextLink href={link.href} passHref>
            <LinkOverlay
              _hover={{
                color: 'highlight'
              }}
            >
              {link.name}
            </LinkOverlay>
          </NextLink>
        </LinkBox>
      ))}
    </UL>
  )
}

export default RightNav

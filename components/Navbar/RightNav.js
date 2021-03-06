import { LinkBox, LinkOverlay } from '@chakra-ui/react'
import { darken, mode, whiten } from '@chakra-ui/theme-tools'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { UL } from './NavbarElements'

const links = [
  {
    id: 1,
    name: 'Inicio',
    href: '/'
  },
  {
    id: 2,
    name: 'Nosotros',
    href: '/about'
  },
  {
    id: 3,
    name: 'Productos y Servicios',
    href: '/products-services'
  },
  {
    id: 4,
    name: 'Noticias',
    href: '/news'
  },
  {
    id: 5,
    name: 'Contacto',
    href: '/contact'
  }
]

const RightNav = ({ open }) => {
  const router = useRouter()
  return (
    <UL open={open}>
      {links.map(link => (
        <LinkBox as={'li'} key={link.id}>
          <NextLink href={link.href} passHref>
            <LinkOverlay
              color={router.pathname === link.href ? 'highlight' : 'light'}
              _hover={{
                color: mode(whiten('highlight', 20))
              }}
              transition={'color 0.3s ease-in-out'}
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

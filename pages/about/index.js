import { Container, Heading } from '@chakra-ui/react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

export default function About() {
  return (
    <>
      <Navbar color={1} />
      <Container maxW={{ base: '3xl', md: '7xl' }} pt={{ base: '6', md: '12' }} px={{ base: '6', md: '12' }}>
        <Heading mt={'100px'}>Noticias más recientes</Heading>
      </Container>

      <Footer />
    </>
  )
}

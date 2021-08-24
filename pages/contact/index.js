import { Container, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import Footer from '../../components/Footer'
import FormContact from '../../components/FormContact'
import Navbar from '../../components/Navbar'

export default function Contact() {
  return (
    <>
      <Navbar color={1} />
      <Container
        maxW={{ base: '3xl', md: '7xl' }}
        py={{ base: '6', md: '12' }}
        px={{ base: '6', md: '12' }}
        mt={'100px'}
      >
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, lg: 8 }}>
          <Flex flexDirection={'column'}>
            <Heading mb={5}>Paseo de la Reforma No. 265 piso 12 Col. Cuauhtémoc C.P. 06500 México D.F.</Heading>
            <Text as={'p'} mt={5} color={'dark'} fontSize={'md'}>
              Contáctanos y pide más información sobre lo que nosotros hacemos, manda un correo electrónico o bien llena
              el formulario y nosotros nos comunicaremos contigo, cuéntanos un poco más sobre tí.
            </Text>
          </Flex>
          <FormContact />
        </SimpleGrid>
      </Container>
      <Footer />
    </>
  )
}

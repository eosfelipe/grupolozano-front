import { Container, Flex, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import Footer from '../../components/Footer'
import FormContact from '../../components/FormContact'
import MapContact from '../../components/MapContact'
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
          <Flex flexDirection={'column'} m={4}>
            <Heading mb={5}>Paseo de la Reforma No. 265 piso 12 Col. Cuauhtémoc C.P. 06500 México D.F.</Heading>
            {/* <Stack direction={'column'}>
              <Text as={'span'} mt={5} color={'dark'} fontSize={'lg'} fontWeight={'bold'}>
                Correo electrónico:
              </Text>
              <Text
                as={'a'}
                href={'mailto:contacto@glm.com.mx'}
                _hover={{
                  color: 'highlight'
                }}
              >
                contacto@glm.com.mx
              </Text>
              <Text as={'span'} mt={5} color={'dark'} fontSize={'lg'} fontWeight={'bold'}>
                Teléfono:
              </Text>
              <Text
                as={'a'}
                href={'tel:+525551410460'}
                _hover={{
                  color: 'highlight'
                }}
              >
                +52 55 5141 0460
              </Text>
            </Stack> */}
            <MapContact />
          </Flex>
          <FormContact />
        </SimpleGrid>
      </Container>
      <Footer />
    </>
  )
}

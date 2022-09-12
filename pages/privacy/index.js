import { Container, Flex, Heading, Text, Link } from '@chakra-ui/react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function Privacy() {
  return (
    <>
      <Navbar color={1} />
      <Container maxW={{ base: '3xl', md: '7xl' }} pt={{ base: '6', md: '12' }} px={{ base: '6', md: '12' }}>
        <Heading mt={'100px'} textTransform={'uppercase'}>
          Aviso de Privacidad
        </Heading>
        <Flex p={'2rem'} my={'2rem'} direction={'column'}>
          <Text>
            “Con fundamento en los artículos 15 y 16 de la Ley Federal de Protección de Datos Personales en Posesión de
            Particulares, hacemos de su conocimiento que la empresa GRUPO LOZANO MIGOYA, S.A. DE C.V quien tiene su
            domicilio en Calle Paseo de la Reforma 265, Piso 12 Delegación Cuauhtémoc, Distrito Federal, C.P. 06500, es
            responsable de recabar sus datos personales de manera física y electrónica, del uso que se le dé a los
            mismos y de su protección”. <br /> Este documento lo puede consultar completo{' '}
            <Link
              color={'highlight'}
              fontWeight={'bold'}
              href={'https://grupolozano.com.mx/pdf/aviso-de-privacidad.pdf'}
              isExternal
            >
              aquí.
            </Link>
          </Text>
        </Flex>
        <Heading mt={'50px'} textTransform={'uppercase'} size={'lg'}>
          Cambios al Aviso de Privacidad
        </Heading>
        <Flex p={'2rem'} my={'2rem'} direction={'column'}>
          <Text>
            El presente Aviso de Privacidad podrá ser modificado en el futuro. <br /> Fecha de la última actualización
            Septiembre 2022.
          </Text>
        </Flex>
      </Container>
      <Footer />
    </>
  )
}

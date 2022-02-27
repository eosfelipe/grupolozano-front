import { Box, Container, HStack, Icon, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Article from '../../components/Article'
import Worldimg from '../../public/img/world-black.png'

const features = [
  {
    id: 1,
    title: 'Compromiso',
    text: 'Consolidarse como una empresa de servicios profesionales apoyada en su experiencia y especialización en la importación de Productos Lácteos y derivados'
  },
  {
    id: 2,
    title: 'Calidad',
    text: 'Continuar ofreciendo más y mejores servicios a nuestros clientes y proveedores cubriendo sus necesidades con valores agregados por medio de consultas de sus operaciones con la empresa por medio de Internet'
  },
  {
    id: 3,
    title: 'Respuesta',
    text: 'Captar y establecer mayores vínculos con clientes potenciales'
  }
]

const HighlightText = () => {
  return (
    <Text as={'p'}>
      Lozano Migoya, S.A. se fundó en año de 1950 por el Sr. Luis Lozano Migoya, como representante de casas extranjeras
      en la Importación de productos Lácteos y Derivados, como son: Caseínas, Caseínatos, Grasas, Preparaciones
      Alimenticias, Quesos, Mantequilla, Suero y Concentrado de Proteína.
      <br />
      Hacia el año de 1993 se decide cambiar de Razón Social, de Lozano Migoya S.A. a{' '}
      <Text as={'span'} fontWeight={'bold'} color="#D01F28">
        Grupo Lozano Migoya, S.A. de C.V
      </Text>
      , con la finalidad de dar a nuestros clientes y proveedores una nueva imagen, atención personalizada, mejores
      servicios con la mejor tecnología de punta, enfocada a tener una mejor y eficaz comunicación acerca de la
      información de sus pedidos, con nuestros clientes y proveedores por medio de consultas de información vía
      Internet.
    </Text>
  )
}

const data = [
  {
    id: 1,
    imgStart: true,
    heading: '¿Quiénes Somos?',
    text: <HighlightText />
  }
]

export default function About() {
  return (
    <>
      <Navbar color={1} />
      <Container
        maxW={{ base: '3xl', md: '7xl' }}
        pt={{ base: '6', md: '12' }}
        px={{ base: '6', md: '12' }}
        mt={'100px'}
      >
        {data.map(item => (
          <Article key={item.id} imgStart={item.imgStart} imgSrc={Worldimg} heading={item.heading} text={item.text} />
        ))}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} p={8}>
          {features.map(feature => (
            <HStack key={feature.id} align={'top'}>
              <Box color={'highlight'} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={'bold'}>{feature.title}</Text>
                <Text>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
      <Footer />
    </>
  )
}

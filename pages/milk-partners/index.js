import {
  Box,
  Container,
  Heading,
  Link,
  Flex,
  useColorModeValue,
  useTheme,
  VStack,
  Text,
  List,
  ListItem,
  ListIcon
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import ChakraNextImage from '../../components/ChakraNextImage'
import Milk from '../../public/img/milk-partners.jpg'
import Vision from '../../public/img/vision.jpg'

const MilkPartners = () => {
  const { colors } = useTheme()
  return (
    <>
      <Navbar color={1} />
      <Container maxW={{ base: '3xl', md: '7xl' }} py={{ base: '6', md: '12' }} px={{ base: '6', md: '12' }}>
        <Heading mt={'100px'}>Milk Partners</Heading>
        <Box
          marginTop={{ base: '7', sm: '7' }}
          display={'flex'}
          flexDirection={{ base: 'column', sm: 'row' }}
          justifyContent={'space-between'}
        >
          <Box display={'flex'} flex={'1'} marginRight={'3'} position={'relative'} alignItems={'center'}>
            <Box w={{ base: '100%', sm: '85%' }} zIndex={'2'} marginLeft={{ base: '0', sm: '5%' }} marginTop={'5%'}>
              <Link textDecoration={'none'} _hover={{ textDecoration: 'none' }}>
                <ChakraNextImage alt="milk-partners" src={Milk} placeholder="blur" />
              </Link>
            </Box>
            <Box zIndex={'1'} w={'100%'} position={'absolute'} h={'100%'}>
              <Box
                bgGradient={useColorModeValue(
                  `radial(${colors.highlight} 1px, transparent 1px)`,
                  `radial(${colors.highlight} 1px, transparent 1px)`
                )}
                backgroundSize={'20px 20px'}
                opacity={'0.4'}
                h={'100%'}
              />
            </Box>
          </Box>
          <Box
            display={'flex'}
            flex={'1'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'flex-start'}
            marginTop={{ base: '3', sm: '0' }}
          >
            <Heading mb={5} fontWeight={'bold'} color="#D01F28">
              Nuestro negocio, una tradición de innovación
            </Heading>
            <Flex mt={5} color={'dark'} fontSize={'md'}>
              En Milkpartners nos especializamos en proporcionar a nuestros clientes ingredientes de base láctea de la
              más alta calidad y soluciones integradas para una variedad de aplicaciones relacionadas con la
              alimentación. Estamos orgullosos de haber consolidado nuestra posición en el mercado ofreciendo una línea
              completa de productos para las industrias de la alimentación, las bebidas y la salud. Buscando mejores
              formas de dar servicio a nuestros clientes, en los últimos años hemos ampliado estratégicamente nuestro
              negocio para incluir la formulación innovadora y el procesamiento personalizado de ingredientes lácteos y
              productos alimenticios relacionados. Milkpartners se ha comprometido a seguir desarrollando el uso de
              ingredientes lácteos como componente esencial para la nutrición y el bienestar humanos completos. Nuestra
              búsqueda de este objetivo creará, en colaboración con nuestros clientes, nuevas aplicaciones para
              alimentos funcionales y saludables.
            </Flex>
          </Box>
        </Box>
        <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
          <Heading as="h2">Creación de valor</Heading>
          <Text as="p" fontSize="lg">
            Nuestros clientes acuden a Milkpartners por nuestra experiencia cuando el objetivo es mejorar un producto
            existente, mejorar la eficiencia del proceso o descubrir una solución que les ayude a lanzar una innovación
            al mercado. Nuestro objetivo es generar un valor distintivo a través de productos nuevos y mejorados y
            formas innovadoras de reducir los costes, o ambas cosas.
          </Text>
          <Text as="p" fontSize="lg">
            Ayudar a nuestros clientes a crear valor incluye un profundo conocimiento tanto de los ingredientes como de
            los procesos de los productos. Dentro de nuestra familia de servicios de fabricación, investigación,
            desarrollo, aplicaciones y servicios técnicos, ofrecemos conocimientos que pueden ayudarle a reducir costes
            y generar valor añadido.
          </Text>
          <Text as="p" fontSize="lg">
            Podemos ofrece asistencia para resolver aplicaciones técnicas difíciles en una serie de segmentos de la
            industria alimentaria, entre ellos:
            <List spacing={3}>
              <ListItem>
                <ListIcon as={ChevronRightIcon} color="highlight" />
                Lácteos
              </ListItem>
              <ListItem>
                <ListIcon as={ChevronRightIcon} color="highlight" />
                Panadería
              </ListItem>
              <ListItem>
                <ListIcon as={ChevronRightIcon} color="highlight" />
                Confitería
              </ListItem>
              <ListItem>
                <ListIcon as={ChevronRightIcon} color="highlight" />
                Carne
              </ListItem>
              <ListItem>
                <ListIcon as={ChevronRightIcon} color="highlight" />
                Salud y nutrición
              </ListItem>
              <ListItem>
                <ListIcon as={ChevronRightIcon} color="highlight" />
                Bebidas
              </ListItem>
            </List>
          </Text>
          <Heading as="h2">La estrategia global de éxito</Heading>
          <Text as="p" fontSize="lg">
            En esta época cada vez más competitiva, es imprescindible un enfoque global. A lo largo del tiempo,
            Milkpartners ha logrado construir una amplia base de suministro mundial que incluye inversiones de capital y
            asociaciones en Norteamérica, la Unión Europea, Europa del Este y Oceanía. Esta estrategia ofrece a nuestros
            clientes un programa de abastecimiento diverso y un conocimiento del mercado al minuto sin parangón a escala
            mundial. Con asociaciones globales y profesionales de servicios técnicos en todo el mundo, nuestra presencia
            global nos permite estar a la vanguardia de las nuevas necesidades y soluciones de los clientes. Nuestra
            capacidad para aprovechar inmediatamente nuestra experiencia técnica en empresas y disciplinas de todo el
            mundo nos permite aprovechar nuestros mejores y más relevantes conocimientos para resolver problemas
            rápidamente. Este acceso a los conocimientos científicos, técnicos y de marketing puede ayudar a llevar su
            producto al mercado de forma más eficiente.
          </Text>
        </VStack>
        <Box
          marginTop={{ base: '7', sm: '7' }}
          display={'flex'}
          flexDirection={{ base: 'column', sm: 'row-reverse' }}
          justifyContent={'space-between'}
        >
          <Box display={'flex'} flex={'1'} marginRight={'3'} position={'relative'} alignItems={'center'}>
            <Box w={{ base: '100%', sm: '85%' }} zIndex={'2'} marginLeft={{ base: '0', sm: '5%' }} marginTop={'5%'}>
              <Link textDecoration={'none'} _hover={{ textDecoration: 'none' }}>
                <ChakraNextImage alt="future-vision" src={Vision} placeholder="blur" />
              </Link>
            </Box>
            <Box zIndex={'1'} w={'100%'} position={'absolute'} h={'100%'}>
              <Box
                bgGradient={useColorModeValue(
                  `radial(${colors.highlight} 1px, transparent 1px)`,
                  `radial(${colors.highlight} 1px, transparent 1px)`
                )}
                backgroundSize={'20px 20px'}
                opacity={'0.4'}
                h={'100%'}
              />
            </Box>
          </Box>
          <Box
            display={'flex'}
            flex={'1'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'flex-start'}
            marginTop={{ base: '3', sm: '0' }}
          >
            <Heading mb={5} fontWeight={'bold'} color="#D01F28">
              Nuestra visión del futuro
            </Heading>
            <Flex mt={5} color={'dark'} fontSize={'md'}>
              Milkpartners cree en el fomento de las relaciones a largo plazo con nuestros clientes. Una de las formas
              de lograrlo es ampliar la forma tradicional de hacer negocios y crear una política transparente entre
              nuestros clientes y la fabricación de ingredientes, la investigación y el desarrollo de productos a nivel
              mundial. Como resultado, Milkpartners es capaz de crear una plataforma comercial recíproca única. Este
              enfoque sinérgico permite a nuestros clientes entrar en mercados sin explotar, les proporciona experiencia
              en el desarrollo de productos y les ofrece acceso a tecnología y prácticas de fabricación que no tendrían
              de otro modo.
            </Flex>
          </Box>
        </Box>
        <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
          <Heading as="h2">Todo sigue siendo cuestión de servicio</Heading>
          <Text as="p" fontSize="lg">
            Sin nuestros clientes no habría sido posible que Milkpartners se convirtiera en un líder dentro de nuestra
            industria. La clave de nuestro éxito siempre ha sido, y sigue siendo, nuestra dedicación a la satisfacción
            del cliente. Con esto en mente, nos gustaría darle la bienvenida como nuestro más reciente cliente. Nos
            comprometemos a ofrecerle el mismo servicio personal y el mismo compromiso de calidad que nos ha
            caracterizado durante más de 40 años.
          </Text>
        </VStack>
      </Container>
      <Footer />
    </>
  )
}

export default MilkPartners

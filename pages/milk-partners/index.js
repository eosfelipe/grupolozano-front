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
              Nuestro negocio, una tradici??n de innovaci??n
            </Heading>
            <Flex mt={5} color={'dark'} fontSize={'md'}>
              En Milkpartners nos especializamos en proporcionar a nuestros clientes ingredientes de base l??ctea de la
              m??s alta calidad y soluciones integradas para una variedad de aplicaciones relacionadas con la
              alimentaci??n. Estamos orgullosos de haber consolidado nuestra posici??n en el mercado ofreciendo una l??nea
              completa de productos para las industrias de la alimentaci??n, las bebidas y la salud. Buscando mejores
              formas de dar servicio a nuestros clientes, en los ??ltimos a??os hemos ampliado estrat??gicamente nuestro
              negocio para incluir la formulaci??n innovadora y el procesamiento personalizado de ingredientes l??cteos y
              productos alimenticios relacionados. Milkpartners se ha comprometido a seguir desarrollando el uso de
              ingredientes l??cteos como componente esencial para la nutrici??n y el bienestar humanos completos. Nuestra
              b??squeda de este objetivo crear??, en colaboraci??n con nuestros clientes, nuevas aplicaciones para
              alimentos funcionales y saludables.
            </Flex>
          </Box>
        </Box>
        <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
          <Heading as="h2">Creaci??n de valor</Heading>
          <Text as="p" fontSize="lg">
            Nuestros clientes acuden a Milkpartners por nuestra experiencia cuando el objetivo es mejorar un producto
            existente, mejorar la eficiencia del proceso o descubrir una soluci??n que les ayude a lanzar una innovaci??n
            al mercado. Nuestro objetivo es generar un valor distintivo a trav??s de productos nuevos y mejorados y
            formas innovadoras de reducir los costes, o ambas cosas.
          </Text>
          <Text as="p" fontSize="lg">
            Ayudar a nuestros clientes a crear valor incluye un profundo conocimiento tanto de los ingredientes como de
            los procesos de los productos. Dentro de nuestra familia de servicios de fabricaci??n, investigaci??n,
            desarrollo, aplicaciones y servicios t??cnicos, ofrecemos conocimientos que pueden ayudarle a reducir costes
            y generar valor a??adido.
          </Text>
          <Text as="p" fontSize="lg">
            Podemos ofrece asistencia para resolver aplicaciones t??cnicas dif??ciles en una serie de segmentos de la
            industria alimentaria, entre ellos:
            <List spacing={3}>
              <ListItem>
                <ListIcon as={ChevronRightIcon} color="highlight" />
                L??cteos
              </ListItem>
              <ListItem>
                <ListIcon as={ChevronRightIcon} color="highlight" />
                Panader??a
              </ListItem>
              <ListItem>
                <ListIcon as={ChevronRightIcon} color="highlight" />
                Confiter??a
              </ListItem>
              <ListItem>
                <ListIcon as={ChevronRightIcon} color="highlight" />
                Carne
              </ListItem>
              <ListItem>
                <ListIcon as={ChevronRightIcon} color="highlight" />
                Salud y nutrici??n
              </ListItem>
              <ListItem>
                <ListIcon as={ChevronRightIcon} color="highlight" />
                Bebidas
              </ListItem>
            </List>
          </Text>
          <Heading as="h2">La estrategia global de ??xito</Heading>
          <Text as="p" fontSize="lg">
            En esta ??poca cada vez m??s competitiva, es imprescindible un enfoque global. A lo largo del tiempo,
            Milkpartners ha logrado construir una amplia base de suministro mundial que incluye inversiones de capital y
            asociaciones en Norteam??rica, la Uni??n Europea, Europa del Este y Ocean??a. Esta estrategia ofrece a nuestros
            clientes un programa de abastecimiento diverso y un conocimiento del mercado al minuto sin parang??n a escala
            mundial. Con asociaciones globales y profesionales de servicios t??cnicos en todo el mundo, nuestra presencia
            global nos permite estar a la vanguardia de las nuevas necesidades y soluciones de los clientes. Nuestra
            capacidad para aprovechar inmediatamente nuestra experiencia t??cnica en empresas y disciplinas de todo el
            mundo nos permite aprovechar nuestros mejores y m??s relevantes conocimientos para resolver problemas
            r??pidamente. Este acceso a los conocimientos cient??ficos, t??cnicos y de marketing puede ayudar a llevar su
            producto al mercado de forma m??s eficiente.
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
              Nuestra visi??n del futuro
            </Heading>
            <Flex mt={5} color={'dark'} fontSize={'md'}>
              Milkpartners cree en el fomento de las relaciones a largo plazo con nuestros clientes. Una de las formas
              de lograrlo es ampliar la forma tradicional de hacer negocios y crear una pol??tica transparente entre
              nuestros clientes y la fabricaci??n de ingredientes, la investigaci??n y el desarrollo de productos a nivel
              mundial. Como resultado, Milkpartners es capaz de crear una plataforma comercial rec??proca ??nica. Este
              enfoque sin??rgico permite a nuestros clientes entrar en mercados sin explotar, les proporciona experiencia
              en el desarrollo de productos y les ofrece acceso a tecnolog??a y pr??cticas de fabricaci??n que no tendr??an
              de otro modo.
            </Flex>
          </Box>
        </Box>
        <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
          <Heading as="h2">Todo sigue siendo cuesti??n de servicio</Heading>
          <Text as="p" fontSize="lg">
            Sin nuestros clientes no habr??a sido posible que Milkpartners se convirtiera en un l??der dentro de nuestra
            industria. La clave de nuestro ??xito siempre ha sido, y sigue siendo, nuestra dedicaci??n a la satisfacci??n
            del cliente. Con esto en mente, nos gustar??a darle la bienvenida como nuestro m??s reciente cliente. Nos
            comprometemos a ofrecerle el mismo servicio personal y el mismo compromiso de calidad que nos ha
            caracterizado durante m??s de 40 a??os.
          </Text>
        </VStack>
      </Container>
      <Footer />
    </>
  )
}

export default MilkPartners

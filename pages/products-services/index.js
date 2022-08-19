import { Container } from '@chakra-ui/react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import ProductsList from '../../components/ProductsList'
import SectionText from '../../components/SectionText'
import ServicesList from '../../components/ServicesList'

export default function ProductsServices() {
  return (
    <>
      <Navbar color={1} />
      <Container
        maxW={{ base: '3xl', md: '7xl' }}
        py={{ base: '6', md: '12' }}
        px={{ base: '6', md: '12' }}
        mt={'100px'}
      >
        <SectionText
          heading={'Productos'}
          text={
            'Nuestros productos cumplen con las normas nacionales e internacionales correspondientes en cada uno de los mercados en que participamos'
          }
        />
        <ProductsList />
        <SectionText
          heading={'Servicios'}
          text={
            'Contáctanos y pide más información sobre lo que nosotros hacemos, manda un correo electrónico o bien llena el formulario y nosotros nos comunicaremos contigo, cuéntanos un poco más sobre tí.'
          }
        />
        <ServicesList />
      </Container>
      <Footer />
    </>
  )
}

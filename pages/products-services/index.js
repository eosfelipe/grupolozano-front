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
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, aliquid libero expedita distinctio vitae quasi unde, quod labore eius tempora, sed esse veniam voluptates. Sed quas beatae modi aliquam veritatis!'
          }
        />
        <ProductsList />
        <SectionText
          heading={'Servicios'}
          text={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, aliquid libero expedita distinctio vitae quasi unde, quod labore eius tempora, sed esse veniam voluptates. Sed quas beatae modi aliquam veritatis!'
          }
        />
        <ServicesList />
      </Container>
      <Footer />
    </>
  )
}

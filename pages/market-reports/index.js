import { Container } from '@chakra-ui/react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import ReportsList from '../../components/ReportsList'

export default function Reports() {
  return (
    <>
      <Navbar color={1} />
      <Container
        maxW={{ base: '3xl', md: '7xl' }}
        py={{ base: '6', md: '12' }}
        px={{ base: '6', md: '12' }}
        mt={'100px'}
      >
        <ReportsList />
      </Container>
      <Footer />
    </>
  )
}

import { Heading } from '@chakra-ui/react'
import ArticleList from '../components/ArticleList'
import CardList from '../components/CardList'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import PartnersList from '../components/PartnersList'
import SectionText from '../components/SectionText'
import Stats from '../components/Stats'

export default function Home() {
  return (
    <>
      <Navbar color={0} />
      <Hero />
      {/* <SectionText text={'Te ayudamos a materializar tus sueños'} /> */}
      <Heading color={'dark'} my={5} py={5} textAlign={'center'}>
        Te ayudamos a materializar tus sueños
      </Heading>
      <ArticleList />
      <SectionText
        heading={'Products'}
        text={'Somos representantes de empresas extranjeras en el sector alimenticio con productos de calidad'}
      />
      <CardList />
      <Stats />
      <PartnersList />
      <Footer />
    </>
  )
}

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
      <SectionText
        text={
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, aliquid libero expedita distinctio vitae quasi unde, quod labore eius tempora, sed esse veniam voluptates. Sed quas beatae modi aliquam veritatis!'
        }
      />
      <ArticleList />
      <SectionText
        heading={'Products'}
        text={
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, aliquid libero expedita distinctio vitae quasi unde, quod labore eius tempora, sed esse veniam voluptates. Sed quas beatae modi aliquam veritatis!'
        }
      />
      <CardList />
      <Stats />
      <PartnersList />
      <Footer />
    </>
  )
}

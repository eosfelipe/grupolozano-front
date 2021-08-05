import { Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ArticleList from '../components/ArticleList'
import SectionText from '../components/SectionText'
import CardList from '../components/CardList'
import Stats from '../components/Stats'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
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
      <Footer />
    </>
  )
}

import {
  Heading,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react'
import ArticleList from '../components/ArticleList'
import CardList from '../components/CardList'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import PartnersList from '../components/PartnersList'
import SectionText from '../components/SectionText'
import Stats from '../components/Stats'
import { useEffect } from 'react'

const ModalInit = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleOpen = () => onOpen()

  useEffect(() => {
    handleOpen()
  }, [])

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered motionPreset="slideInBottom">
        <ModalOverlay bg="none" backdropFilter="auto" backdropInvert="80%" backdropBlur="2px" />
        <ModalContent
          bg={'dark'}
          style={{
            padding: '1rem 2rem'
          }}
        >
          <ModalHeader color={'white'}>27 Y 28 SEPTIEMBRE Centro Citibanamex – Ciudad de México</ModalHeader>
          <ModalCloseButton color={'white'} />
          <ModalBody color={'white'}>
            FOOD PACK SUMMIT: EL FORO DE CAPACITACIÓN PARA LOS PROFESIONALES DEL SECTOR DE PACKAGING PARA A&B
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default function Home() {
  return (
    <>
      <Navbar color={0} />
      <ModalInit />
      <Hero />
      {/* <SectionText text={'Te ayudamos a materializar tus sueños'} /> */}
      <Heading color={'dark'} my={5} py={5} textAlign={'center'}>
        Te ayudamos a materializar tus sueños
      </Heading>
      <ArticleList />
      <SectionText
        heading={'Productos'}
        text={'Somos representantes de empresas extranjeras en el sector alimenticio con productos de calidad'}
      />
      <CardList />
      <Stats />
      <PartnersList />
      <Footer />
    </>
  )
}

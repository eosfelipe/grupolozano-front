import { Box, Flex, Heading, SimpleGrid } from '@chakra-ui/react'
import ChakraNextImage from './ChakraNextImage'
import Dairy from '../public/img/part/1.png'
import Conaprole from '../public/img/part/2.png'
import Alpenhain from '../public/img/part/3.png'
import Polmlek from '../public/img/part/4.png'
import Saputo from '../public/img/part/5.png'
// import Nzmp from '../public/img/part/6.png'
import MilkMexico from '../public/img/part/7.png'
import Fonterra from '../public/img/part/8.png'
import Dmv from '../public/img/part/9.png'
import Darigold from '../public/img/part/10.png'
import Lesuperbe from '../public/img/part/11.png'
import Agrar from '../public/img/part/12.png'
import Friesland from '../public/img/part/13.png'

const partners = [
  {
    id: 1,
    name: 'Dairy America',
    img: Dairy
  },
  {
    id: 2,
    name: 'Conprole',
    img: Conaprole
  },
  {
    id: 3,
    name: 'Alpenhain',
    img: Alpenhain
  },
  {
    id: 4,
    name: 'Polmlek',
    img: Polmlek
  },
  {
    id: 5,
    name: 'Saputo',
    img: Saputo
  },
  {
    id: 6,
    name: 'Milk Partners México',
    img: MilkMexico
  },
  {
    id: 7,
    name: 'Fonterra',
    img: Fonterra
  },
  {
    id: 8,
    name: 'DMV',
    img: Dmv
  },
  {
    id: 9,
    name: 'Darigold',
    img: Darigold
  },
  {
    id: 10,
    name: 'Le Superbe',
    img: Lesuperbe
  },
  {
    id: 11,
    name: 'Agrar-Kontor',
    img: Agrar
  },
  {
    id: 12,
    name: 'FrieslandCampina',
    img: Friesland
  }
]

const PartnersList = () => {
  return (
    <Box maxW={'7xl'} p={'12'} mx={'auto'}>
      <Flex flexDir={'column'} alignItems={'center'} maxW={'800px'} mx={'auto'} p={10} textAlign={'center'}>
        <Heading>Nuestros Partners</Heading>
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 6 }} spacing={{ base: 5, lg: 8 }}>
        {partners.map(item => (
          <ChakraNextImage key={item.id} src={item.img} alt={item.name} placeholder="blur" />
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default PartnersList

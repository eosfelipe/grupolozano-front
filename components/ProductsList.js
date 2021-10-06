import { Box, Flex, Image, SimpleGrid } from '@chakra-ui/react'

const data = [
  {
    id: 1,
    img: 'http://grupolozano.com.mx/wp-content/uploads/2016/01/Suero-de-leche-en-polvo.jpg',
    name: 'Suero de leche en polvo',
    text: ''
  },
  {
    id: 2,
    img: 'http://grupolozano.com.mx/wp-content/uploads/2014/04/caseina1.jpg',
    name: 'Caseína',
    text: ''
  },
  {
    id: 3,
    img: 'http://grupolozano.com.mx/wp-content/uploads/2016/01/queso-azul.jpg',
    name: 'Queso azul',
    text: ''
  },
  {
    id: 4,
    img: 'http://grupolozano.com.mx/wp-content/uploads/2014/04/grasa_de_leche.jpg',
    name: 'Grasa de leche',
    text: ''
  },
  {
    id: 5,
    img: 'http://grupolozano.com.mx/wp-content/uploads/2016/01/dulce-de-leche.jpg',
    name: 'Dulce de leche',
    text: ''
  },
  {
    id: 6,
    img: '/img/acid_casein.png',
    name: 'Caseína Ácida',
    text: ''
  },
  {
    id: 7,
    img: '/img/casein_renet.png',
    name: 'Caseína Renina',
    text: ''
  },
  {
    id: 8,
    img: '/img/dry_buttermilk.png',
    name: 'Leche descremada en polvo (SMP Y NFDM)',
    text: ''
  },
  {
    id: 9,
    img: '/img/gouda.png',
    name: 'Queso Gouda block',
    text: ''
  },
  {
    id: 10,
    img: '/img/grasa.jpg',
    name: 'Grasa butírica',
    text: ''
  },
  {
    id: 11,
    img: '/img/queso_moza.png',
    name: 'Queso Mozzarella',
    text: ''
  },
  {
    id: 12,
    img: '/img/sodium.png',
    name: 'Caseinato de sodio',
    text: ''
  },
  {
    id: 13,
    img: '/img/whole_milk.png',
    name: 'Leche entera en polvo (WMP)',
    text: ''
  }
]

const Product = ({ name, img }) => {
  return (
    <Flex w={'full'} alignItems={'center'} justifyContent={'center'}>
      <Box bg={'light'} rounded={'lg'} shadow={'lg'} position={'relative'}>
        <Image rounded={'lg'} maxH={'230px'} width={'100%'} objectFit={'cover'} src={img} alt={`Picture of ${name}`} />
        <Box p={6}>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box fontSize="xl" fontWeight="bold" as="h4" lineHeight="tight" color={'dark'}>
              {name}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  )
}

const ProductsList = () => {
  return (
    <Box>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {data.map(product => (
          <Product key={product.id} name={product.name} img={product.img} />
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default ProductsList

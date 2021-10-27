import { Box, Flex, Image, SimpleGrid } from '@chakra-ui/react'
import { stringToSlug } from '../utils'
const imgName = [
  'Caseína acida',
  'Azafran',
  'Queso azul',
  'Queso brie',
  'Queso camembert',
  'Canola',
  'Caseína renina',
  'Leche descremada en polvo (SMP Y NFDM)',
  'Dulce de leche',
  'Queso edam',
  'Queso emmental',
  'Queso feta',
  'Fondue',
  'Queso gouda block',
  'Grasa butírica',
  'Queso havarti',
  'Maíz amarillo',
  'Mantequilla',
  'Margarina',
  'Concentrado de proteína',
  'Queso mozzarella',
  'Queso reggianito',
  'Semilla de algodón',
  'Caseinato de sodio',
  'Soya',
  'Queso suizo',
  'Leche entera en polvo (WMP)'
]
const data = []
imgName.forEach((img, idx) => {
  const item = {
    id: idx,
    img: `/img/p/${stringToSlug(img)}.jpg`,
    name: img,
    text: ''
  }
  data.push(item)
})

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

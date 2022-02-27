import { Box, Flex, Image, SimpleGrid } from '@chakra-ui/react'
import { stringToSlug } from '../utils'
const imgName = [
  'Azafran',
  'Canola',
  'Caseína',
  'Caseinato',
  'Dulce de leche',
  'Fondue',
  'Grasa butírica',
  'Leche descremada en polvo',
  'Leche entera',
  'Leche entera con aprole',
  'Maíz',
  'Mantequilla',
  'Margarina',
  'Proteinas',
  'Queso azul',
  'Queso brie',
  'Queso camembert',
  'Queso emmental',
  'Queso feta',
  'Queso gouda',
  'Queso havarti',
  'Queso mozzarella',
  'Queso reggianito',
  'Semilla de algodón',
  'Soya',
  'Suizo'
]
const data = []
imgName.forEach((img, idx) => {
  const item = {
    id: idx,
    img: `/img/pro/${stringToSlug(img)}.jpg`,
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
    <Box my={10}>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
        {data.map(product => (
          <Product key={product.id} name={product.name} img={product.img} />
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default ProductsList

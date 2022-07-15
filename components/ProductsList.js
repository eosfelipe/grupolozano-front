import { Box, Flex, Image, SimpleGrid } from '@chakra-ui/react'
import { stringToSlug } from '../utils'
const imgName = [
  { name: 'Caseína', cat: '1' },
  { name: 'Caseinato', cat: '1' },
  { name: 'Dulce de leche', cat: '2' },
  { name: 'Fondue', cat: '4' },
  { name: 'Grasa butírica', cat: '2' },
  { name: 'Leche descremada en polvo', cat: '1' },
  { name: 'Leche entera', cat: '1' },
  { name: 'Maíz', cat: '5' },
  { name: 'Mantequilla', cat: '3' },
  { name: 'Margarina', cat: '3' },
  { name: 'Queso azul', cat: '4' },
  { name: 'Queso brie', cat: '4' },
  { name: 'Queso camembert', cat: '4' },
  { name: 'Queso emmental', cat: '4' },
  { name: 'Queso feta', cat: '4' },
  { name: 'Queso gouda', cat: '4' },
  { name: 'Queso havarti', cat: '4' },
  { name: 'Queso mozzarella', cat: '4' },
  { name: 'Queso reggianito', cat: '4' },
  { name: 'Semilla de algodón', cat: '5' },
  { name: 'Soya', cat: '5' },
  { name: 'Queso Suizo', cat: '4' }
]
const data = []
imgName.forEach((img, idx) => {
  const item = {
    id: idx,
    img: `/img/pro/${stringToSlug(img.name)}.jpg`,
    name: img.name,
    cat: img.cat,
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
        {data
          .sort((a, b) => a.cat - b.cat)
          .map(product => (
            <Product key={product.id} name={product.name} img={product.img} />
          ))}
      </SimpleGrid>
    </Box>
  )
}

export default ProductsList

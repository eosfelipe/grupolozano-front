import { Box, Flex, Heading, Image, SimpleGrid } from '@chakra-ui/react'

const PartnersList = () => {
  return (
    <Box maxW={'7xl'} p={'12'} mx={'auto'}>
      <Flex flexDir={'column'} alignItems={'center'} maxW={'800px'} mx={'auto'} p={10} textAlign={'center'}>
        <Heading>Partners</Heading>
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={{ base: 5, lg: 8 }}>
        <Image
          alt="murray-goulburn"
          src="/img/mg.png"
          height={'250px'}
          objectFit={'contain'}
          style={{ filter: 'grayscale(1)' }}
        />
        <Image
          alt="dairy-america"
          src="/img/dairy.png"
          height={'250px'}
          objectFit={'contain'}
          style={{ filter: 'grayscale(1)' }}
        />
        <Image
          alt="fonterra"
          src="/img/fonterra.png"
          height={'250px'}
          objectFit={'contain'}
          style={{ filter: 'grayscale(1)' }}
        />
      </SimpleGrid>
    </Box>
  )
}

export default PartnersList

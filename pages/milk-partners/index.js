import { Box, Container, Heading, Link, Image, Flex, useColorModeValue, useTheme, VStack, Text } from '@chakra-ui/react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

const MilkPartners = () => {
  const { colors } = useTheme()
  return (
    <>
      <Navbar color={1} />
      <Container maxW={{ base: '3xl', md: '7xl' }} py={{ base: '6', md: '12' }} px={{ base: '6', md: '12' }}>
        <Heading mt={'100px'}>Milk Partners</Heading>
        <Box
          marginTop={{ base: '7', sm: '7' }}
          display={'flex'}
          flexDirection={{ base: 'column', sm: 'row' }}
          justifyContent={'space-between'}
        >
          <Box display={'flex'} flex={'1'} marginRight={'3'} position={'relative'} alignItems={'center'}>
            <Box w={{ base: '100%', sm: '85%' }} zIndex={'2'} marginLeft={{ base: '0', sm: '5%' }} marginTop={'5%'}>
              <Link textDecoration={'none'} _hover={{ textDecoration: 'none' }}>
                <Image
                  borderRadius={'lg'}
                  src={
                    'https://images.unsplash.com/photo-1584946815081-7fb21ed8c450?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=828&q=80'
                  }
                  alt={'milk-partners'}
                  objectFit={'contain'}
                />
              </Link>
            </Box>
            <Box zIndex={'1'} w={'100%'} position={'absolute'} h={'100%'}>
              <Box
                bgGradient={useColorModeValue(
                  `radial(${colors.highlight} 1px, transparent 1px)`,
                  `radial(${colors.highlight} 1px, transparent 1px)`
                )}
                backgroundSize={'20px 20px'}
                opacity={'0.4'}
                h={'100%'}
              />
            </Box>
          </Box>
          <Box
            display={'flex'}
            flex={'1'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'flex-start'}
            marginTop={{ base: '3', sm: '0' }}
          >
            <Heading mb={5}>{'heading'}</Heading>
            <Flex mt={5} color={'dark'} fontSize={'md'}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus modi fuga sed dicta, facere at
              perspiciatis ratione, molestias commodi, quia eos non officia! Repellendus molestias porro dignissimos
              magnam facilis omnis!
            </Flex>
          </Box>
        </Box>
        <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
          <Heading as="h2">What we write about</Heading>
          <Text as="p" fontSize="lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum quam arcu, eu tempus tortor
            molestie at. Vestibulum pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed imperdiet. Mauris
            quis erat consequat, commodo massa quis, feugiat sapien. Suspendisse placerat vulputate posuere. Curabitur
            neque tortor, mattis nec lacus non, placerat congue elit.
          </Text>
          <Text as="p" fontSize="lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum quam arcu, eu tempus tortor
            molestie at. Vestibulum pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed imperdiet. Mauris
            quis erat consequat, commodo massa quis, feugiat sapien. Suspendisse placerat vulputate posuere. Curabitur
            neque tortor, mattis nec lacus non, placerat congue elit.
          </Text>
          <Text as="p" fontSize="lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum quam arcu, eu tempus tortor
            molestie at. Vestibulum pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed imperdiet. Mauris
            quis erat consequat, commodo massa quis, feugiat sapien. Suspendisse placerat vulputate posuere. Curabitur
            neque tortor, mattis nec lacus non, placerat congue elit.
          </Text>
        </VStack>
      </Container>
      <Footer />
    </>
  )
}

export default MilkPartners

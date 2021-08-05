import { Box, Container, Flex, Heading, Stack, Text } from '@chakra-ui/react'

const Stats = () => {
  return (
    <Box bg={'light'} position={'relative'}>
      <Flex
        flex={1}
        zIndex={0}
        display={{ base: 'none', lg: 'flex' }}
        backgroundImage="url('https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60')"
        backgroundSize={'cover'}
        backgroundPosition={'center'}
        backgroundRepeat={'no-repeat'}
        position={'absolute'}
        w={'50%'}
        insetY={0}
        right={0}
      >
        <Flex bgGradient={'linear(to-r, gray.800 10%, transparent)'} w={'full'} h={'full'} />
      </Flex>
      <Container maxW={'7xl'} zIndex={10} position={'relative'} p={'12'}>
        <Stack direction={{ base: 'column', lg: 'row' }}>
          <Stack flex={1} color={'light'} justify={{ lg: 'center' }} py={{ base: 4, md: 20, xl: 60 }}>
            <Box mb={{ base: 8, md: 20 }} p={4}>
              <Heading color={'dark'} mb={5} fontSize={{ base: '3xl', md: '5xl' }}>
                Trabajamos con marcas de excelencia
              </Heading>
              <Text fontSize={'xl'} color={'dark'}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorem quam officiis ex suscipit,
                impedit inventore alias reiciendis, facilis odit expedita libero ullam, dolor voluptas reprehenderit
                deleniti consectetur hic asperiores!
              </Text>
            </Box>
            <Box mb={{ base: 8, md: 20 }} p={4}>
              <Heading color={'dark'} mb={5} fontSize={{ base: '3xl', md: '5xl' }}>
                Importamos y exportamos a todo el mundo
              </Heading>
              <Text fontSize={'xl'} color={'dark'}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sunt, iste dolore, ipsa autem molestias,
                consequuntur ducimus hic ad laboriosam nisi temporibus. Tempora modi reprehenderit dignissimos
                repudiandae laudantium, quis vero.
              </Text>
            </Box>
          </Stack>
          <Flex flex={1} />
        </Stack>
      </Container>
    </Box>
  )
}

export default Stats

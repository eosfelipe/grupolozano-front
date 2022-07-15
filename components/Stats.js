import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Container, Flex, Heading, List, ListItem, ListIcon, Stack, Text } from '@chakra-ui/react'

const Stats = () => {
  return (
    <Box bg={'light'} position={'relative'}>
      <Flex
        flex={1}
        zIndex={0}
        display={{ base: 'none', lg: 'flex' }}
        backgroundImage="url('https://images.unsplash.com/photo-1620306677888-10e367e6293d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZXhwb3J0JTIwaW1wb3J0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80')"
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
              {/* <Text fontSize={'xl'} color={'dark'}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorem quam officiis ex suscipit,
                impedit inventore alias reiciendis, facilis odit expedita libero ullam, dolor voluptas reprehenderit
                deleniti consectetur hic asperiores!
              </Text> */}
            </Box>
            <Box mb={{ base: 8, md: 20 }} p={4}>
              <Heading color={'dark'} mb={5} fontSize={{ base: '3xl', md: '5xl' }}>
                Servicios de importación y logística
              </Heading>
              <Text fontSize={'xl'} color={'dark'}>
                Realizamos servicios de logística para importación y exportación de productos lácteos a cualquier parte
                del mundo y ejecutamos los trámites necesarios para la aprobación de los productos lácteos.
              </Text>
              <Flex fontSize={'xl'} color={'dark'} mt={5}>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={ChevronRightIcon} color="highlight" />
                    Logística y apoyo
                  </ListItem>
                  <ListItem>
                    <ListIcon as={ChevronRightIcon} color="highlight" />
                    Legislación
                  </ListItem>
                  <ListItem>
                    <ListIcon as={ChevronRightIcon} color="highlight" />
                    Ventas y asesoría
                  </ListItem>
                  <ListItem>
                    <ListIcon as={ChevronRightIcon} color="highlight" />
                    Trámites aduanales resueltos
                  </ListItem>
                </List>
              </Flex>
            </Box>
          </Stack>
          <Flex flex={1} />
        </Stack>
      </Container>
    </Box>
  )
}

export default Stats

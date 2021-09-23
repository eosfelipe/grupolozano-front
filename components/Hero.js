import { Button, Flex, Heading, Image, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
import CountryCard from './CountryCard'

const countries = [
  {
    id: 1,
    name: 'Netherlands',
    brand: 'Firesland Campina DMV'
  },
  {
    id: 2,
    name: 'Switzerland',
    brand: 'Lustenberger'
  },
  {
    id: 3,
    name: 'Denmark',
    brand: 'Arla Foods'
  }
]

const Hero = () => {
  return (
    <Stack
      h={{ base: '100%', md: '600px' }}
      direction={{ base: 'column', md: 'row' }}
      bg={'dark'}
      color={'light'}
      borderBottomLeftRadius={{ base: '0', md: '200px' }}
      position={'relative'}
      mb={'100px'}
    >
      <Flex flex={1} align={'center'} justify={'center'} mt={{ base: '100px', md: 0 }}>
        <Stack spacing={6} w={'full'} maxW={'lg'} p={8}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'dark',
                zIndex: -1
              }}
            >
              Servicios de
            </Text>
            <br />{' '}
            <Text color={'highlight'} as={'span'} fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>
              Importación y Logística
            </Text>
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'light'}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam est magnam minus enim illo a voluptate sed.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button as={'a'} href={'/reports'} variant={'primary'}>
              Ver reporte del mercado
            </Button>
          </Stack>
        </Stack>
        <Flex
          display={{ base: 'none', md: 'flex' }}
          flexDirection={'row'}
          position={'absolute'}
          bottom={-20}
          justify={'space-between'}
          spacing={6}
          zIndex={'sticky'}
        >
          {countries.map(country => (
            <CountryCard key={country.id} name={country.name} brand={country.brand} />
          ))}
        </Flex>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Grupo Lozano'}
          objectFit={'cover'}
          opacity={'0.4'}
          src={
            'https://images.unsplash.com/photo-1551790629-9d5c2d781d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1399&q=80'
          }
        />
      </Flex>
    </Stack>
  )
}

export default Hero

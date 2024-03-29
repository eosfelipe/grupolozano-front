import NextLink from 'next/link'
import { Button, Flex, Heading, Image, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
import CountryCard from './CountryCard'
import { useEffect } from 'react'

const countries = [
  {
    id: 1,
    name: 'Friesland-1',
    brand: 'FrieslandCampina'
  },
  {
    id: 2,
    name: 'Uruguay',
    brand: 'Conaprole'
  },
  {
    id: 3,
    name: 'Eua',
    brand: 'DairyAmerica'
  },
  {
    id: 4,
    name: 'Zalemania',
    brand: 'Alpenhain'
  }
]

const Hero = () => {
  useEffect(() => {
    window.localStorage.removeItem('posts')
  }, [])

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
              Representante de las mejores
            </Text>
            <br />{' '}
            <Text color={'highlight'} as={'span'} fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>
              empresas extranjeras
            </Text>
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'light'}>
            Importamos y exportamos productos alimenticios de la mejor calidad en el mercado
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <NextLink href="/market-reports" passHref>
              <Button as={'a'} variant={'primary'}>
                Reportes del mercado
              </Button>
            </NextLink>
          </Stack>
        </Stack>
        <Flex
          display={{ base: 'none', md: 'flex' }}
          flexDirection={'row'}
          position={'absolute'}
          bottom={-50}
          left={100}
          justify={'space-between'}
          spacing={4}
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

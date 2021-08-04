import { useEffect, useState } from 'react'
import { Box, Flex, Image, Text } from '@chakra-ui/react'

const CountryCard = ({ name, brand }) => {
  const url = 'https://restcountries.eu/rest/v2/name'
  const [country, setCountry] = useState({})
  useEffect(async () => {
    const response = await fetch(`${url}/${name}`)
    const data = await response.json()
    setCountry(data[0])
  }, [])
  return (
    <Box bg={'white'} w={'120px'} borderRadius={'20px'} mx={4} boxShadow={'xl'}>
      <Flex alignItems={'center'} flexDirection={'column'} p={3}>
        <Image src={country.flag} alt={country.name} rounded={'full'} w={'72px'} h={'72px'} p={3} objectFit={'cover'} />
        <Text fontWeight={'bold'} color={'dark'} textAlign={'center'}>
          {country.name}
        </Text>
        <Text fontSize={'sm'} fontWeight={'normal'} color={'dark'} textAlign={'center'}>
          {brand}
        </Text>
      </Flex>
    </Box>
  )
}

export default CountryCard

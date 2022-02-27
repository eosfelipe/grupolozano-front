import { Box, Flex, Image } from '@chakra-ui/react'

const CountryCard = ({ name, brand }) => {
  // const url = 'https://restcountries.eu/rest/v2/name'
  // const url = 'https://restcountries.com/v3/name'

  // const [country, setCountry] = useState({})

  // useEffect(async () => {
  //   const response = await fetch(`${url}/${name}`)
  //   const data = await response.json()
  //   const [dataCountry] = data
  //   setCountry({
  //     name: dataCountry.name.common,
  //     flag: dataCountry.flags[0]
  //   })
  // }, [])

  return (
    <Box bg={'white'} w={'150px'} borderRadius={'20px'} mx={4} boxShadow={'xl'}>
      <Flex alignItems={'center'}>
        <Image
          src={`/img/hero/${name.toLowerCase()}.png`}
          alt={brand}
          rounded={'full'}
          w={'full'}
          h={'full'}
          objectFit={'cover'}
        />
        {/* <Text fontWeight={'bold'} color={'dark'} textAlign={'center'}>
          {brand}
        </Text>
        <Text fontSize={'sm'} fontWeight={'normal'} color={'dark'} textAlign={'center'}>
          {brand}
        </Text> */}
      </Flex>
    </Box>
  )
}

export default CountryCard

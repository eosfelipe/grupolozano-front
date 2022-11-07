import NextLink from 'next/link'
import { Box, Button, Heading, HStack, Text, VStack, Link, SimpleGrid, Flex } from '@chakra-ui/react'
import ChakraNextImage from './ChakraNextImage'
import Logo from 'public/img/logo_invert.png'
import GDT from 'public/img/gdt.svg'
import EC from 'public/img/european.svg'
import Rabobank from 'public/img/rabobank.png'
import { getRabobankLink } from 'api'
import { useQuery } from 'react-query'

// https://www.rabobank.co.nz/knowledge/agribusiness-monthly/
// export const linkRabobank = `https://www.rabobank.co.nz/-/media/rabobank-nz/files/pdf/agribusiness-monthly/2022/nz-agribusiness-monthly-november-2022.pdf?la=en&hash=035F05F675417B9E7158817AA80C8978C571B8F4`

const Wrapper = ({ title = 'View report', subtitle, img, link = '404', isExternal = false, w, h }) => {
  return (
    <Box
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={'gray.500'}
      borderRadius={'xl'}
    >
      <Box
        py={4}
        px={12}
        bg={'dark'}
        borderTopRadius={'xl'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        {/* <Text fontWeight="500" fontSize="2xl">
          {title}
        </Text> */}
        <HStack justifyContent="center">
          {/* <Text fontSize="5xl" fontWeight="900">
            {subtitle}
          </Text> */}
          {/* <Image src={img} alt={link} w={'100%'} /> */}
          <ChakraNextImage src={img} alt={link} placeholder={link} w={w} h={h} />
        </HStack>
      </Box>
      <VStack py={4} borderBottomRadius={'xl'}>
        {/* <List spacing={3} textAlign="start" px={12}>
          <ListItem color={'dark'}>
            <ListIcon as={CheckIcon} color="highlight" />
            unlimited build minutes
          </ListItem>
          <ListItem color={'dark'}>
            <ListIcon as={CheckIcon} color="highlight" />
            Lorem, ipsum dolor.
          </ListItem>
          <ListItem color={'dark'}>
            <ListIcon as={CheckIcon} color="highlight" />
            5TB Lorem, ipsum dolor.
          </ListItem>
        </List> */}
        <Box w="80%" pt={7}>
          {isExternal ? (
            <Link
              href={link}
              isExternal
              _hover={{
                textDecoration: 'none'
              }}
            >
              <Button variant={'primary'}>{title}</Button>
            </Link>
          ) : (
            <NextLink href={`/market-reports/${link}`} passHref>
              <Button as={'a'} variant={'primary'}>
                {title}
              </Button>
            </NextLink>
          )}
        </Box>
      </VStack>
    </Box>
  )
}
const ReportsList = () => {
  const { data, isSuccess } = useQuery(['rabobank'], getRabobankLink, {
    staleTime: Infinity,
    cacheTime: 1000 * 60
  })
  return (
    <Box py={12}>
      <VStack spacing={2} textAlign={'center'}>
        <Heading as={'h1'} fontSize={'4xl'}>
          Most demanded reports
        </Heading>
        <Text fontSize={'lg'} color={'dark'}>
          Análisis detallado de las tendencias, el panorama competitivo, los principales impulsores del mercado
        </Text>
      </VStack>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify={'center'}
        alignContent={'center'}
        spacing={{ base: 4, lg: 10 }}
        textAlign={'center'}
        py={10}
      >
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <Wrapper img={GDT.src} link={'gdt'} w={200} h={100} />
          <Wrapper img={Logo.src} link={'imports'} w={200} h={100} />
          <Wrapper img={EC.src} link={'graphics'} w={200} h={100} />
          {isSuccess && (
            <Wrapper
              img={Rabobank.src}
              w={200}
              h={50}
              link={data[0].data[0].link}
              title="View latest report"
              isExternal
            />
          )}
        </SimpleGrid>
      </Flex>
    </Box>
  )
}

export default ReportsList

import { useEffect, useState } from 'react'
import NextLink from 'next/link'
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Container, Heading, Text } from '@chakra-ui/react'
import DarkOverlay from '../../../components/DarkOverlay'
import Footer from '../../../components/Footer'
import Navbar from '../../../components/Navbar'
import LineChartCustom from '../../../components/LineChartCustom'

const URL = 'https://grupolozano.com.mx/dashboard/public/api/milk'
const Graphics = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const getData = async () => {
    const response = await (await fetch(URL)).json()
    setData(response)
  }
  useEffect(() => {
    getData()
    setTimeout(() => setLoading(false), 2000)
  }, [])

  if (loading) {
    return <DarkOverlay loading={loading} />
  }

  return (
    <>
      <Navbar color={1} />
      <Container
        maxW={{ base: '3xl', md: '7xl' }}
        py={{ base: '6', md: '12' }}
        px={{ base: '6', md: '12' }}
        mt={'100px'}
      >
        <Container border={'1px solid #cfcfcf'} minH={'100vh'} bg={'gray.100'} p={5} maxW={{ base: '3xl', md: '7xl' }}>
          <Breadcrumb fontSize={'sm'}>
            <BreadcrumbItem>
              <NextLink href="/" passHref>
                <BreadcrumbLink>Home</BreadcrumbLink>
              </NextLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage color={'highlight'}>
              <NextLink href="/market-reports/graphics" passHref>
                <BreadcrumbLink>U.S. Milk production</BreadcrumbLink>
              </NextLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading py={5}>U.S. Milk Production in 1000 t</Heading>
          {data && <LineChartCustom data={data} />}
          <Box mt={5}>
            <Text fontSize={'sm'}>
              All information published on this page may be reproduced provided the user acknowledges Grupo Lozano
              Migoya as the source.
            </Text>
          </Box>
        </Container>
      </Container>
      <Footer />
    </>
  )
}

export default Graphics

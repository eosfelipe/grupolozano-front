import { useState, useEffect } from 'react'
import NextLink from 'next/link'
import { Box, Container, Heading, Text, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import DarkOverlay from '../../../components/DarkOverlay'
import Navbar from '../../../components/Navbar'
import { call } from '../../../utils'
import Footer from '../../../components/Footer'
import BarCustom from '../../../components/BarCustom'

const ReportImports = () => {
  const url = 'https://grupolozano.com.mx/dashboard/public/api/products/search/'
  const year = new Date().getFullYear()
  const years = [year - 1, year]
  const [year1, setYear1] = useState({})
  const [year2, setYear2] = useState({})
  const [loading, setLoading] = useState(true)
  const products = ['Leche en polvo', 'Mantequilla', 'Grasa butírica', 'Quesos', 'Caseína', 'Caseinatos']

  useEffect(async () => {
    const response1 = await call(`${url}${years[0]}`)
    const response2 = await call(`${url}${years[1]}`)
    setYear1({
      year: years[0],
      data: response1.data
    })
    setYear2({
      year: years[1],
      data: response2.data
    })
    setTimeout(() => setLoading(false), 3000)
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
            <BreadcrumbItem>
              <NextLink href="/market-reports" passHref>
                <BreadcrumbLink>Market reports</BreadcrumbLink>
              </NextLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage color={'highlight'}>
              <NextLink href="/market-reports/imports" passHref>
                <BreadcrumbLink>Acumulativo mensual</BreadcrumbLink>
              </NextLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading py={5}>Acumulativo mensual de importaciones</Heading>
          {products.map((product, idx) => {
            const p1 = year1.data.filter(item => item.name === product)
            const p2 = year2.data.filter(item => item.name === product)
            return (
              <BarCustom
                key={idx}
                name={product}
                values={[p1, p2]}
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eveniet doloribus alias eius tempore aspernatur non quos ullam cum, nam ad aliquam consequatur sit dolor mollitia modi quaerat quasi iste!"
              />
            )
          })}
          <Box>
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

export default ReportImports

import { useEffect, useState } from 'react'
import NextLink from 'next/link'
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Container, Divider, Heading, Text } from '@chakra-ui/react'
import DarkOverlay from '../../../components/DarkOverlay'
import Footer from '../../../components/Footer'
import Navbar from '../../../components/Navbar'
import LineChartCustom from '../../../components/LineChartCustom'
import { groupBy, parseCsv } from '../../../utils'
import BarProduct from '../../../components/BarProduct'

const URL = 'https://grupolozano.com.mx/dashboard/public/api/milk'
const URL_CSV_IMP =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vSIOeWuwBPQw0oDShUBWrSYWoSK1y1SWF4d4NbSzl2wOSDCClP0hOCgfl2zGQx63OVoZbyCSR6qMK2i/pub?output=csv'
const URL_CSV_EXP =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vSpTD4J7YSBTXMt9_PoT9a7N66Ioq4Fk4clbtW3vZPxtxePoM5j_SN5fMFKaC0zsSnkTGzTcpguWJGh/pub?output=csv'
const Graphics = () => {
  const [data, setData] = useState([])
  const [dataImporters, setDataImporters] = useState([])
  const [dataExporters, setDataExporters] = useState([])
  const [loading, setLoading] = useState(true)

  const getData = async () => {
    const response = await (await fetch(URL)).json()
    setData(response)
  }
  const getCSV = () => {
    fetch(URL_CSV_IMP).then(response => {
      response.text().then(data => {
        const csv = parseCsv(data)
        setDataImporters(groupBy(csv.data, 'product'))
      })
    })
    fetch(URL_CSV_EXP).then(response => {
      response.text().then(data => {
        const csv = parseCsv(data)
        setDataExporters(groupBy(csv.data, 'product'))
      })
    })
  }

  useEffect(() => {
    getData()
    getCSV()
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
            <BreadcrumbItem>
              <NextLink href="/market-reports" passHref>
                <BreadcrumbLink>Market reports</BreadcrumbLink>
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
          <Divider py={5} />
          <Heading py={5}>Milk main dairy importers</Heading>
          {dataImporters && dataImporters.map((item, idx) => <BarProduct key={idx} data={item.data} />)}
          <Divider py={5} />
          <Heading py={5}>Milk main dairy exporters</Heading>
          {dataExporters && dataExporters.map((item, idx) => <BarProduct key={idx} data={item.data} />)}
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

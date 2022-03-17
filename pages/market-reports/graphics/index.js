import { useEffect, useRef, useState } from 'react'
import NextLink from 'next/link'
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Container,
  Divider,
  Grid,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Text
} from '@chakra-ui/react'
import ReactToPrint from 'react-to-print'
import { groupBy, parseCsv } from '../../../utils'
import DarkOverlay from '../../../components/DarkOverlay'
import Footer from '../../../components/Footer'
import Navbar from '../../../components/Navbar'
import LineChartCustom from '../../../components/LineChartCustom'
import BarProduct from '../../../components/BarProduct'
import Logo from '../../../public/img/logo.png'

const URL = 'https://grupolozano.com.mx/dashboard/public/api/milk'
const URL_CSV_IMP =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vSIOeWuwBPQw0oDShUBWrSYWoSK1y1SWF4d4NbSzl2wOSDCClP0hOCgfl2zGQx63OVoZbyCSR6qMK2i/pub?output=csv'
const URL_CSV_EXP =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vSpTD4J7YSBTXMt9_PoT9a7N66Ioq4Fk4clbtW3vZPxtxePoM5j_SN5fMFKaC0zsSnkTGzTcpguWJGh/pub?output=csv'
const Graphics = () => {
  const [data, setData] = useState([])
  const [dataImporters, setDataImporters] = useState([])
  const [dataExporters, setDataExporters] = useState([])
  const [displayToPrint, setDisplayToPrint] = useState('block')
  const [loading, setLoading] = useState(true)
  const componentRef = useRef()

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
        <Container
          border={'1px solid #cfcfcf'}
          minH={'100vh'}
          bg={'gray.100'}
          p={5}
          maxW={{ base: '3xl', md: '7xl' }}
          ref={componentRef}
        >
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

          {/* <Box>
            <Image src={Logo.src} py={5} display={displayToPrint} w={'200px'} />
          </Box> */}
          <Heading py={5}>U.S. Milk Production in 1000 t</Heading>
          <Grid templateColumns="repeat(3, 1fr)" gap={4}>
            <GridItem colSpan={{ base: 3, md: 2 }}>{data && <LineChartCustom data={data} />}</GridItem>
            <GridItem
              colStart={3}
              display={{ base: 'none', md: 'flex' }}
              flexDirection={'column'}
              alignItems={'center'}
              justifyContent={'flex-start'}
            >
              <Image src={Logo.src} py={5} display={displayToPrint} />
              <Button as={'a'} variant={'primary'} cursor={'pointer'} className={'noprint'}>
                Print report
              </Button>
              {/* <ReactToPrint
                trigger={() => (
                  <Button as={'a'} variant={'primary'} cursor={'pointer'} className={'noprint'}>
                    Print report
                  </Button>
                )}
                content={() => componentRef.current}
              /> */}
            </GridItem>
          </Grid>
          <Divider py={5} />
          <Heading py={5}>Milk main dairy importers</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, lg: 8 }}>
            {dataImporters && dataImporters.map((item, idx) => <BarProduct key={idx} data={item.data} />)}
          </SimpleGrid>
          <Divider py={5} />
          <Heading py={5}>Milk main dairy exporters</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, lg: 8 }}>
            {dataExporters && dataExporters.map((item, idx) => <BarProduct key={idx} data={item.data} />)}
          </SimpleGrid>
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

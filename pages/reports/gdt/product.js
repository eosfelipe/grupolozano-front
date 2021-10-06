import { ArrowUpIcon, ArrowDownIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  Table,
  TableCaption,
  Thead,
  Tbody,
  Tr,
  Th,
  Td
} from '@chakra-ui/react'
import { call, separateMiles } from '../../../utils'
import { Line } from 'react-chartjs-2'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import { useState, useEffect } from 'react'
import DarkOverlay from '../../../components/DarkOverlay'
import Footer from '../../../components/Footer'
import Navbar from '../../../components/Navbar'
import useDateTimeFormat from '../../../hooks/useDateTimeformat'
import TableContracts from '../../../components/TableContracts'

const ProductGDT = () => {
  const router = useRouter()
  const [contract, setContract] = useState({})
  const [prices, setPrices] = useState({})
  const [loading, setLoading] = useState(true)
  let lastData
  let data12months
  let data5years
  let contractPeriods
  let productCode

  useEffect(() => {
    if (router.query.eventId === undefined) {
      return router.push('/reports/gdt')
    }
  }, [])

  useEffect(async () => {
    const urlContract = `https://s3.amazonaws.com/www-production.globaldairytrade.info/results/${router.query.eventId}/product_group_${router.query.pgc}.json`
    const urlPrices = `https://s3.amazonaws.com/www-production.globaldairytrade.info/results/${router.query.eventId}/product_group_winning_prices_5_years_${router.query.pgc}.json`
    setContract(await call(urlContract))
    setPrices(await call(urlPrices))
    setTimeout(() => setLoading(false), 5000)
  }, [])

  // data for chart
  const values = []
  const eventDate = []
  const values2 = []
  const eventDate2 = []

  if (loading === false) {
    lastData = prices.ProductGroup.Events.Event.slice(-1)
    data12months = prices.ProductGroup.Events.Event.slice(-24)
    data5years = prices.ProductGroup.Events.Event
    data12months.forEach(i => {
      values.push(parseFloat(i.AveragePublishedPrice))
      eventDate.push(
        useDateTimeFormat(i.EventDate, window.navigator.language, { year: 'numeric', month: 'numeric', day: 'numeric' })
      )
    })
    data5years.forEach(i => {
      values2.push(parseFloat(i.AveragePublishedPrice))
      eventDate2.push(
        useDateTimeFormat(i.EventDate, window.navigator.language, { year: 'numeric', month: 'numeric', day: 'numeric' })
      )
    })
    productCode = contract.ProductGroupDetails.ProductGroupCode
    contractPeriods = contract.ProductGroupDetails.ContractPeriods.ContractPeriodDetails
    // console.log(contractPeriods)
    // console.log(router)
  }

  const data = {
    labels: eventDate,
    datasets: [
      {
        label: 'Average Published Price',
        data: values,
        fill: false,
        backgroundColor: 'rgb(208, 31, 40)',
        borderColor: 'rgba(208, 31, 40, 0.2)'
      }
    ]
  }

  const data2 = {
    labels: eventDate2,
    datasets: [
      {
        label: 'Average Published Price',
        data: values2,
        fill: false,
        backgroundColor: 'rgb(208, 31, 40)',
        borderColor: 'rgba(208, 31, 40, 0.2)'
      }
    ]
  }

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }

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
              <NextLink href="/reports/gdt" passHref>
                <BreadcrumbLink>GDT</BreadcrumbLink>
              </NextLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage color={'highlight'}>
              <NextLink href={router.asPath} passHref>
                <BreadcrumbLink>{contract.ProductGroupDetails.ProductGroupName}</BreadcrumbLink>
              </NextLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading py={5}>{contract.ProductGroupDetails.ProductGroupName}</Heading>
          <SimpleGrid column={{ base: 1, md: 2 }} spacing={10}>
            <Box>
              <Text>Results from the latest Trading Event</Text>
              <Text fontSize={'3xl'}>
                Event {parseInt(lastData[0].EventNumber, 10)} /{' '}
                {useDateTimeFormat(lastData[0].EventDate, window.navigator.language)}
              </Text>
            </Box>
            <Box>
              <Flex flexDirection={'column'} my={5}>
                <Text>Change in GDT Price Index from previous event</Text>
                <Text fontSize={'5xl'} fontWeight={'bold'} display={'flex'} alignItems={'center'}>
                  {lastData[0].PriceIndexPercentageChange}%
                  {lastData[0].PriceIndexPercentageChange > 0 ? (
                    <ArrowUpIcon color={'highlight'} />
                  ) : (
                    <ArrowDownIcon color={'highlight'} />
                  )}
                </Text>
              </Flex>
              <Flex flexDirection={'column'} my={5}>
                <Text>Average price (USD/MT,FAS)</Text>
                <Text fontSize={'5xl'} fontWeight={'bold'}>
                  ${separateMiles(lastData[0].AveragePublishedPrice)}
                </Text>
              </Flex>
            </Box>
          </SimpleGrid>
          <Box mt={10}>
            <Flex justifyContent={'space-between'} flexDirection={{ base: 'column', md: 'row' }}>
              <Text fontSize={{ base: '2xl', md: '3xl' }}>{contract.ProductGroupDetails.ProductGroupName} Prices</Text>
              <Text fontSize={{ base: '2xl', md: '3xl' }}>12 months</Text>
            </Flex>
            <Line data={data} options={options} />
          </Box>
          <Box mt={10}>
            <Flex justifyContent={'space-between'} flexDir={{ base: 'column', md: 'row' }}>
              <Text fontSize={{ base: '2xl', md: '3xl' }}>{contract.ProductGroupDetails.ProductGroupName} Prices</Text>
              <Text fontSize={{ base: '2xl', md: '3xl' }}>5 years</Text>
            </Flex>
            <Line data={data2} options={options} />
          </Box>
          <Box py={10} overflowX={'auto'}>
            <Text fontSize={{ base: '2xl', md: '3xl' }}>Changes in {productCode} Price Index</Text>
            <Table variant={'simple'} size={'sm'}>
              <TableCaption color={'dark'}>
                A change in GDT Price Index is shown if there is a price available for the last event AND for at least
                one of the two previous events. “n.a.” means that no product was offered or sold, or no price was
                published for the last event, or on both of the two previous events.
              </TableCaption>
              <Thead>
                <Tr>
                  <Th></Th>
                  {contractPeriods.map(i => (
                    <Th key={i.ContractPeriodGUID}>
                      {i.ContractPeriodName} {i.ContractMonth}
                    </Th>
                  ))}
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td fontSize={'sm'}>Change in {productCode} Price Index from previous event</Td>
                  {contractPeriods.map(i => (
                    <Td key={i.ContractPeriodGUID}>
                      {i.PriceIndexPercentageChange > 0 ? `${i.PriceIndexPercentageChange}%` : `n.a`}
                    </Td>
                  ))}
                </Tr>
              </Tbody>
            </Table>
          </Box>
          <Box py={10} overflowX={'auto'}>
            <Text fontSize={{ base: '2xl', md: '3xl' }}>Average Price Per Region (USD/MT, FAS)</Text>
            <TableContracts data={contractPeriods} />
            {/* <Table variant={'simple'} size={'sm'}>
              <TableCaption color={'dark'}></TableCaption>
              <Thead>
                <Tr>
                  <Th></Th>
                  {contractPeriods.map(i => (
                    <Th key={i.ContractPeriodGUID}>
                      {i.ContractPeriodName}
                      <br />
                      {i.ContractMonth}
                    </Th>
                  ))}
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Oceania</Td>
                </Tr>
                <Tr>
                  <Td>New Zealand</Td>
                </Tr>
                <Tr>
                  <Td>
                    {Array.isArray(
                      contractPeriods[0].ProductRegions.ProductRegionDetails.ProductSubRegions.ProductSubRegionDetails
                        .ProductSubRegionProducts.ProductSubRegionProductDetails
                    )
                      ? contractPeriods[0].ProductRegions.ProductRegionDetails.ProductSubRegions.ProductSubRegionDetails
                          .ProductSubRegionProducts.ProductSubRegionProductDetails[0].ProductDisplayName
                      : contractPeriods[0].ProductRegions.ProductRegionDetails.ProductSubRegions.ProductSubRegionDetails
                          .ProductSubRegionProducts.ProductSubRegionProductDetails.ProductDisplayName}
                  </Td>
                  {contractPeriods.map((i, index) => (
                    <Td key={index} isNumeric>
                      {Array.isArray(
                        i.ProductRegions.ProductRegionDetails.ProductSubRegions.ProductSubRegionDetails
                          .ProductSubRegionProducts.ProductSubRegionProductDetails
                      )
                        ? `$${separateMiles(
                            i.ProductRegions.ProductRegionDetails.ProductSubRegions.ProductSubRegionDetails
                              .ProductSubRegionProducts.ProductSubRegionProductDetails[0].ProductAveragePrice
                          )}`
                        : `$${separateMiles(
                            i.ProductRegions.ProductRegionDetails.ProductSubRegions.ProductSubRegionDetails
                              .ProductSubRegionProducts.ProductSubRegionProductDetails.ProductAveragePrice
                          )}`}
                    </Td>
                  ))}
                </Tr>
                <Tr>
                  <Td>
                    {Array.isArray(
                      contractPeriods[0].ProductRegions.ProductRegionDetails.ProductSubRegions.ProductSubRegionDetails
                        .ProductSubRegionProducts.ProductSubRegionProductDetails
                    )
                      ? contractPeriods[0].ProductRegions.ProductRegionDetails.ProductSubRegions.ProductSubRegionDetails
                          .ProductSubRegionProducts.ProductSubRegionProductDetails[1].ProductDisplayName
                      : ''}
                  </Td>
                  {contractPeriods.map((i, index) => (
                    <Td key={index} isNumeric>
                      {Array.isArray(
                        i.ProductRegions.ProductRegionDetails.ProductSubRegions.ProductSubRegionDetails
                          .ProductSubRegionProducts.ProductSubRegionProductDetails
                      )
                        ? `$${separateMiles(
                            i.ProductRegions.ProductRegionDetails.ProductSubRegions.ProductSubRegionDetails
                              .ProductSubRegionProducts.ProductSubRegionProductDetails[1].ProductAveragePrice
                          )}`
                        : ''}
                    </Td>
                  ))}
                </Tr>
                <Tr>
                  <Td>
                    {
                      contractPeriods[0].ProductRegions.ProductRegionDetails.ProductSubRegions.ProductSubRegionDetails
                        .ProductSubRegionName
                    }{' '}
                    Average Price
                  </Td>
                  {contractPeriods.map((i, index) => (
                    <Td key={index} isNumeric>
                      $
                      {separateMiles(
                        i.ProductRegions.ProductRegionDetails.ProductSubRegions.ProductSubRegionDetails
                          .ProductSubRegionAveragePrice
                      )}
                    </Td>
                  ))}
                </Tr>
                <Tr>
                  <Td>
                    {contractPeriods[0].ProductRegions.ProductRegionDetails.ProductRegionName} Average Price
                    (USD/MT,FAS)
                  </Td>
                  {contractPeriods.map((i, index) => (
                    <Td key={index} isNumeric>
                      ${separateMiles(i.ProductRegions.ProductRegionDetails.ProductRegionAveragePrice)}
                    </Td>
                  ))}
                </Tr>
                <Tr>
                  <Td>Average Price (USD/MT,FAS)</Td>
                  {contractPeriods.map((i, index) => (
                    <Td key={index} isNumeric>
                      ${separateMiles(i.ContractPeriodAveragePublishedPrice)}
                    </Td>
                  ))}
                </Tr>
              </Tbody>
            </Table> */}
          </Box>
        </Container>
      </Container>
      <Footer />
    </>
  )
}

export default ProductGDT

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
  Td,
  Link
} from '@chakra-ui/react'
import { separateMiles } from '../../../utils'
import { Line } from 'react-chartjs-2'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import DarkOverlay from '../../../components/DarkOverlay'
import Footer from '../../../components/Footer'
import Navbar from '../../../components/Navbar'
import useDateTimeFormat from '../../../hooks/useDateTimeformat'
import TableGen from '../../../components/TableGen'
import { useQuery } from 'react-query'
import { getContract, getLastEventGDT, getPrices } from '../../../api'

const ProductGDT = () => {
  const router = useRouter()
  const { data: latestEvent } = useQuery(['latestEvent'], getLastEventGDT, {
    staleTime: Infinity,
    cacheTime: 1000 * 60
  })
  const { data: contract, isLoading: isLoadingContract } = useQuery(
    ['contract', router.query.pgc],
    () => getContract(latestEvent, router.query?.pgc),
    {
      staleTime: Infinity,
      cacheTime: 1000 * 60,
      enabled: !!latestEvent
    }
  )
  const { data: prices, isLoading: isLoadingPrices } = useQuery(
    ['prices', router.query.pgc],
    () => getPrices(latestEvent, router.query?.pgc),
    {
      staleTime: Infinity,
      cacheTime: 1000 * 60,
      enabled: !!latestEvent
    }
  )

  let lastData
  let data12months
  let data5years
  let contractPeriods
  let productCode

  // data for chart
  const values = []
  const eventDate = []
  const values2 = []
  const eventDate2 = []

  if (isLoadingPrices === false && prices && contract) {
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

  if (isLoadingPrices || !contract || !prices) {
    return <DarkOverlay loading={isLoadingPrices} />
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
              <NextLink href="/market-reports/gdt" passHref>
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
                      {i.PriceIndexPercentageChange.length === 0 ? `n.a.` : `${i.PriceIndexPercentageChange}%`}
                    </Td>
                  ))}
                </Tr>
              </Tbody>
            </Table>
          </Box>
          <Box py={10} overflowX={'auto'}>
            <Text fontSize={{ base: '2xl', md: '3xl' }}>Average Price Per Region (USD/MT, FAS)</Text>
            <TableGen data={contractPeriods} />
            <Text fontSize={'sm'}>
              Source:{' '}
              <Link href="https://www.globaldairytrade.info/en/product-results/" isExternal color={'highlight'}>
                Global Dairy Trade <ExternalLinkIcon mx="2px" />
              </Link>
            </Text>
          </Box>
        </Container>
      </Container>
      <Footer />
    </>
  )
}

export default ProductGDT

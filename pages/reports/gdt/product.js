import { ArrowUpIcon, ArrowDownIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import { Box, Container, Flex, Heading, SimpleGrid, Text, Link, List, ListItem } from '@chakra-ui/react'
import { call, separateMiles } from '../../../utils'
import { Line } from 'react-chartjs-2'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import DarkOverlay from '../../../components/DarkOverlay'
import Footer from '../../../components/Footer'
import Navbar from '../../../components/Navbar'
import useDateTimeFormat from '../../../hooks/useDateTimeformat'

const ProductGDT = () => {
  const router = useRouter()
  const [contract, setContract] = useState({})
  const [prices, setPrices] = useState({})
  const [loading, setLoading] = useState(true)
  let lastData
  let data12months
  let data5years

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
        </Container>
      </Container>
      <Footer />
    </>
  )
}

export default ProductGDT

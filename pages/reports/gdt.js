import { useEffect, useState } from 'react'
import { ArrowUpIcon, ArrowDownIcon } from '@chakra-ui/icons'
import { Box, Container, Flex, Heading, SimpleGrid, Text, List, ListItem } from '@chakra-ui/react'
import { Bar } from 'react-chartjs-2'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import DoughnutCustom from '../../components/DoughnutCustom'
import useDateTimeFormat from '../../hooks/useDateTimeformat'
import { separateMiles } from '../../utils/index'

const latestId = 'https://s3.amazonaws.com/www-production.globaldairytrade.info/results/latest.json'
const getUrls = latestEvent => [
  `https://s3.amazonaws.com/www-production.globaldairytrade.info/results/${latestEvent}/event_summary.json`,
  `https://s3.amazonaws.com/www-production.globaldairytrade.info/results/${latestEvent}/product_groups_summary.json`,
  `https://s3.amazonaws.com/www-production.globaldairytrade.info/results/${latestEvent}/price_indices_twelve_events.json`,
  `https://s3.amazonaws.com/www-production.globaldairytrade.info/results/${latestEvent}/price_indices_ten_years.json`
]

const ReportGDT = () => {
  const [latestEvent, setLatestEvent] = useState(null)
  const [summaryEvent, setSummaryEvent] = useState(null)

  useEffect(() => {
    try {
      fetch(latestId)
        .then(response => response.json())
        .then(data => {
          setLatestEvent(data)
          const requests = getUrls(data.latestEvent).map(url => fetch(url))
          Promise.all(requests).then(responses =>
            Promise.all(responses.map(r => r.json())).then(data => setSummaryEvent(data))
          )
        })
    } catch (error) {
      console.error(error)
    }
  }, [])

  if (summaryEvent === null) return <div>Loading...</div>

  // data for charts
  const values = []
  const eventDate = []

  // extract data from state
  const [summary, products, pricesMonths, pricesYears] = summaryEvent
  const date = new Date(summary.EventSummary.EventDate)

  const items = pricesMonths.PriceIndicesTwelveMonths.Events.EventDetails
  const lastYear = items.slice(-12)
  lastYear.forEach(i => {
    values.push(parseFloat(i.PriceIndexPercentageChange).toFixed(1))
    eventDate.push(useDateTimeFormat(i.EventDate, window.navigator.language))
  })
  const productsG = products.ProductGroups.ProductGroupResult.filter(i => i.ProductSold === 'true')
  console.log(summary)

  const data = {
    labels: eventDate,
    datasets: [
      {
        data: values,
        backgroundColor: ['rgba(208, 31, 40, 0.2)'],
        borderColor: ['rgba(208, 31, 40, 1)'],
        borderWidth: 1
      }
    ]
  }
  const options = {
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        displayColors: false,
        callbacks: {
          label: context => {
            return `${parseFloat(context.raw).toFixed(1)}%`
          }
        }
      }
    },
    scales: {
      y: {
        suggestedMin: Math.min(...values) + 5,
        suggestedMax: Math.max(...values) + 5,
        ticks: {
          callback: function (value, index, values) {
            return value + '%'
          }
        }
      }
    }
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
        <Container border={'1px solid #cfcfcf'} minH={'100vh'} bg={'gray.100'} p={5}>
          <Heading py={5}>GDT Events Results</Heading>
          <SimpleGrid
            templateColumns={{ base: 'repeat(1, minmax(0, 1fr))', md: 'repeat(1, minmax(0, 1fr));', lg: '300px 1fr' }}
            spacing={10}
          >
            <Box w={'300px'}>
              <Text fontSize={'3xl'}>
                Event {parseInt(summary.EventSummary.EventNumber, 10)} /{' '}
                {useDateTimeFormat(date, window.navigator.language)}
              </Text>
              <Flex flexDirection={'column'} my={5}>
                <Text fontSize={'sm'}>Change in GDT Price Index from previous event</Text>
                <Text fontSize={'5xl'} fontWeight={'bold'} display={'flex'} alignItems={'center'}>
                  +{summary.EventSummary.ChangeInPriceIndex}%
                  {summary.EventSummary.ChangeInPriceIndex > 0 ? (
                    <ArrowUpIcon color={'highlight'} />
                  ) : (
                    <ArrowDownIcon color={'highlight'} />
                  )}
                </Text>
              </Flex>
              <Flex flexDirection={'column'} my={5}>
                <Text fontSize={'sm'}>Average price (USD/MT,FAS)</Text>
                <Text fontSize={'5xl'} fontWeight={'bold'}>
                  ${separateMiles(summary.EventSummary.AveragePublishedPrice)}
                </Text>
              </Flex>
            </Box>
            <Box>
              <Text fontSize={'3xl'}>Change in GDT Price Index</Text>
              <Bar data={data} options={options} />
              <Box py={5}>
                <Text fontSize={'md'} fontWeight={'bold'} mb={3}>
                  Summary of Results
                </Text>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={3}>
                    <ListItem fontSize={'sm'}>
                      Number of Winning Bidders{' '}
                      <Text as={'span'} float={'right'}>
                        {summary.EventSummary.WinningBidders}
                      </Text>
                    </ListItem>
                    <ListItem fontSize={'sm'}>
                      Number of Bidding Rounds{' '}
                      <Text as={'span'} float={'right'}>
                        {summary.EventSummary.TotalRounds}
                      </Text>
                    </ListItem>
                    <ListItem fontSize={'sm'}>
                      Duration of Trading Event (hours:mins){' '}
                      <Text as={'span'} float={'right'}>
                        {summary.EventSummary.EventDuration}
                      </Text>
                    </ListItem>
                    <ListItem fontSize={'sm'}>
                      Minimum Supply (MT){' '}
                      <Text as={'span'} float={'right'}>
                        {separateMiles(summary.EventSummary.MinSupply)}
                      </Text>
                    </ListItem>
                    <ListItem fontSize={'sm'}>
                      Maximum Supply (MT){' '}
                      <Text as={'span'} float={'right'}>
                        {separateMiles(summary.EventSummary.MaxSupply)}
                      </Text>
                    </ListItem>
                  </List>
                  <List spacing={3} borderLeft={'1px dotted #cfcfcf'} px={5}>
                    <ListItem fontSize={'sm'}>Number of participating bidders</ListItem>
                    <ListItem fontSize={{ base: '4xl', md: '3xl' }} fontWeight={'bold'}>
                      {summary.EventSummary.ParticipatingBidders}
                    </ListItem>
                    <ListItem fontSize={'sm'}>Quantity sold (MT)</ListItem>
                    <ListItem fontSize={{ base: '4xl', md: '3xl' }} fontWeight={'bold'}>
                      {separateMiles(summary.EventSummary.QuantitySold)}
                    </ListItem>
                  </List>
                </SimpleGrid>
              </Box>
            </Box>
          </SimpleGrid>

          <Box>
            <Text fontSize={'3xl'} py={5}>
              Products
            </Text>
            <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
              {productsG.map(pg => (
                <DoughnutCustom key={pg.ProductGroupGUID} item={pg} />
              ))}
            </SimpleGrid>
          </Box>
        </Container>
      </Container>
      <Footer />
    </>
  )
}

export default ReportGDT

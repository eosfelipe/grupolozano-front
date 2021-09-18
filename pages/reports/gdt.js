import { useEffect, useState } from 'react'
import { ArrowUpIcon, ArrowDownIcon } from '@chakra-ui/icons'
import { Box, Container, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import { Bar } from 'react-chartjs-2'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

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

  const values = [3.0, 15.0, -3.8, 0.3, -0.1, -0.7, -0.2, -0.9, -1.3, -3.6, -2.9, -1.0, 0.3]
  const data = {
    labels: [
      '16/02/21',
      '02/03/21',
      '16/03/21',
      '06/04/21',
      '20/04/21',
      '04/05/21',
      '18/05/21',
      '01/06/21',
      '15/06/21',
      '06/07/21',
      '20/07/21',
      '03/08/21',
      '17/08/21'
    ],
    datasets: [
      {
        data: [3.0, 15.0, -3.8, 0.3, -0.1, -0.7, -0.2, -0.9, -1.3, -3.6, -2.9, -1.0, 0.3],
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
        displayColors: false
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

  if (summaryEvent === null) return <div>Loading...</div>

  const [summary, productsGroups, pricesMonths, pricesYears] = summaryEvent
  console.log(summary.EventSummary)
  const date = new Date(summary.EventSummary.EventDate)

  return (
    <>
      <Navbar color={1} />
      <Container
        maxW={{ base: '3xl', md: '7xl' }}
        py={{ base: '6', md: '12' }}
        px={{ base: '6', md: '12' }}
        mt={'100px'}
      >
        <Container border={'1px solid #cfcfcf'} minH={'100vh'} bg={'gray.100'}>
          <Heading py={5}>GDT Events Results</Heading>
          <SimpleGrid
            templateColumns={{ base: 'repeat(1, minmax(0, 1fr))', md: 'repeat(1, minmax(0, 1fr));', lg: '300px 1fr' }}
            spacing={10}
          >
            <Box w={'300px'}>
              <Text fontSize={'3xl'}>
                Event {parseInt(summary.EventSummary.EventNumber, 10)} /{' '}
                {new Intl.DateTimeFormat(window.navigator.language, {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                }).format(date)}
              </Text>
              <Flex flexDirection={'column'} my={5}>
                <Text fontSize={'sm'}>Change in GDT Price Index from previous event</Text>
                <Text fontSize={'5xl'} fontWeight={'bold'} display={'flex'} alignItems={'center'}>
                  +{summary.EventSummary.ChangeInPriceIndex}%
                  {summary.EventSummary.ChangeInPriceIndex > 0 ? (
                    <ArrowUpIcon color={'highlight'} />
                  ) : (
                    <ArrowUpIcon color={'highlight'} />
                  )}
                </Text>
              </Flex>
              <Flex flexDirection={'column'} my={5}>
                <Text fontSize={'sm'}>Average price (USD/MT,FAS)</Text>
                <Text fontSize={'5xl'} fontWeight={'bold'}>
                  ${summary.EventSummary.AveragePublishedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </Text>
              </Flex>
            </Box>
            <Box>
              <Text fontSize={'3xl'}>Change in GDT Price Index</Text>
              <Bar data={data} options={options} />
            </Box>
          </SimpleGrid>
        </Container>
      </Container>
      <Footer />
    </>
  )
}

export default ReportGDT

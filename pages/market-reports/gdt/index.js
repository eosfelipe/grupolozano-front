import { useEffect, useState } from 'react'
import {
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  Link,
  List,
  ListItem,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  Spinner
} from '@chakra-ui/react'
import { ArrowUpIcon, ArrowDownIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import { Bar } from 'react-chartjs-2'
import { useIsFetching, useQuery } from 'react-query'
import Footer from '../../../components/Footer'
import Navbar from '../../../components/Navbar'
import DoughnutCustom from '../../../components/DoughnutCustom'
import useDateTimeFormat from '../../../hooks/useDateTimeformat'
import { separateMiles } from '../../../utils/index'
import DarkOverlay from '../../../components/DarkOverlay'
import { getEventsGDT, getLastEventGDT } from '../../../api'

const ReportGDT = () => {
  const isFetching = useIsFetching()
  const [loading, setLoading] = useState(true)
  const getUrls = latestEvent => [
    `https://s3.amazonaws.com/www-production.globaldairytrade.info/results/${latestEvent}/event_summary.json`,
    `https://s3.amazonaws.com/www-production.globaldairytrade.info/results/${latestEvent}/product_groups_summary.json`,
    `https://s3.amazonaws.com/www-production.globaldairytrade.info/results/${latestEvent}/price_indices_twelve_events.json`,
    `https://s3.amazonaws.com/www-production.globaldairytrade.info/results/${latestEvent}/price_indices_ten_years.json`
  ]

  const {
    data: latestEvent,
    error: errorLatest,
    isLoading: isLoadingLatest
  } = useQuery(['latestEvent'], getLastEventGDT, {
    staleTime: Infinity,
    cacheTime: 1000 * 60
  })

  const urls = latestEvent && getUrls(latestEvent)

  const {
    data: summaryEvent,
    error: errorSummary,
    isLoading: isLoadingSummary
  } = useQuery(['summaryEvent'], () => getEventsGDT(urls), {
    staleTime: Infinity,
    cacheTime: 1000 * 60,
    enabled: !!latestEvent
  })

  useEffect(() => {
    if (summaryEvent) {
      setLoading(false)
    }
  }, [summaryEvent])

  if (errorLatest && errorSummary) {
    return (
      <Alert status="error">
        <AlertIcon />
        <AlertTitle mr={2}>418 I&apos;m a teapot</AlertTitle>
        <AlertDescription>Please check your network</AlertDescription>
        <CloseButton position="absolute" right="8px" top="8px" />
      </Alert>
    )
  }
  if (loading) return <DarkOverlay loading={loading} />

  // data for charts
  const values = []
  const eventDate = []

  // extract data from state
  const [summary, products, pricesMonths, pricesYears] = summaryEvent
  const date = new Date(summary.EventSummary.EventDate)

  const items = pricesMonths.PriceIndicesTwelveMonths.Events.EventDetails
  const lastYear = items.slice(-12)
  lastYear?.forEach(i => {
    values.push(parseFloat(i.PriceIndexPercentageChange).toFixed(1))
    eventDate.push(useDateTimeFormat(i.EventDate, window.navigator.language))
  })
  const productsG = products.ProductGroups.ProductGroupResult.filter(i => i.ProductSold === 'true')

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
        <Container border={'1px solid #cfcfcf'} minH={'100vh'} bg={'gray.100'} p={5} maxW={{ base: '3xl', md: '7xl' }}>
          <Heading py={5}>GDT Events Results {isFetching ? <Spinner /> : null}</Heading>
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
            <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10} my={5}>
              {productsG.map(pg => (
                <DoughnutCustom key={pg.ProductGroupGUID} item={pg} eventId={latestEvent} />
              ))}
            </SimpleGrid>
            <Text fontSize={'sm'}>
              The shaded dials indicate the proportion of each product group sold versus total quantity sold during the
              previous 12 months, with a 3 month lag. Figures within the dials represent the percentage change in GDT
              Price Index and the weighted average price. All information published on this page may be reproduced
              provided the user acknowledges Global Dairy Trade as the source. See Explanatory Notes below for more
              detailed definitions.
            </Text>{' '}
            <br />
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

export default ReportGDT

import { useEffect, useState } from 'react'
import { ArrowUpIcon } from '@chakra-ui/icons'
import { Box, Container, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import { Bar } from 'react-chartjs-2'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

const performRequest = latestEvent => {
  const urls = [
    `https://s3.amazonaws.com/www-production.globaldairytrade.info/results/${latestEvent}/event_summary.json`,
    `https://s3.amazonaws.com/www-production.globaldairytrade.info/results/${latestEvent}/product_groups_summary.json`,
    `https://s3.amazonaws.com/www-production.globaldairytrade.info/results/${latestEvent}/price_indices_twelve_events.json`,
    `https://s3.amazonaws.com/www-production.globaldairytrade.info/results/${latestEvent}/price_indices_ten_years.json`
  ]
  const requests = urls.map(url => fetch(url))
  return Promise.all(requests)
    .then(responses => {
      return responses
    })
    .then(responses => Promise.all(responses.map(r => r.json())).then(data => data))
}

const ReportGDT = () => {
  const [latestEvent, setLatestEvent] = useState(null)
  const [summaryEvent, setSummaryEvent] = useState(null)

  // useEffect(async () => {
  //   const latestId = 'https://s3.amazonaws.com/www-production.globaldairytrade.info/results/latest.json'
  //   try {
  //     const response = await fetch(latestId)
  //     const data = await response.json()
  //     setLatestEvent(data.latestEvent)
  //     // perform requests
  //     if (latestEvent !== null) {
  //       const dataSet = await performRequest(latestEvent)
  //       setSummaryEvent(dataSet)
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }, [latestEvent])

  // const [EventSummary, ProductGroups] = summaryEvent

  // if (latestEvent === null) return <div>Loading...</div>

  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, -19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }
    ]
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
        <Container border={'1px solid #cfcfcf'} minH={'100vh'} bg={'gray.100'}>
          <Heading py={5}>GDT Events Results</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Box>
              <Text fontSize={'3xl'}>Event 290 / 17 August 2021</Text>
              <Flex flexDirection={'column'} my={5}>
                <Text fontSize={'sm'}>Change in GDT Price Index from previous event</Text>
                <Text fontSize={'5xl'} fontWeight={'bold'} display={'flex'} alignItems={'center'}>
                  +0.3% <ArrowUpIcon color={'highlight'} />
                </Text>
              </Flex>
              <Flex flexDirection={'column'} my={5}>
                <Text fontSize={'sm'}>Average price (USD/MT,FAS)</Text>
                <Text fontSize={'5xl'} fontWeight={'bold'}>
                  $3,827
                </Text>
              </Flex>
            </Box>
            <Box>
              <Text fontSize={'3xl'}>Change in GDT Price Index</Text>
              <Bar data={data} />
            </Box>
          </SimpleGrid>
        </Container>
      </Container>
      <Footer />
    </>
  )
}

export default ReportGDT

import NextLink from 'next/link'
import { Box, Text } from '@chakra-ui/layout'
import { Doughnut } from 'react-chartjs-2'
import { separateMiles } from '../utils/index'

const DoughnutCustom = ({ item, eventId: { latestEvent } }) => {
  const value = parseFloat(item.PriceIndexPercentageChange).toFixed(1)
  const data = {
    labels: [value, ''],
    datasets: [
      {
        data: [value, 100 - value],
        backgroundColor: ['rgba(208, 31, 40, 0.2)', 'rgba(207, 207, 207, 0.2)'],
        borderColor: ['rgba(208, 31, 40, 1)', 'rgba(207, 207, 207, 1)'],
        borderWidth: 1,
        cutout: 50
      }
    ]
  }
  const options = {
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: `$${separateMiles(item.AveragePublishedPrice)}`
      },
      tooltip: {
        enabled: false
      }
    }
  }

  return (
    <Box textAlign={'center'}>
      <Text py={5} fontSize={{ base: '2xl', md: 'lg' }}>
        <NextLink
          href={{
            pathname: '/reports/gdt/product',
            query: { eventId: latestEvent, pgc: item.ProductGroupCode }
          }}
          passHref
          _hover={{
            color: 'highlight'
          }}
        >
          {item.ProductGroupName}
        </NextLink>
      </Text>
      <Text fontSize={{ base: '4xl', md: '3xl' }} fontWeight={'bold'}>
        {value > 0 ? `+${value}` : `${value}`}%
      </Text>
      <Doughnut data={data} options={options} />
    </Box>
  )
}

export default DoughnutCustom

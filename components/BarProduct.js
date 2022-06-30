import { Box, Text } from '@chakra-ui/react'
import { Bar } from 'react-chartjs-2'

const BarProduct = ({ data }) => {
  const labels = []
  const datasets = []
  const y = new Date().getFullYear()

  data.forEach(element => {
    labels.push(element.country)
  })
  datasets.push(
    {
      label: y - 1,
      data: data.map(item => item.value1),
      backgroundColor: 'rgba(208, 31, 40, 0.5)'
    },
    {
      label: y,
      data: data.map(item => item.value2),
      backgroundColor: 'rgba(208, 31, 40, 1)'
    }
  )

  const renderData = {
    labels,
    datasets: datasets
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

  return (
    <Box>
      <Text fontSize={'3xl'} py={5}>
        {data[0].product}
      </Text>
      <Bar data={renderData} options={options} />
      <Text fontSize={'sm'} py={5}>
        {''}
      </Text>
    </Box>
  )
}

export default BarProduct

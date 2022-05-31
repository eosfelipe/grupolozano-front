import { Box, Text } from '@chakra-ui/react'
import { Bar } from 'react-chartjs-2'
import { calcPercentage } from '../utils'

const BarHorizontal = ({ values }) => {
  const labels = values[0]?.data.map(item => item.product)
  const result = calcPercentage(values[0]?.data, values[1]?.data)

  const data = {
    labels,
    datasets: [
      {
        label: 'EU Production',
        data: result,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)'
      }
    ]
  }
  const options = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2
      }
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right'
      },
      title: {
        display: true,
        text: values[0]?.data[0].range
      }
    },
    scales: {
      x: {
        ticks: {
          callback: function (value, index, ticks) {
            return value + '%'
          }
        }
      }
    }
  }

  return (
    <Box>
      <Text fontSize={'3xl'} py={5}>
        {/* {name} */}
      </Text>
      <Bar data={data} options={options} />
      <Text fontSize={'sm'} py={5}>
        {/* {text} */}
      </Text>
    </Box>
  )
}

export default BarHorizontal

import { Box, Text } from '@chakra-ui/react'
import { Bar } from 'react-chartjs-2'

const BarCustom = ({ name, values, text }) => {
  const values1 = values[0].map(item => item.value)
  const values2 = values[1].map(item => item.value)
  const year = new Date().getFullYear()
  const data = {
    labels: [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre'
    ],
    datasets: [
      {
        label: `Year ${year - 1}`,
        data: values1,
        backgroundColor: 'rgba(208, 31, 40, 0.5)',
        stack: 'Stack 0'
      },
      {
        label: `Year ${year}`,
        data: values2,
        backgroundColor: 'rgba(208, 31, 40, 1)',
        stack: 'Stack 1'
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

  return (
    <Box>
      <Text fontSize={'3xl'} p={5} mb={2} bg={'dark'} color={'light'}>
        {name}
      </Text>
      <Bar data={data} options={options} />
      <Text fontSize={'sm'} py={5}>
        {text}
      </Text>
    </Box>
  )
}

export default BarCustom

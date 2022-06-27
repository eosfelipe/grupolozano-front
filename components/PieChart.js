import { Box } from '@chakra-ui/react'
import { Pie } from 'react-chartjs-2'

const PieChart = ({ values }) => {
  values.slice(-2).map(element => element.data[0].value)

  const data = {
    labels: values.slice(-2).map(element => element.data[0].year),
    datasets: [
      {
        label: 'Last year',
        data: values.slice(-2).map(element => element.data[0].value),
        backgroundColor: ['rgba(53, 162, 235, 0.5)', 'rgba(208, 31, 40, 0.5)'],
        borderColor: ['rgba(53, 162, 235)', 'rgba(208, 31, 40)'],
        borderWidth: 1
      }
    ]
  }

  return (
    <Box>
      <Pie data={data} />
    </Box>
  )
}

export default PieChart

import { Box } from '@chakra-ui/react'
import { Bar } from 'react-chartjs-2'

const MultiChart = ({ data }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart'
      }
    }
  }

  const labels = data[0].data.map(e => e.product)

  const values = {
    labels,
    datasets: [
      {
        type: 'line',
        label: '2022',
        borderColor: 'rgb(208, 31, 40)',
        borderWidth: 2,
        fill: false,
        data: data[2].data.map(e => e.value)
      },
      {
        type: 'bar',
        label: '2021',
        backgroundColor: 'rgb(53, 162, 235)',
        data: data[1].data.map(e => e.value),
        borderColor: 'white',
        borderWidth: 2
      },
      {
        type: 'bar',
        label: '2020',
        backgroundColor: 'rgb(119, 136, 153)',
        data: data[0].data.map(e => e.value),
        borderColor: 'white',
        borderWidth: 2
      }
    ]
  }
  return (
    <Box>
      <Bar options={options} data={values} />
    </Box>
  )
}

export default MultiChart

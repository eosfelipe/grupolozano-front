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
  const years = data.map(e => e.data.map(i => i.year))
  const uniqueVal = years.map(i => [...new Set(i)])

  const month = data[0]?.data[0]?.month

  const values = {
    labels,
    datasets: [
      {
        type: 'bar',
        label: `${month} - ${uniqueVal[0]}`,
        backgroundColor: 'rgb(119, 136, 153)',
        data: data[0].data.map(e => e.value),
        borderColor: 'white',
        borderWidth: 2
      },
      {
        type: 'bar',
        label: `${month} - ${uniqueVal[1]}`,
        backgroundColor: 'rgb(53, 162, 235)',
        data: data[1].data.map(e => e.value),
        borderColor: 'white',
        borderWidth: 2
      },
      {
        type: 'line',
        label: `${month} - ${uniqueVal[2]}`,
        data: data[2].data.map(e => e.value),
        borderColor: 'rgb(208, 31, 40)',
        borderWidth: 2,
        fill: false
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

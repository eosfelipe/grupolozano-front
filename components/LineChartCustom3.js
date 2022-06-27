import { Box } from '@chakra-ui/react'
import { Line } from 'react-chartjs-2'

const LineChartCustom3 = ({ data: { data: datasets } }) => {
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
  const labels = datasets.map(e => e.month)

  const data = {
    labels,
    datasets: [
      {
        label: datasets[0].product + ` Price ${datasets[0].year1}`,
        data: datasets.map(e => (e.value1 === '' ? null : e.value1)),
        borderColor: 'rgba(208, 31, 40)',
        backgroundColor: 'rgba(208, 31, 40, 0.5)'
      },
      {
        label: datasets[0].product + ` Price ${datasets[0].year2}`,
        data: datasets.map(e => (e.value2 === '' ? null : e.value2)),
        borderColor: 'rgba(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)'
      },
      {
        label: datasets[0].product + ` Price ${datasets[0].year3}`,
        data: datasets.map(e => (e.value3 === '' ? null : e.value3)),
        borderColor: 'rgba(255, 215, 0)',
        backgroundColor: 'rgba(255, 215, 0, 0.5)'
      }
    ]
  }

  return <Box>{<Line options={options} data={data} />}</Box>
}

export default LineChartCustom3

import { Box } from '@chakra-ui/react'
import { Line } from 'react-chartjs-2'

const LineChartCustom2 = ({ data }) => {
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
  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  const years = []
  const colors = ['208, 31, 40', '53, 162, 235', '255, 215, 0', '188, 143, 143', '119, 136, 153']
  const yearNow = new Date().getFullYear()
  for (let i = yearNow; i > yearNow - 3; i--) {
    years.push(i)
  }

  const getValuesxYear = year => {
    return data.map(element =>
      element.data
        .flat()
        .map(i => Number(i.year) === year && i.value)
        .filter(Boolean)
    )
  }

  const line = []
  years.forEach((year, i) => {
    line.push({
      label: year.toString(),
      data: getValuesxYear(year)
        .filter(a => Boolean(a?.length))
        .flat(),
      borderColor: `rgb(${colors[i]})`,
      backgroundColor: `rgba(${colors[i]},0.5)`
    })
  })

  // console.log(line)

  const data2 = {
    labels,
    datasets: line
  }

  return (
    <Box>
      <Line options={options} data={data2} />
    </Box>
  )
}

export default LineChartCustom2

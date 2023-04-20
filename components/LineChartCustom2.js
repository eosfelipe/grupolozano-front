import { Box } from '@chakra-ui/react'
import { Line } from 'react-chartjs-2'
import { getCurrentMonth } from '../utils'

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

  // labels for 3 years all months
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

  // for 3 years and 5 years
  const years = []
  const colors = ['208, 31, 40', '53, 162, 235', '255, 215, 0', '188, 143, 143', '119, 136, 153']
  const yearNow = new Date().getFullYear()
  for (let i = yearNow; i > yearNow - data.length; i--) {
    years.push(i)
  }
  // labels for 5 years actual month
  // const labels5 = years.map(year => `${getCurrentMonth('long')} ${year}`)
  const labels5 = years.map(year => `${data[0]?.data[0]?.month} ${year}`)

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

  const data2 = {
    labels,
    datasets: line
  }

  const d = years.map(
    year =>
      getValuesxYear(year)
        .filter(a => Boolean(a?.length))
        .flat(3)[0]
  )

  const data3 = {
    labels: labels5.reverse(),
    datasets: [
      {
        fill: true,
        label: 'Raw Milk Evolution',
        data: d.reverse(),
        borderColor: 'rgba(208, 31, 40)',
        backgroundColor: 'rgba(208, 31, 40, 0.5)'
      }
    ]
  }

  // render total cows milk collected
  // excel data at most 4 years if it already has 5 remove the oldest
  if (data.length === 3 || data.length === 4) {
    return (
      <Box>
        <Line options={options} data={data2} />
      </Box>
    )
  }

  // render eu raw milk evolution
  if (data.length === 5) {
    return (
      <Box>
        <Line options={options} data={data3} />
      </Box>
    )
  }

  return <Box>No Data</Box>
}

export default LineChartCustom2

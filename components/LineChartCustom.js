import { Line } from 'react-chartjs-2'

const LineChartCustom = ({ data: { data: datasets } }) => {
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
  for (let i = yearNow; i > yearNow - 5; i--) {
    years.push(i)
  }

  const getValuesxYear = year => {
    return datasets
      .flat()
      .map(element => element.year === year && element.value)
      .filter(Boolean)
  }

  const line = []
  years.forEach((year, i) => {
    line.push({
      label: year,
      data: getValuesxYear(year),
      borderColor: `rgb(${colors[i]})`,
      backgroundColor: `rgba(${colors[i]},0.5)`
    })
  })

  const data2 = {
    labels,
    datasets: line
  }

  return <Line options={options} data={data2} />
}

export default LineChartCustom

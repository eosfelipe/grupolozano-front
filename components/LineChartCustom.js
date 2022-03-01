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

  const randomRgba = () => {
    const o = Math.round
    const r = Math.random
    const s = 255
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')'
  }

  const line = []
  years.forEach((year, i) => {
    line.push({
      label: year,
      data: getValuesxYear(year),
      borderColor: randomRgba(),
      backgroundColor: randomRgba()
    })
  })

  const data2 = {
    labels,
    datasets: line
  }

  return <Line options={options} data={data2} />
}

export default LineChartCustom

import axios from 'axios'
import { groupBy, parseCsv } from '../utils'

export const getProducts = async () => {
  const URL_PRODUCTS = 'https://grupolozano.com.mx/dashboard/public/api/products/search/'
  const year = new Date().getFullYear()
  const years = [year - 1, year]
  const promises = []
  years.forEach(year => {
    promises.push(axios.get(`${URL_PRODUCTS}${year}`))
  })
  return Promise.all(promises)
    .then(result => {
      return {
        dataset1: result[0].data?.data,
        dataset2: result[1].data?.data
      }
    })
    .catch(error => console.log(error))
}

export const getDataMilk = async () => {
  const URL_MILK_CSV = 'https://grupolozano.com.mx/dashboard/public/api/milk'
  return axios.get(URL_MILK_CSV)
}

export const getDataImp = async () => {
  const URL_IMP_CSV =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vSIOeWuwBPQw0oDShUBWrSYWoSK1y1SWF4d4NbSzl2wOSDCClP0hOCgfl2zGQx63OVoZbyCSR6qMK2i/pub?output=csv'
  const { data } = await axios.get(URL_IMP_CSV)
  const csv = parseCsv(data)
  return groupBy(csv.data, 'product')
}

export const getDataExp = async () => {
  const URL_EXP_CSV =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vSpTD4J7YSBTXMt9_PoT9a7N66Ioq4Fk4clbtW3vZPxtxePoM5j_SN5fMFKaC0zsSnkTGzTcpguWJGh/pub?output=csv'
  const { data } = await axios.get(URL_EXP_CSV)
  const csv = parseCsv(data)
  return groupBy(csv.data, 'product')
}

export const getLastEventGDT = async () => {
  const latestId = 'https://s3.amazonaws.com/www-production.globaldairytrade.info/results/latest.json'
  const { data } = await axios.get(latestId)
  return data.latestEvent
}

export const getEventsGDT = async urls => {
  const requests = urls.map(url => axios.get(url))
  return Promise.all(requests)
    .then(responses => Promise.all(responses.map(r => r.data)).then(data => data))
    .catch(error => console.log(error))
}

// pgc = ProductGroupCode
export const getContract = async (eventId, pgc) => {
  const url = `https://s3.amazonaws.com/www-production.globaldairytrade.info/results/${eventId}/product_group_${pgc}.json`
  const { data } = await axios.get(url)
  return data
}

export const getPrices = async (eventId, pgc) => {
  const url = `https://s3.amazonaws.com/www-production.globaldairytrade.info/results/${eventId}/product_group_winning_prices_5_years_${pgc}.json`
  const { data } = await axios.get(url)
  return data
}

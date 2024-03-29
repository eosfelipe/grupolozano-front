import axios from 'axios'
import { groupBy, parseCsv } from '../utils'

export const getProducts = async () => {
  const URL_PRODUCTS = 'https://grupolozano.com.mx/dashboard/public/api/products/search/'
  const year = new Date().getFullYear()
  const years = [year - 2, year - 1, year]
  const promises = []
  years.forEach(year => {
    promises.push(axios.get(`${URL_PRODUCTS}${year}`))
  })
  return Promise.all(promises)
    .then(result => {
      return {
        dataset1: result[0].data?.data,
        dataset2: result[1].data?.data,
        dataset3: result[2].data?.data
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

export const getNews = async resource => {
  const NEWS_URL = `https://grupolozano.com.mx/api/news/wp-json/wp/v2/${resource}/?per_page=10&timestamp=${new Date().getTime()}`
  const { data } = await axios.get(NEWS_URL)
  return data
}

export const getTokenWP = async () => {
  const { data } = await axios.post(
    'https://grupolozano.com.mx/api/news//wp-json/jwt-auth/v1/token',
    {
      username: 'api',
      password: '36y$&mP7SDkxUVK31H37uB#)'
    },
    { headers: { 'Content-Type': 'application/json' } }
  )
  return data
}

// export const getNewsImage = async (id, token) => {
//   const NEWS_URL = `https://grupolozano.com.mx/api/news/wp-json/wp/v2/media/${i}`
//   const { data } = await axios.get(NEWS_URL, {
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${token}`
//     }
//   })
//   return data
// }

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

export const getEUProduction = async () => {
  const URL_EUPROD_CSV =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vQUFQrUf6oDX8a7d6xOc2SxD8iL2Be-4pIfS2U2K18j60VVEccp6ACcrY39Xag26TktSvEGNmni1bNS/pub?output=csv'
  const { data } = await axios.get(URL_EUPROD_CSV)
  const csv = parseCsv(data)
  return groupBy(csv.data, 'year')
}

export const getTotalMilkCollected = async () => {
  const URL_MILK_COL_CSV =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vQzQ-EABe4jwaKxdWgNXLRjd-Rss-bVbWQ3d9DeB4NtYyO1kU8DaAzV_jv6VMmIZGj2kUpcf05ZVzYx/pub?output=csv'
  const { data } = await axios.get(URL_MILK_COL_CSV)
  const csv = parseCsv(data)
  return groupBy(csv.data, 'year')
}

export const getDairyEvolutionPrice = async () => {
  const URL_DAIRYEVOPRICE_CSV =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vQGWugSum7U6gW8XI0KVfXh_5fjdCxLmsVWs_JZfWg7baLu7Ml0anTNVkDFE5Z5Wi2CS6hCF4JbNwh8/pub?output=csv'
  const { data } = await axios.get(URL_DAIRYEVOPRICE_CSV)
  const csv = parseCsv(data)
  return groupBy(csv.data, 'year')
}

export const getRawMilk = async () => {
  const URL_RAWMILK_CSV =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vQC2qjRCYrS_-gZhYLvfuBr5gS1IIERu5GuBKtSdqW0_JXIdihdeiyLf7jI0KeH3WRNgcatqiu_ksfI/pub?output=csv'
  const { data } = await axios.get(URL_RAWMILK_CSV)
  const csv = parseCsv(data)
  return groupBy(csv.data, 'year')
}

export const getCheesePrice = async () => {
  const URL_CHEESE_CSV =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vScwVjkghzwbyNcks4lWdSIJsxQkqFTdf5pExAiukMofyf6TXsqyqoOjoLs8kwT1UXj1VB_RmYQwQ8g/pub?output=csv'
  const { data } = await axios.get(URL_CHEESE_CSV)
  const csv = parseCsv(data)
  return groupBy(csv.data, 'product')
}

export const getRabobankLink = async () => {
  const URL_RABO =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vSNohRwrBI-mgU35jG_ToyoVSRK9FTlZhd9YUjrLg2-bnxud32tRVQOvAwuraUsJhGndQlTiNF8PaX9/pub?output=csv'
  const { data } = await axios.get(URL_RABO)
  const csv = parseCsv(data)
  return groupBy(csv.data, 'link')
}

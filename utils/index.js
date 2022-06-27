import Papa from 'papaparse'

export function stringToSlug(str) {
  str = str.replace(/^\s+|\s+$/g, '') // trim
  str = str.toLowerCase()

  // remove accents, swap ñ for n, etc
  const from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;'
  const to = 'aaaaeeeeiiiioooouuuunc------'
  for (let i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
  }

  str = str
    .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-') // collapse dashes

  return str
}

export function separateMiles(string) {
  if (string.length === 0) return 'n.a.'
  return string.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export async function call(url, params = null) {
  const heads = {}
  let body = params
  heads['Content-Type'] = 'application/json'
  body = params && JSON.stringify(params)

  const options = {
    mode: 'cors',
    method: 'GET',
    headers: heads
  }
  if (body) options.body = body

  try {
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (error) {
    console.error(`Bad request ❌ from ${url}`, error)
  }
}
/**
 *
 * @param {*} object
 * @param {*} originalKey
 * @param {*} matches
 * @returns array
 */
export function searchByKey(object, originalKey, matches = []) {
  if (object != null) {
    if (Array.isArray(object)) {
      for (const arrayItem of object) {
        searchByKey(arrayItem, originalKey, matches)
      }
    } else if (typeof object === 'object') {
      for (const key of Object.keys(object)) {
        if (key === originalKey) {
          matches.push(object)
        } else {
          searchByKey(object[key], originalKey, matches)
        }
      }
    }
  }
  return matches[0]
}

export function parseCsv(data) {
  return Papa.parse(data, {
    header: true,
    skipEmptyLines: true,
    complete: results => {
      return results
    },
    error: error => {
      return error.message
    }
  })
}

export function groupBy(values, iteratee) {
  const obj = {}
  for (const value of values) {
    const key = typeof iteratee === 'string' ? value[iteratee] : null
    // obj[key] ??= []
    // obj[key].push(value)
    key in obj ? obj[key].push(value) : (obj[key] = [value])
  }

  return Object.entries(obj).map(entry => {
    const key = entry[0]
    const value = entry[1]
    return { data: value }
  })
}

// data2 > data1
// return array
export function calcPercentage(data1, data2) {
  const result = []
  for (let i = 0; i < data1.length; i++) {
    result.push(Number.parseFloat((data2[i].value / data1[i].value - 1) * 100).toFixed(2))
  }
  return result
}

// opt: long or short
export function getCurrentMonth(opt) {
  return new Date().toLocaleString('default', { month: opt })
}

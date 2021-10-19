export function string_to_slug(str) {
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

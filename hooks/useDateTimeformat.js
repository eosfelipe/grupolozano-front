const isDateTimeFormatSupported = typeof Intl !== 'undefined' && Intl.DateTimeFormat

const formatDate = (timestamp, language, options) => {
  const date = new Date(timestamp)
  // for old browser only
  if (!isDateTimeFormatSupported) {
    const options = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }
    return date.toLocaleDateString(language, options)
  }
  if (options === null) {
    options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
      // hour: 'numeric',
      // minute: 'numeric',
      // second: 'numeric'
    }
  }
  return new Intl.DateTimeFormat(language, options).format(date)
}

export default function useDateTimeFormat(timestamp, language, options = null) {
  return formatDate(timestamp, language, options)
}

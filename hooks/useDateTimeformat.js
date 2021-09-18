import { useEffect, useState } from 'react'

const isDateTimeFormatSupported = typeof Intl !== 'undefined' && Intl.DateTimeFormat

const formatDate = timestamp => {
  const [language, setLanguage] = useState('')
  useEffect(() => {
    setLanguage(window.navigator.language)
  }, [])
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

  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
    // hour: 'numeric',
    // minute: 'numeric',
    // second: 'numeric'
  }
  return new Intl.DateTimeFormat(language, options).format(date)
}

export default function useDateTimeFormat(timestamp) {
  return formatDate(timestamp)
}

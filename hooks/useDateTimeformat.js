import { useEffect, useState } from 'react'

const isDateTimeFormatSupported = typeof Intl !== 'undefined' && Intl.DateTimeFormat

const formatDate = timestamp => {
  const [language, setLanguage] = useState('')
  useEffect(() => {
    setLanguage(window.navigator.language)
  }, [])
  console.log(language)
  const date = new Date(timestamp)
  if (!isDateTimeFormatSupported) {
    const options = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }
    return date.toLocaleDateString('es-Es', options)
  }

  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
    // hour: 'numeric',
    // minute: 'numeric',
    // second: 'numeric'
  }
  return new Intl.DateTimeFormat('es-ES', options).format(date)
}

export default function useDateTimeFormat(timestamp) {
  return formatDate(timestamp)
}

import mapboxgl from '!mapbox-gl' // eslint-disable-line
import { Box } from '@chakra-ui/react'
import { useState, useEffect, useRef } from 'react'
mapboxgl.accessToken =
  process.env.MB_ACCESS_TOKEN ||
  'pk.eyJ1IjoiZW9zZmVsaXBlIiwiYSI6ImNrc3F2aWhpZzBmdmUyb3BnYjRxZTdsaHAifQ.FJYmbzA2vXzQbnEOktl_lQ'
const MapContact = () => {
  const mapContainer = useRef(null)
  const map = useRef(null)
  const [lng, setLng] = useState(-70.9)
  const [lat, setLat] = useState(42.35)
  const [zoom, setZoom] = useState(9)

  useEffect(() => {
    if (map.current) return
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    })
  }, [])

  useEffect(() => {
    if (!map.current) return
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4))
      setLat(map.current.getCenter().lat.toFixed(4))
      setZoom(map.current.getZoom().toFixed(2))
    })
  }, [])

  return <Box h={'400px'} ref={mapContainer} />
}

export default MapContact

import mapboxgl from '!mapbox-gl' // eslint-disable-line
import { Box } from '@chakra-ui/react'
import { useState, useEffect, useRef } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css'

mapboxgl.accessToken =
  process.env.MB_ACCESS_TOKEN ||
  'pk.eyJ1IjoiZW9zZmVsaXBlIiwiYSI6ImNrc3F2aWhpZzBmdmUyb3BnYjRxZTdsaHAifQ.FJYmbzA2vXzQbnEOktl_lQ'

const MapContact = () => {
  const mapContainer = useRef(null)
  const map = useRef(null)
  const [lng, setLng] = useState(-99.1670641)
  const [lat, setLat] = useState(19.4292765)
  const [zoom, setZoom] = useState(14)

  useEffect(() => {
    if (map.current) return
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    })
    const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
      '<a href="https://goo.gl/maps/Z7YcQp3sFdTVLXjr8" style="color:#D01F28;" target="_blank">Grupo Lozano Migoya S.A. de C.V.</a>'
    )
    const marker = new mapboxgl.Marker({ color: '#D01F28' }).setLngLat([lng, lat]).setPopup(popup).addTo(map.current)
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

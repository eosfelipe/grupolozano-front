import { useEffect, useState } from 'react'
import axios from 'axios'
import { Container } from '@chakra-ui/react'
import News from './News'
import DarkOverlay from './DarkOverlay'

const NewsList = ({ data, token }) => {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [newData, setNewData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const responses = await Promise.all(
        data.map(item =>
          axios.get(`https://grupolozano.com.mx/api/news/wp-json/wp/v2/media/${item.featured_media}`, {
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token?.token}` }
          })
        )
      )
      setImages(responses.map(res => res.data))
    }
    fetchData()
  }, [setImages])

  useEffect(() => {
    setIsLoading(true)
    // console.log(images)
    setNewData(() => {
      const newArray = data.map((item, idx) => Object.assign({}, item, { imgDoc: images[idx] }))
      window.localStorage.setItem('posts', JSON.stringify(newArray))
      return newArray
    })

    setIsLoading(false)
  }, [setIsLoading, images])

  if (isLoading) return <DarkOverlay loading={isLoading} />

  return (
    <Container maxW={'7xl'} p={'12'}>
      {newData.map(post => (
        <News key={post.id} post={post} />
      ))}
    </Container>
  )
}

export default NewsList

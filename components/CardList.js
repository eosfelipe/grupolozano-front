import Carousel from 'react-multi-carousel'
import { useTheme } from '@chakra-ui/react'
import Card from './Card'
import 'react-multi-carousel/lib/styles.css'

const features = [
  {
    id: 1,
    img: 'http://grupolozano.com.mx/wp-content/uploads/2016/01/Suero-de-leche-en-polvo.jpg',
    name: 'Suero de leche en polvo',
    text: ''
  },
  {
    id: 2,
    img: 'http://grupolozano.com.mx/wp-content/uploads/2014/04/caseina1.jpg',
    name: 'Caseína',
    text: ''
  },
  {
    id: 3,
    img: 'http://grupolozano.com.mx/wp-content/uploads/2016/01/queso-azul.jpg',
    name: 'Queso azul',
    text: ''
  },
  {
    id: 4,
    img: 'http://grupolozano.com.mx/wp-content/uploads/2014/04/grasa_de_leche.jpg',
    name: 'Grasa de leche',
    text: ''
  },
  {
    id: 5,
    img: 'http://grupolozano.com.mx/wp-content/uploads/2016/01/dulce-de-leche.jpg',
    name: 'Dulce de leche',
    text: ''
  }
]

const CardList = () => {
  const { breakpoints } = useTheme()

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: breakpoints.xl, min: breakpoints.lg },
      items: 5
    },
    desktop: {
      breakpoint: { max: breakpoints.lg, min: breakpoints.md },
      items: 4,
      paritialVisibilityGutter: 60
    },
    tablet: {
      breakpoint: { max: breakpoints.md, min: breakpoints.sm },
      items: 2
    },
    mobile: {
      breakpoint: { max: breakpoints.sm, min: breakpoints.base },
      items: 1
    }
  }

  const responsive2 = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 360 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 360, min: 0 },
      items: 1
    }
  }

  return (
    <Carousel responsive={responsive2} infinite swipeable autoPlay>
      {features.map(feature => (
        <Card key={feature.id} img={feature.img} name={feature.name} />
      ))}
    </Carousel>
  )
}

export default CardList

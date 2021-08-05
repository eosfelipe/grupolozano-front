import Carousel from 'react-multi-carousel'
import { Flex, useTheme } from '@chakra-ui/react'
import Card from './Card'
import 'react-multi-carousel/lib/styles.css'

const features = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 5,
    img: 'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
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
      items: 3,
      paritialVisibilityGutter: 60
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      paritialVisibilityGutter: 50
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 30
    }
  }

  return (
    // <Flex flexFlow={'row nowrap'} maxW={'7xl'} p={'12'}>
    <Carousel responsive={responsive2} infinite swipeable autoPlay>
      {features.map(feature => (
        <Card key={feature.id} img={feature.img} />
      ))}
    </Carousel>
  )
}

export default CardList

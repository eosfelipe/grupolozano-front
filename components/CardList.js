import { useTheme } from '@chakra-ui/react'
import Carousel from 'react-multi-carousel'
import Card from './Card'
import { stringToSlug } from '../utils'
import 'react-multi-carousel/lib/styles.css'
const imgName = [
  'Caseína acida',
  'Azafran',
  'Queso azul',
  'Queso brie',
  'Queso camembert',
  'Canola',
  'Caseína renina',
  'Leche descremada en polvo (SMP Y NFDM)',
  'Dulce de leche',
  'Queso edam',
  'Queso emmental',
  'Queso feta',
  'Fondue',
  'Queso gouda block',
  'Grasa butírica',
  'Queso havarti',
  'Maíz amarillo',
  'Mantequilla',
  'Margarina',
  'Concentrado de proteína',
  'Queso mozzarella',
  'Queso reggianito',
  'Semilla de algodón',
  'Caseinato de sodio',
  'Soya',
  'Queso suizo',
  'Leche entera en polvo (WMP)'
]
const features = []
imgName.forEach((img, idx) => {
  const item = {
    id: idx,
    img: `/img/p/${stringToSlug(img)}.jpg`,
    name: img,
    text: ''
  }
  features.push(item)
})

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
      items: 4
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

import { useTheme } from '@chakra-ui/react'
import Carousel from 'react-multi-carousel'
import Card from './Card'
import { stringToSlug } from '../utils'
import 'react-multi-carousel/lib/styles.css'
const imgName = [
  'Azafran',
  'Canola',
  'Caseína',
  'Caseinato',
  'Dulce de leche',
  'Fondue',
  'Grasa butírica',
  'Leche descremada en polvo',
  'Leche entera',
  'Leche entera con aprole',
  'Maíz',
  'Mantequilla',
  'Margarina',
  'Proteinas',
  'Queso azul',
  'Queso brie',
  'Queso camembert',
  'Queso emmental',
  'Queso feta',
  'Queso gouda',
  'Queso havarti',
  'Queso mozzarella',
  'Queso reggianito',
  'Semilla de algodón',
  'Soya',
  'Suizo'
]
const features = []
imgName.forEach((img, idx) => {
  const item = {
    id: idx,
    img: `/img/pro/${stringToSlug(img)}.jpg`,
    name: img,
    text: ''
  }
  features.push(item)
})

const CardList = () => {
  const { breakpoints } = useTheme()

  const responsive = {
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
    <Carousel responsive={responsive} infinite swipeable autoPlay>
      {features.map(feature => (
        <Card key={feature.id} img={feature.img} name={feature.name} />
      ))}
    </Carousel>
  )
}

export default CardList

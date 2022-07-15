import { useTheme } from '@chakra-ui/react'
import Carousel from 'react-multi-carousel'
import Card from './Card'
import { stringToSlug } from '../utils'
import 'react-multi-carousel/lib/styles.css'
/*
1 polvos
2 grasas
3 mantequillas
4 quesos
5 semillas
 */
const imgName = [
  { name: 'Caseína', cat: '1' },
  { name: 'Caseinato', cat: '1' },
  { name: 'Dulce de leche', cat: '2' },
  { name: 'Fondue', cat: '4' },
  { name: 'Grasa butírica', cat: '2' },
  { name: 'Leche descremada en polvo', cat: '1' },
  { name: 'Leche entera', cat: '1' },
  { name: 'Maíz', cat: '5' },
  { name: 'Mantequilla', cat: '3' },
  { name: 'Margarina', cat: '3' },
  { name: 'Queso azul', cat: '4' },
  { name: 'Queso brie', cat: '4' },
  { name: 'Queso camembert', cat: '4' },
  { name: 'Queso emmental', cat: '4' },
  { name: 'Queso feta', cat: '4' },
  { name: 'Queso gouda', cat: '4' },
  { name: 'Queso havarti', cat: '4' },
  { name: 'Queso mozzarella', cat: '4' },
  { name: 'Queso reggianito', cat: '4' },
  { name: 'Semilla de algodón', cat: '5' },
  { name: 'Soya', cat: '5' },
  { name: 'Queso Suizo', cat: '4' }
]
const features = []
imgName.forEach((img, idx) => {
  const item = {
    id: idx,
    img: `/img/pro/${stringToSlug(img.name)}.jpg`,
    name: img.name,
    cat: img.cat,
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
      {features
        .sort((a, b) => a.cat - b.cat)
        .map(feature => (
          <Card key={feature.id} img={feature.img} name={feature.name} />
        ))}
    </Carousel>
  )
}

export default CardList

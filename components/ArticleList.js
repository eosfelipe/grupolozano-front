import { Container } from '@chakra-ui/react'
import Article from './Article'
import Milkimg from '../public/img/milk.jpg'
import Marketimg from '../public/img/market.jpg'
import Caseinimg from '../public/img/casein.jpg'

const dataHome = [
  {
    id: 1,
    imgStart: true,
    imgSrc: Milkimg,
    heading: 'Milk Partners',
    text: 'Somos un proveedor líder de soluciones e ingredientes lácteos para los sectores de la alimentación, las bebidas y la salud. Nuestra preocupación es mejorar el valor, la eficacia y el rendimiento de sus productos para satisfacer las más altas exigencias de los clientes. Con muchos años de experiencia, somos capaces de introducir nuevos productos y proporcionar ingredientes de la mejor calidad para una gran variedad de aplicaciones. Nuestros productos se desarrollan para mejorar la salud y el bienestar de la mejor manera posible.',
    buttonLabel: 'More information'
  },
  {
    id: 2,
    imgStart: false,
    imgSrc: Marketimg,
    heading: 'Market reports',
    text: 'Hoy en día en el mercado de la analítica empresarial, las organizaciones, asociaciones y actores en el mercado B2B generan un enorme volumen de datos estructurados y no estructurados debido a sus actividades cotidianas, lo que ha dado lugar a las tendencias de big data. En Grupo Lozano Migoya estamos relacionados con las actividades de los clientes, empresas del sector, los productos y los competidores. Es por esa razón que recopilamos a través de varios canales digitales involucrados en el negocio la información necesaria e importante para que nuestros clientes puedan tomar las decisiones importantes en su negocio.',
    buttonLabel: 'More information'
  },
  {
    id: 3,
    imgStart: true,
    imgSrc: Caseinimg,
    heading: 'Casein Partners',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    buttonLabel: 'More information'
  }
]
const ArticleList = ({ data = null }) => {
  return (
    <Container maxW={'7xl'} p={'12'}>
      {data
        ? data.map(item => (
            <Article
              key={item.id}
              imgStart={item.imgStart}
              imgSrc={item.imgSrc}
              heading={item.heading}
              text={item.text}
              buttonLabel={item.buttonLabel}
              isImgExternal={true}
            />
          ))
        : dataHome.map(item => (
            <Article
              key={item.id}
              imgStart={item.imgStart}
              imgSrc={item.imgSrc}
              heading={item.heading}
              text={item.text}
              buttonLabel={item.buttonLabel}
            />
          ))}
    </Container>
  )
}

export default ArticleList

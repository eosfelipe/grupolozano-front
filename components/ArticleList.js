import { Container } from '@chakra-ui/react'
import Article from './Article'

const dataHome = [
  {
    id: 1,
    imgStart: true,
    imgSrc:
      'https://images.unsplash.com/photo-1588710929895-6ee7a0a4d155?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80',
    heading: 'Milk Partners',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    buttonLabel: 'More information'
  },
  {
    id: 2,
    imgStart: false,
    imgSrc:
      'https://images.unsplash.com/photo-1552767059-ce182ead6c1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80',
    heading: 'Cheesse Partners',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    buttonLabel: 'More information'
  },
  {
    id: 3,
    imgStart: true,
    imgSrc:
      'https://images.unsplash.com/photo-1619865482177-71d195df05b1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
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

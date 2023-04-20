import { Alert, AlertDescription, AlertIcon, AlertTitle, CloseButton, Container, Heading } from '@chakra-ui/react'
import { useQuery } from 'react-query'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { getNews, getTokenWP } from 'api'
import DarkOverlay from '../../components/DarkOverlay'
import NewsList from '../../components/NewsList'

// const data = [
//   {
//     id: 1,
//     imgStart: true,
//     imgSrc:
//       'https://images.unsplash.com/photo-1495020689067-958852a7765e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
//     heading: 'Title',
//     text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
//     buttonLabel: 'More information'
//   },
//   {
//     id: 2,
//     imgStart: true,
//     imgSrc:
//       'https://images.unsplash.com/photo-1495020689067-958852a7765e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
//     heading: 'Title',
//     text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
//     buttonLabel: 'More information'
//   },
//   {
//     id: 3,
//     imgStart: true,
//     imgSrc:
//       'https://images.unsplash.com/photo-1495020689067-958852a7765e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
//     heading: 'Title',
//     text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
//     buttonLabel: 'More information'
//   }
// ]

export default function News() {
  const { data, isError, isLoading, isSuccess } = useQuery(['news'], () => getNews('posts'), {
    staleTime: Infinity,
    cacheTime: 1000 * 60
  })

  const { data: token, isSuccess: isSuccesToken } = useQuery(['tokenWP'], () => getTokenWP(), {
    staleTime: Infinity,
    cacheTime: 1000 * 60,
    enabled: !!data
  })

  if (isError) {
    return (
      <Alert status="error">
        <AlertIcon />
        <AlertTitle mr={2}>418 I&apos;m a teapot</AlertTitle>
        <AlertDescription>Please check your network</AlertDescription>
        <CloseButton position="absolute" right="8px" top="8px" />
      </Alert>
    )
  }
  if (isLoading) return <DarkOverlay loading={isLoading} />

  return (
    <>
      <Navbar color={1} />
      <Container maxW={{ base: '3xl', md: '7xl' }} pt={{ base: '6', md: '12' }} px={{ base: '6', md: '12' }}>
        <Heading mt={'100px'}>Noticias más recientes</Heading>
      </Container>
      {isSuccess && isSuccesToken && <NewsList data={data} token={token} />}
      <Footer />
    </>
  )
}

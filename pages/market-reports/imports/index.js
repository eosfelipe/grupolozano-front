import NextLink from 'next/link'
import {
  Box,
  Container,
  Heading,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Spinner,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  SimpleGrid
} from '@chakra-ui/react'
import { useQuery } from 'react-query'
import DarkOverlay from '../../../components/DarkOverlay'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import BarCustom from '../../../components/BarCustom'
import { getProducts } from '../../../api'

const ReportImports = () => {
  // const products = ['Leche en polvo', 'Mantequilla', 'Grasa butírica', 'Quesos', 'Caseína', 'Caseinatos']

  const { data, error, isLoading, isFetching, isSuccess } = useQuery(['products'], getProducts, {
    staleTime: Infinity,
    cacheTime: 1000 * 60
  })

  const yearNow = new Date().getFullYear()
  let isEmpty = null
  const filteredProducts = () => {
    if (isSuccess) {
      isEmpty = data.dataset3.length
      if (isEmpty !== 0) {
        return data?.dataset3.filter(o => o.year === yearNow).map(e => e.name)
      } else {
        return data?.dataset2.filter(o => o.year === yearNow - 1).map(e => e.name)
      }
    } else {
      return []
    }
  }
  const products = [...new Set(filteredProducts())]

  if (error) {
    return (
      <Alert status="error">
        <AlertIcon />
        <AlertTitle mr={2}>418 I&apos;m a teapot</AlertTitle>
        <AlertDescription>Please check your network</AlertDescription>
        <CloseButton position="absolute" right="8px" top="8px" />
      </Alert>
    )
  }

  if (isLoading) {
    return <DarkOverlay loading={isLoading} />
  }

  return (
    <>
      <Navbar color={1} />
      <Container
        maxW={{ base: '3xl', md: '7xl' }}
        py={{ base: '6', md: '12' }}
        px={{ base: '6', md: '12' }}
        mt={'100px'}
      >
        <Container border={'1px solid #cfcfcf'} minH={'100vh'} bg={'gray.100'} p={5} maxW={{ base: '3xl', md: '7xl' }}>
          <Breadcrumb fontSize={'sm'}>
            <BreadcrumbItem>
              <NextLink href="/" passHref>
                <BreadcrumbLink>Home</BreadcrumbLink>
              </NextLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <NextLink href="/market-reports" passHref>
                <BreadcrumbLink>Market reports</BreadcrumbLink>
              </NextLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage color={'highlight'}>
              <NextLink href="/market-reports/imports" passHref>
                <BreadcrumbLink>Acumulativo mensual</BreadcrumbLink>
              </NextLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading py={5}>Acumulativo mensual de importaciones {isFetching && <Spinner />}</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, lg: 8 }}>
            {products.map((product, i) => {
              const p1 = data.dataset1.filter(item => item.name === product)
              const p2 = data.dataset2.filter(item => item.name === product)
              return <BarCustom key={i} name={product} values={[p1, p2]} text={isEmpty} />
            })}
          </SimpleGrid>
          <Box>
            <Text fontSize={'sm'}>
              All information published on this page may be reproduced provided the user acknowledges Grupo Lozano
              Migoya as the source.
            </Text>
          </Box>
        </Container>
      </Container>
      <Footer />
    </>
  )
}

export default ReportImports

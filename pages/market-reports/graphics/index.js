import { useRef, useState } from 'react'
import NextLink from 'next/link'
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  CloseButton,
  Container,
  Divider,
  Grid,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Spinner,
  Text
} from '@chakra-ui/react'
import ReactToPrint from 'react-to-print'
import DarkOverlay from '../../../components/DarkOverlay'
import Footer from '../../../components/Footer'
import Navbar from '../../../components/Navbar'
import LineChartCustom from '../../../components/LineChartCustom'
import LineChartCustom2 from '../../../components/LineChartCustom2'
import BarProduct from '../../../components/BarProduct'
import Logo from '../../../public/img/logo.png'
import { useIsFetching, useQuery } from 'react-query'
import { getDataExp, getDataImp, getDataMilk, getEUProduction, getTotalMilkCollected } from '../../../api'
import BarHorizontal from '../../../components/BarHorizontal'

const Graphics = () => {
  const [displayToPrint, setDisplayToPrint] = useState('block')
  const componentRef = useRef()
  const isFetching = useIsFetching()

  const {
    data: milk,
    error: errorMilk,
    isLoading: isLoadingMilk
  } = useQuery(['milk'], getDataMilk, {
    staleTime: Infinity,
    cacheTime: 1000 * 60
  })

  const {
    data: dataImporters,
    error: errorImp,
    isLoading: isLoadingImp
  } = useQuery(['importers'], getDataImp, {
    staleTime: Infinity,
    cacheTime: 1000 * 60
  })

  const {
    data: dataExporters,
    error: errorExp,
    isLoading: isLoadingExp
  } = useQuery(['exporters'], getDataExp, {
    staleTime: Infinity,
    cacheTime: 1000 * 60
  })

  const {
    data: dataEuproduction,
    error: errorEu,
    isLoading: isLoadingEu
  } = useQuery(['euproduction'], getEUProduction, {
    staleTime: Infinity,
    cacheTime: 1000 * 60
  })

  const {
    data: milkCollected,
    error: errorMilkCol,
    isLoading: isLoadingMilkCol
  } = useQuery(['milkCollected'], getTotalMilkCollected, {
    staleTime: Infinity,
    cacheTime: 1000 * 60
  })

  if (errorMilk && errorImp && errorExp && errorEu && errorMilkCol) {
    return (
      <Alert status="error">
        <AlertIcon />
        <AlertTitle mr={2}>418 I&apos;m a teapot</AlertTitle>
        <AlertDescription>Please check your network</AlertDescription>
        <CloseButton position="absolute" right="8px" top="8px" />
      </Alert>
    )
  }

  if (isLoadingMilk && isLoadingImp && isLoadingExp && isLoadingEu && isLoadingMilkCol) {
    return <DarkOverlay loading={isLoadingImp} />
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
        <Container
          border={'1px solid #cfcfcf'}
          minH={'100vh'}
          bg={'gray.100'}
          p={5}
          maxW={{ base: '3xl', md: '7xl' }}
          ref={componentRef}
        >
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
              <NextLink href="/market-reports/graphics" passHref>
                <BreadcrumbLink>U.S. Milk production</BreadcrumbLink>
              </NextLink>
            </BreadcrumbItem>
          </Breadcrumb>

          {/* <Box>
            <Image src={Logo.src} py={5} display={displayToPrint} w={'200px'} />
          </Box> */}
          <Heading p={5} mb={2} bg={'dark'} color={'light'}>
            U.S. Milk Production in 1000 t {isFetching ? <Spinner /> : null}
          </Heading>
          <Grid templateColumns="repeat(3, 1fr)" gap={4}>
            <GridItem colSpan={{ base: 3, md: 2 }}>{milk.data && <LineChartCustom data={milk.data} />}</GridItem>
            <GridItem
              colStart={3}
              display={{ base: 'none', md: 'flex' }}
              flexDirection={'row'}
              alignItems={'center'}
              justifyContent={'flex-start'}
            >
              <Image src={Logo.src} py={5} display={displayToPrint} />
              {/* <Button as={'a'} variant={'primary'} cursor={'pointer'} className={'noprint'}>
                Print report
              </Button> */}
              {/* <ReactToPrint
                trigger={() => (
                  <Button as={'a'} variant={'primary'} cursor={'pointer'} className={'noprint'}>
                    Print report
                  </Button>
                )}
                content={() => componentRef.current}
              /> */}
            </GridItem>
          </Grid>
          <Divider py={5} />
          <Heading p={5} bg={'dark'} color={'light'}>
            Milk main dairy importers
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, lg: 8 }}>
            {dataImporters && dataImporters.map((item, idx) => <BarProduct key={idx} data={item.data} />)}
          </SimpleGrid>
          <Divider py={5} />
          <Heading p={5} bg={'dark'} color={'light'}>
            Milk main dairy exporters
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, lg: 8 }}>
            {dataExporters && dataExporters.map((item, idx) => <BarProduct key={idx} data={item.data} />)}
          </SimpleGrid>
          <Divider py={5} />
          <Heading p={5} bg={'dark'} color={'light'}>
            EU Production {isFetching ? <Spinner /> : dataEuproduction[0]?.data[0]?.range}
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, lg: 8 }}>
            {dataEuproduction && <BarHorizontal values={dataEuproduction} />}
          </SimpleGrid>
          <Divider py={5} />
          <Heading p={5} mb={2} bg={'dark'} color={'light'}>
            Total Cows Milk collected in 1000 t {isFetching ? <Spinner /> : null}
          </Heading>
          <Grid templateColumns="repeat(3, 1fr)" gap={4}>
            <GridItem colSpan={{ base: 3, md: 2 }}>
              {milkCollected && <LineChartCustom2 data={milkCollected} />}
            </GridItem>
            <GridItem
              colStart={3}
              display={{ base: 'none', md: 'flex' }}
              flexDirection={'row'}
              alignItems={'center'}
              justifyContent={'flex-start'}
            >
              <Image src={Logo.src} py={5} display={displayToPrint} />
            </GridItem>
          </Grid>
          <Box mt={5}>
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

export default Graphics

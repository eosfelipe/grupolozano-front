import NextLink from 'next/link'
import { CheckIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  VStack,
  Link
} from '@chakra-ui/react'
import { stringToSlug } from '../utils'
import Logo from '../public/img/logo_invert.png'

const Wrapper = ({ title = 'View report', subtitle, img, link = '404', isExternal = false }) => {
  return (
    <Box
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={'gray.500'}
      borderRadius={'xl'}
    >
      <Box
        py={4}
        px={12}
        bg={'dark'}
        borderTopRadius={'xl'}
        minH={'115px'}
        minW={'342px'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        {/* <Text fontWeight="500" fontSize="2xl">
          {title}
        </Text> */}
        <HStack justifyContent="center">
          {/* <Text fontSize="5xl" fontWeight="900">
            {subtitle}
          </Text> */}
          <Image src={img} alt={link} w={'100%'} />
        </HStack>
      </Box>
      <VStack py={4} borderBottomRadius={'xl'}>
        <List spacing={3} textAlign="start" px={12}>
          <ListItem color={'dark'}>
            <ListIcon as={CheckIcon} color="highlight" />
            unlimited build minutes
          </ListItem>
          <ListItem color={'dark'}>
            <ListIcon as={CheckIcon} color="highlight" />
            Lorem, ipsum dolor.
          </ListItem>
          <ListItem color={'dark'}>
            <ListIcon as={CheckIcon} color="highlight" />
            5TB Lorem, ipsum dolor.
          </ListItem>
        </List>
        <Box w="80%" pt={7}>
          {isExternal ? (
            <Link
              href={link}
              isExternal
              _hover={{
                textDecoration: 'none'
              }}
            >
              <Button variant={'primary'}>{title}</Button>
            </Link>
          ) : (
            <NextLink href={`/reports/${link}`} passHref>
              <Button as={'a'} variant={'primary'}>
                {title}
              </Button>
            </NextLink>
          )}
        </Box>
      </VStack>
    </Box>
  )
}
const ReportsList = () => {
  return (
    <Box py={12}>
      <VStack spacing={2} textAlign={'center'}>
        <Heading as={'h1'} fontSize={'4xl'}>
          Most demanded reports
        </Heading>
        <Text fontSize={'lg'} color={'dark'}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste architecto ratione hic eveniet, temporibus
          iusto?
        </Text>
      </VStack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign={'center'}
        justify={'center'}
        spacing={{ base: 4, lg: 10 }}
        py={10}
      >
        <Wrapper img={'https://cdn.globaldairytrade.info/ps/static-ss4/img/primary-logo.20f4cce6.svg'} link={'gdt'} />
        <Wrapper img={Logo.src} link={'imports'} />
        <Wrapper
          img={'https://www.rabobank.co.nz/-/media/new-images/rabobank-logo-white.png'}
          link={
            'https://www.rabobank.co.nz/-/media/rabobank-nz/files/pdf/agribusiness-monthly/2021/186068_nz-agribusiness-monthly_sept2021.pdf?la=en&hash=CC9A90208896C7003A61E57DC141891796E260CD'
          }
          title="View latest report"
          isExternal
        />
      </Stack>
    </Box>
  )
}

export default ReportsList

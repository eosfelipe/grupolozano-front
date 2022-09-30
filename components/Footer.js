import NextLink from 'next/link'
import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  useBreakpointValue
} from '@chakra-ui/react'
import { socialMedia } from '../config'
import Icon from './Icon'
import FormNewsletter from './FormNewsletter'
import ChakraNextImage from './ChakraNextImage'
import BrainHub from 'public/img/brainhub2.jpg'
import { linkRabobank } from './ReportsList'

const Footer = () => {
  return (
    <Box px={useBreakpointValue({ base: 10, md: 20 })} bg={'dark'} color={'light'}>
      <Container as={Stack} py={10} maxW={'100%'} mx={0}>
        <SimpleGrid
          templateColumns={{
            sm: '1fr 1fr',
            md: '2fr 1fr 1fr 2fr'
          }}
          spacing={8}
        >
          <Stack spacing={6} textAlign={'center'}>
            <Box>
              <Text color={'light'}>Grupo Lozano Migoya</Text>
            </Box>
            <Text fontSize={'sm'}>&copy; {new Date().getFullYear()} All rights reserved</Text>
            <Stack direction={'row'} spacing={6} display={'block'}>
              <Link href="http://brainhub.com.mx/" isExternal>
                <ChakraNextImage src={BrainHub} alt={'brainhub-merida'} placeholder={'brainhub'} w={100} h={50} />
              </Link>
              {socialMedia &&
                socialMedia.map(
                  ({ name, url }, i) =>
                    url && (
                      <chakra.button
                        key={i}
                        bg={'dark'}
                        rounded={'full'}
                        w={6}
                        h={6}
                        cursor={'pointer'}
                        as={'a'}
                        href={url}
                        display={'inline-flex'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        transition={'all 0.3s ease'}
                        _hover={{
                          transform: 'translateY(-3px)'
                        }}
                      >
                        <VisuallyHidden>{name}</VisuallyHidden>
                        <Icon name={name} color={'#f5f5f5'} />
                      </chakra.button>
                    )
                )}
            </Stack>
          </Stack>
          <Stack align={'flex-start'}>
            <Text fontWeight={'normal'} fontSize={'lg'} mb={2}>
              Market Reports
            </Text>
            <NextLink href={'/market-reports/gdt'} passHref>
              <Link
                fontWeight={'light'}
                _focus={{
                  outline: 'none'
                }}
              >
                Global Dairy Trade
              </Link>
            </NextLink>
            <NextLink href={'/market-reports/imports'} passHref>
              <Link
                fontWeight={'light'}
                _focus={{
                  outline: 'none'
                }}
              >
                Accumulated Monthly Imports
              </Link>
            </NextLink>
            <NextLink href={'/market-reports/graphics'} passHref>
              <Link
                fontWeight={'light'}
                _focus={{
                  outline: 'none'
                }}
              >
                Milk Production
              </Link>
            </NextLink>
            <Link
              fontWeight={'light'}
              href={linkRabobank}
              isExternal
              _hover={{
                textDecoration: 'none'
              }}
            >
              Rabobank
            </Link>
          </Stack>
          <Stack align={'flex-start'}>
            <Text fontWeight={'normal'} fontSize={'lg'} mb={2}>
              Soporte
            </Text>
            {/* <Link fontWeight={'light'} href={'#'}>
              Terms of Service
            </Link>
            <Link fontWeight={'light'} href={'#'}>
              Legal
            </Link> */}
            <NextLink href={'/privacy'} passHref>
              <Link
                fontWeight={'light'}
                _focus={{
                  outline: 'none'
                }}
              >
                Aviso de Privacidad
              </Link>
            </NextLink>
          </Stack>
          <Stack align={'flex-start'}>
            <Text fontWeight={'normal'} fontSize={'lg'} mb={2}>
              Newsletter
            </Text>
            <FormNewsletter />
          </Stack>
        </SimpleGrid>
        <Text as={'span'} color={'light'} fontSize={'xs'} fontWeight={'light'} textAlign={'center'}>
          Las marcas, logotipos, tipografías y las imágenes alusivas a cualquier marca mostrada en este sitio web, son
          propiedad de sus respectivos dueños.
        </Text>
      </Container>
    </Box>
  )
}

export default Footer

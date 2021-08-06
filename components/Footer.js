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
          <Stack spacing={6}>
            <Box>
              <Text color={'light'}>Grupo Lozano Migoya</Text>
            </Box>
            <Text fontSize={'sm'}>&copy; {new Date().getFullYear()} All rights reserved</Text>
            <Stack direction={'row'} spacing={6} display={'block'}>
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
              Company
            </Text>
            <Link fontWeight={'light'} href={'#'}>
              About us
            </Link>
            <Link fontWeight={'light'} href={'#'}>
              Blog
            </Link>
            <Link fontWeight={'light'} href={'#'}>
              Testimonials
            </Link>
          </Stack>
          <Stack align={'flex-start'}>
            <Text fontWeight={'normal'} fontSize={'lg'} mb={2}>
              Support
            </Text>
            <Link fontWeight={'light'} href={'#'}>
              Terms of Service
            </Link>
            <Link fontWeight={'light'} href={'#'}>
              Legal
            </Link>
            <Link fontWeight={'light'} href={'#'}>
              Privacy Policy
            </Link>
          </Stack>
          <Stack align={'flex-start'}>
            <Text fontWeight={'normal'} fontSize={'lg'} mb={2}>
              Contact
            </Text>
            <FormNewsletter />
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default Footer

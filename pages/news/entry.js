import NextLink from 'next/link'
import { Box, Button, Container, Divider, Flex, HStack, Heading, Image, Link, Text, WrapItem } from '@chakra-ui/react'
import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Entry() {
  const router = useRouter()
  const [posts, setPosts] = useState([])

  useEffect(() => {
    setPosts(JSON.parse(window.localStorage.getItem('posts')))
  }, [setPosts])

  const post = posts && posts.find(post => post.id.toString() === router?.query?.uid)

  return (
    <>
      <Navbar color={1} />
      <Container maxW={{ base: '3xl', md: '7xl' }} pt={{ base: '6', md: '12' }} px={{ base: '6', md: '12' }} pb={'10'}>
        <Heading mt={'100px'}>{post?.title.rendered}</Heading>
        <Divider marginTop="5" />
        <Flex spacing="30px" marginTop="5" justifyContent={'center'}>
          <WrapItem width={{ base: '100%', md: '50%', lg: '65%' }}>
            <Box w="100%">
              <Box borderRadius="lg" overflow="hidden" my="2" pb="2">
                <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                  <Image
                    transform="scale(1.0)"
                    src={post?.imgDoc.source_url}
                    alt="some text"
                    objectFit="contain"
                    width="100%"
                    transition="0.3s ease-in-out"
                    _hover={{
                      transform: 'scale(1.05)'
                    }}
                  />
                </Link>
              </Box>
              <Text
                as="p"
                fontSize="md"
                marginTop="2"
                dangerouslySetInnerHTML={{
                  __html: post?.content?.rendered
                }}
              />
              <HStack marginTop="2" spacing="2" display="flex" alignItems="flex-end" justifyContent={'flex-end'}>
                {/* <Image borderRadius="full" boxSize="40px" src="/img/logo.png" alt={``} /> */}
                <Text fontWeight="medium"></Text>
                <Flex flexDir={'column'}>
                  <Text fontSize={'small'}>{post?.author === 1 && 'Grupo Lozano'}</Text>
                  <Text textColor={'#424242'} fontSize={'small'}>
                    {new Date(post?.date).toLocaleDateString('es-ES', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </Text>
                  <NextLink
                    href={{
                      pathname: '/news/'
                    }}
                    passHref
                  >
                    <Button as={'a'} variant={'primary'} mt={5}>
                      Regresar
                    </Button>
                  </NextLink>
                </Flex>
              </HStack>
            </Box>
          </WrapItem>
        </Flex>
      </Container>
      <Footer />
    </>
  )
}

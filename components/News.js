import NextLink from 'next/link'
import { Box, Flex, Button, Heading, Link, useColorModeValue, useTheme, Image } from '@chakra-ui/react'
import ChakraNextImage from './ChakraNextImage'
import { BeatLoader } from 'react-spinners'

const News = ({ post, isLoading }) => {
  const { colors } = useTheme()

  return (
    <Box
      marginTop={{ base: '7', sm: '7' }}
      display={'flex'}
      flexDirection={{
        base: 'column',
        sm: `${post?.slug.length > 0 ? (post.sticky ? 'row' : 'row-reverse') : 'column'}`
      }}
      justifyContent={'space-between'}
    >
      <Box display={'flex'} flex={'1'} marginRight={'3'} position={'relative'} alignItems={'center'}>
        <Box
          w={{ base: '100%', sm: `${post.slug.length > 0 ? '85%' : '70%'}` }}
          zIndex={'2'}
          marginLeft={{ base: '0', sm: '5%' }}
          marginTop={'5%'}
        >
          <Link textDecoration={'none'} _hover={{ textDecoration: 'none' }}>
            {isLoading ? (
              <Flex justifyContent={'center'} alignItems={'center'}>
                <BeatLoader color="#D01F28" />
              </Flex>
            ) : (
              <Image
                borderRadius={'lg'}
                src={post?.imgDoc?.guid?.rendered}
                alt={post?.title.rendered}
                objectFit={'contain'}
              />
            )}
          </Link>
        </Box>
        <Box zIndex={'1'} w={'100%'} position={'absolute'} h={'100%'}>
          <Box
            bgGradient={useColorModeValue(
              `radial(${colors.highlight} 1px, transparent 1px)`,
              `radial(${colors.highlight} 1px, transparent 1px)`
            )}
            backgroundSize={'20px 20px'}
            opacity={'0.4'}
            h={'100%'}
          />
        </Box>
      </Box>
      <Box
        display={'flex'}
        flex={'1'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'flex-start'}
        marginTop={{ base: '3', sm: '0' }}
      >
        <Heading mb={5}>{post?.title.rendered}</Heading>
        <Flex
          mt={5}
          color={'dark'}
          fontSize={'md'}
          dangerouslySetInnerHTML={{
            __html: post?.excerpt.rendered
          }}
        ></Flex>

        <NextLink
          href={{
            pathname: '/news/entry/',
            query: { uid: post?.id }
          }}
          passHref
        >
          <Button as={'a'} variant={'primary'} mt={5}>
            Más
          </Button>
        </NextLink>
      </Box>
    </Box>
  )
}

export default News

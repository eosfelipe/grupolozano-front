import NextLink from 'next/link'
import { Box, Flex, Button, Heading, Link, useColorModeValue, useTheme, Image } from '@chakra-ui/react'
import ChakraNextImage from './ChakraNextImage'
import { stringToSlug } from '../utils'

const Article = ({ imgStart = false, imgSrc, heading, text, buttonLabel, isImgExternal = false }) => {
  const { colors } = useTheme()

  return (
    <Box
      marginTop={{ base: '7', sm: '7' }}
      display={'flex'}
      flexDirection={{ base: 'column', sm: `${heading.length > 0 ? (imgStart ? 'row' : 'row-reverse') : 'column'}` }}
      justifyContent={'space-between'}
    >
      <Box display={'flex'} flex={'1'} marginRight={'3'} position={'relative'} alignItems={'center'}>
        <Box
          w={{ base: '100%', sm: `${heading.length > 0 ? '85%' : '70%'}` }}
          zIndex={'2'}
          marginLeft={{ base: '0', sm: '5%' }}
          marginTop={'5%'}
        >
          <Link textDecoration={'none'} _hover={{ textDecoration: 'none' }}>
            {isImgExternal ? (
              <Image borderRadius={'lg'} src={imgSrc} alt={heading} objectFit={'contain'} />
            ) : (
              <ChakraNextImage alt={heading} src={imgSrc} placeholder="blur" />
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
        <Heading mb={5}>{heading}</Heading>
        <Flex mt={5} color={'dark'} fontSize={'md'}>
          {text}
        </Flex>
        {buttonLabel && (
          <NextLink href={`/${stringToSlug(heading)}`} passHref>
            <Button as={'a'} variant={'primary'} mt={5}>
              {buttonLabel}
            </Button>
          </NextLink>
        )}
      </Box>
    </Box>
  )
}

export default Article

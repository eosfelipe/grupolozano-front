import { Box, Button, Heading, Image, Link, Text, useColorModeValue, useTheme } from '@chakra-ui/react'
import { string_to_slug } from '../utils'

const Article = ({ imgStart = false, imgSrc, heading, text, buttonLabel }) => {
  const { colors } = useTheme()
  return (
    <Box
      marginTop={{ base: '7', sm: '7' }}
      display={'flex'}
      flexDirection={{ base: 'column', sm: `${imgStart ? 'row' : 'row-reverse'}` }}
      justifyContent={'space-between'}
    >
      <Box display={'flex'} flex={'1'} marginRight={'3'} position={'relative'} alignItems={'center'}>
        <Box w={{ base: '100%', sm: '85%' }} zIndex={'2'} marginLeft={{ base: '0', sm: '5%' }} marginTop={'5%'}>
          <Link textDecoration={'none'} _hover={{ textDecoration: 'none' }}>
            <Image borderRadius={'lg'} src={imgSrc} alt={heading} objectFit={'contain'} />
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
        <Text as={'p'} mt={5} color={'dark'} fontSize={'md'}>
          {text}
        </Text>
        <Button as={'a'} href={`/${string_to_slug(heading)}`} variant={'primary'} mt={5}>
          {buttonLabel}
        </Button>
      </Box>
    </Box>
  )
}

export default Article

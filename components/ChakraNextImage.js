import NextImage from 'next/image'
import { Box } from '@chakra-ui/react'

const ChakraNextImage = props => {
  const { src, alt, placeholder, w, h, ...rest } = props
  if (!w)
    return (
      <Box objectFit={'cover'} borderRadius={'lg'} {...rest}>
        <NextImage src={src} alt={alt} placeholder={placeholder} />
      </Box>
    )
  return (
    <Box objectFit={'cover'} borderRadius={'lg'} {...rest}>
      <NextImage src={src} alt={alt} placeholder={placeholder} layout={'fixed'} width={w} height={h} />
    </Box>
  )
}

export default ChakraNextImage

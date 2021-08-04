import { Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react'

const SectionText = ({ heading, text }) => {
  return (
    <Flex flexDir={'column'} alignItems={'center'} maxW={'800px'} mx={'auto'} p={10} textAlign={'center'}>
      {heading && <Heading>{heading}</Heading>}
      <Text as={'p'} mt={5} color={useColorModeValue('light', 'dark')} fontSize={'md'}>
        {text}
      </Text>
    </Flex>
  )
}

export default SectionText

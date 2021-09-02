import { CheckIcon } from '@chakra-ui/icons'
import { Box, Button, Heading, HStack, Image, List, ListIcon, ListItem, Stack, Text, VStack } from '@chakra-ui/react'
import { string_to_slug } from '../utils'

const Wrapper = ({ title, subtitle, img, link = '404' }) => {
  return (
    <Box
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={'gray.500'}
      borderRadius={'xl'}
    >
      <Box py={4} px={12} bg={'dark'} borderTopRadius={'xl'}>
        {/* <Text fontWeight="500" fontSize="2xl">
          {title}
        </Text> */}
        <HStack justifyContent="center">
          {/* <Text fontSize="5xl" fontWeight="900">
            {subtitle}
          </Text> */}
          <Image src={img} alt={link} />
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
          <Button as={'a'} href={`/reports/${link}`} variant={'primary'}>
            View report
          </Button>
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
        <Wrapper img={'https://cdn.globaldairytrade.info/ps/static-ss4/img/primary-logo.20f4cce6.svg'} link={'gdt-2'} />
        <Wrapper img={'https://cdn.globaldairytrade.info/ps/static-ss4/img/primary-logo.20f4cce6.svg'} link={'gdt-3'} />
      </Stack>
    </Box>
  )
}

export default ReportsList

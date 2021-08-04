import { Box, Button, Center, Heading, Image, Stack, Text, useColorModeValue } from '@chakra-ui/react'

const Card = ({ img }) => {
  return (
    <Center py={12} mr={5}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('dark', 'light')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}
      >
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          h={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${img})`,
            filter: 'blur(15px)',
            zIndex: -1
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)'
            }
          }}
        >
          <Image rounded={'lg'} height={'230px'} width={'282px'} objectFit={'cover'} src={img} />
        </Box>
        <Stack pt={10}>
          <Heading color={'dark'} fontSize={'2xl'} fontWeight={'normal'}>
            Nice Chair, pink
          </Heading>
          <Text color={'dark'} fontSize={'sm'} my={5}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, expedita?
          </Text>
          <Stack direction={'row'} align={'center'} justifyContent={'center'}>
            <Button as={'a'} href={'/product-detail'} variant={'primary'} my={5}>
              More information
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Center>
  )
}

export default Card
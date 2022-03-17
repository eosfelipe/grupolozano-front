import { Box, Button, Center, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { stringToSlug } from '../utils'

const Card = ({ img, name }) => {
  return (
    <Center py={12} mr={5}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={'light'}
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
            {name.length < 20 ? name : <Text fontSize={'xl'}>{name}</Text>}
          </Heading>
          {/* <Text color={'dark'} fontSize={'sm'} my={5}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, expedita?
          </Text> */}
          <Stack direction={'row'} align={'center'} justifyContent={'center'}>
            <Button as={'a'} href={`/products-services`} variant={'primary'} my={5}>
              More information
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Center>
  )
}

export default Card

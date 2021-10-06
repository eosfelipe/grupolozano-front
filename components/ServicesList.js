import { AddIcon } from '@chakra-ui/icons'
import { Box, Flex, Icon, SimpleGrid, Stack, Text } from '@chakra-ui/react'

const dataServices = [
  {
    id: 1,
    title: 'Servicios aduanales exclusivos',
    text: 'Movilizamos tu mercado local.',
    icon: AddIcon
  },
  {
    id: 2,
    title: 'Representante de empresas extranjeras en el sector alimenticio',
    text: 'Somos tu representante si deseas importar.',
    icon: AddIcon
  },
  {
    id: 3,
    title: 'Ventas menudeo',
    text: 'Si eres un emprendedor en este mercado, te apoyamos y asesoramos.',
    icon: AddIcon
  },
  {
    id: 4,
    title: 'Asesoría',
    text: 'Asesoría especializada a nuestros clientes, en la importación de Productos.',
    icon: AddIcon
  },
  {
    id: 5,
    title: 'Trámites',
    text: 'Tramites ante dependencias gubernamentales para la importación.',
    icon: AddIcon
  }
]

const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex w={16} h={16} align={'center'} justify={'center'} color={'light'} rounded={'full'} bg={'highlight'} mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={'bold'}>{title}</Text>
      <Text color={'dark'}>{text}</Text>
    </Stack>
  )
}

const ServicesList = () => {
  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {dataServices.map(data => (
          <Feature key={data.id} icon={<Icon as={AddIcon} w={10} h={10} />} title={data.title} text={data.text} />
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default ServicesList

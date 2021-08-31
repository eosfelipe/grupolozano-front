import { Heading, Box, Input, Stack, Text, Textarea, useToast, Button } from '@chakra-ui/react'
import { useFormik } from 'formik'
import * as yup from 'yup'

const sleep = ms => new Promise(r => setTimeout(r, ms))

const FormContact = () => {
  const toast = useToast()
  const initialValues = {
    name: '',
    subject: '',
    email: '',
    message: ''
  }

  const formik = useFormik({
    initialValues,
    validationSchema: yup.object({
      name: yup.string().required('Required'),
      subject: yup.string().required('Required'),
      email: yup.string().email('Invalid email address').required('Required'),
      message: yup.string().max(255, 'Must be 255 characters or less').required('Required')
    }),
    onSubmit: values => {
      sendSubscribe(values)
    }
  })

  const sendSubscribe = async values => {
    await sleep(3000) // TODO fetch to php
    formik.resetForm()
    formik.setSubmitting(false)
    toast({
      title: values.email,
      description: 'Thanks for your subscription 🍕😁',
      status: 'success',
      duration: 5000,
      position: 'top-right',
      isClosable: true
    })
  }

  return (
    <Stack
      bg={'gray.50'}
      rounded={'xl'}
      p={{ base: 4, sm: 6, md: 8 }}
      spacing={{ base: 8 }}
      maxW={{ lg: 'lg' }}
      boxShadow={'xl'}
    >
      <Stack spacing={4}>
        <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
          Contáctanos y pide más información sobre lo que nosotros hacemos, manda un correo electrónico o bien llena el
          formulario y nosotros nos comunicaremos contigo, cuéntanos un poco más sobre tí.
        </Text>
      </Stack>
      <Box as={'form'} mt={10} onSubmit={formik.handleSubmit}>
        <Stack spacing={4}>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder={'Your name'}
            bg={'gray.100'}
            onChange={formik.handleChange}
            value={formik.values.name}
            border={0}
            outline={'none'}
            color={'gray.500'}
            _placeholder={{
              color: 'gray.500'
            }}
            _focus={{
              zIndex: 1,
              borderColor: 'highlight',
              boxShadow: '0 0 0 1px #d01f28'
            }}
          />
          {formik.touched.name && formik.errors.name ? (
            <Text fontSize={'xs'} color={'highlight'}>
              {formik.errors.name}
            </Text>
          ) : null}
          <Input
            id="subject"
            name="subject"
            type="text"
            placeholder={'Subject'}
            bg={'gray.100'}
            onChange={formik.handleChange}
            value={formik.values.subject}
            border={0}
            outline={'none'}
            color={'gray.500'}
            _placeholder={{
              color: 'gray.500'
            }}
            _focus={{
              zIndex: 1,
              borderColor: 'highlight',
              boxShadow: '0 0 0 1px #d01f28'
            }}
          />
          {formik.touched.subject && formik.errors.subject ? (
            <Text fontSize={'xs'} color={'highlight'}>
              {formik.errors.subject}
            </Text>
          ) : null}
          <Input
            id="email"
            name="email"
            type="email"
            placeholder={'Your email address'}
            bg={'gray.100'}
            onChange={formik.handleChange}
            value={formik.values.email}
            border={0}
            outline={'none'}
            color={'gray.500'}
            _placeholder={{
              color: 'gray.500'
            }}
            _focus={{
              zIndex: 1,
              borderColor: 'highlight',
              boxShadow: '0 0 0 1px #d01f28'
            }}
          />
          {formik.touched.email && formik.errors.email ? (
            <Text fontSize={'xs'} color={'highlight'}>
              {formik.errors.email}
            </Text>
          ) : null}
          <Textarea
            id="message"
            name="message"
            placeholder={'Message...'}
            bg={'gray.100'}
            onChange={formik.handleChange}
            value={formik.values.message}
            border={0}
            outline={'none'}
            color={'gray.500'}
            minH={'150px'}
            _placeholder={{
              color: 'gray.500'
            }}
            _focus={{
              zIndex: 1,
              borderColor: 'highlight',
              boxShadow: '0 0 0 1px #d01f28'
            }}
          />
          {formik.touched.message && formik.errors.message ? (
            <Text fontSize={'xs'} color={'highlight'}>
              {formik.errors.message}
            </Text>
          ) : null}
        </Stack>
        <Button
          type={'submit'}
          mt={8}
          w={'full'}
          bgGradient="linear(to-r, rgba(190,31,40,1) 10%, rgba(208,31,40,1) 100%)"
          color={'light'}
          _hover={{
            bgGradient: 'linear(to-r, rgba(190,31,40,1) 10%, rgba(208,31,40,1) 100%)',
            boxShadow: 'xl'
          }}
          aria-label="Submit"
          disabled={formik.isSubmitting}
        >
          Submit
        </Button>
      </Box>
    </Stack>
  )
}

export default FormContact

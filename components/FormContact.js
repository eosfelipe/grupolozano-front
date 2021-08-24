import { IconButton, Input, Stack, Text, Textarea, useColorModeValue, useToast } from '@chakra-ui/react'
import { darken, mode, whiten } from '@chakra-ui/theme-tools'
import { EmailIcon } from '@chakra-ui/icons'
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
    await sleep(3000)
    formik.resetForm()
    formik.setSubmitting(false)
    toast({
      title: values.email,
      description: 'Thanks for your subscription 🍕😁',
      status: 'success',
      duration: 5000,
      position: 'bottom',
      isClosable: true
    })
  }

  return (
    <>
      <Stack
        as={'form'}
        direction={'column'}
        onSubmit={formik.handleSubmit}
        width={'100%'}
        bg={'dark'}
        p={8}
        rounded={'md'}
        boxShadow={'lg'}
        minH={'500px'}
      >
        <Input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
          fontWeight={'light'}
          fontSize={'sm'}
          placeholder={'Your name'}
          bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
          border={0}
          _focus={{
            bg: 'whiteAlpha.300'
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
          onChange={formik.handleChange}
          value={formik.values.subject}
          fontWeight={'light'}
          fontSize={'sm'}
          placeholder={'Subject'}
          bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
          border={0}
          _focus={{
            bg: 'whiteAlpha.300'
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
          onChange={formik.handleChange}
          value={formik.values.email}
          fontWeight={'light'}
          fontSize={'sm'}
          placeholder={'Your email address'}
          bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
          border={0}
          _focus={{
            bg: 'whiteAlpha.300'
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
          value={formik.values.message}
          onChange={formik.handleChange}
          fontWeight={'light'}
          fontSize={'sm'}
          placeholder="Message"
          size="sm"
          bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
          border={0}
          _focus={{
            bg: 'whiteAlpha.300'
          }}
        />
        {formik.touched.message && formik.errors.message ? (
          <Text fontSize={'xs'} color={'highlight'}>
            {formik.errors.message}
          </Text>
        ) : null}
        <IconButton
          type={'submit'}
          bg={'highlight'}
          color={'light'}
          _hover={{
            bg: mode(darken('highlight', 20), whiten('highlight', 20))
          }}
          aria-label="Subscribe"
          icon={<EmailIcon />}
          disabled={formik.isSubmitting}
        />
      </Stack>
    </>
  )
}

export default FormContact

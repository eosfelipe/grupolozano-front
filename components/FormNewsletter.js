import { IconButton, Input, Stack, Text, Textarea, useColorModeValue, useToast } from '@chakra-ui/react'
import { darken, mode, whiten } from '@chakra-ui/theme-tools'
import { EmailIcon } from '@chakra-ui/icons'
import { useFormik } from 'formik'
import * as yup from 'yup'

const sleep = ms => new Promise(r => setTimeout(r, ms))

const FormNewsletter = () => {
  const toast = useToast()
  const initialValues = {
    email: ''
  }

  const formik = useFormik({
    initialValues,
    validationSchema: yup.object({
      email: yup.string().email('Invalid email address').required('Required')
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
      <Stack as={'form'} direction={'column'} onSubmit={formik.handleSubmit} width={'100%'}>
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

export default FormNewsletter

import {
  Editable,
  EditablePreview,
  EditableTextarea,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Box,
  Button,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

const Mailform = () => {
  return (
    <div>
      <FormControl isRequired>
        <FormLabel>Email address</FormLabel>
        <Input type="email" placeholder="anders@anderson.com" />
        <FormHelperText>We will never share your email.</FormHelperText>
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Name</FormLabel>
        <Input type="name" placeholder="Anders Andersson" width="200px" />
        <FormHelperText></FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel>Contents</FormLabel>
        <Editable
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          borderRadius="lg"
          defaultValue="Input a value"
        >
          <EditablePreview />
          <EditableTextarea />
        </Editable>
      </FormControl>
      <Box align="center" my={4}>
        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
          Send email
        </Button>
      </Box>
    </div>
  )
}

export default Mailform

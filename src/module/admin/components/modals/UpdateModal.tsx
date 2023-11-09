import { Button, ModalBody, ModalFooter } from '@chakra-ui/react'
import React from 'react'

const UpdateModal = ({ bookId }: { bookId: string }) => {
  return (
    <div>
      <ModalBody>
        update{bookId}
      </ModalBody>
      <ModalFooter>
        <Button colorScheme='blue' >
          Close
        </Button>
        <Button variant='ghost'>Güncelle</Button>
      </ModalFooter>
    </div>
  )
}

export default UpdateModal
import { Button, Modal, ModalBody, ModalFooter, useDisclosure } from '@chakra-ui/react'
import axios from 'axios'
import React, { Suspense } from 'react'
import { MdDelete } from 'react-icons/md';
import { useGlobalContext } from '@/app/context';

const DeleteModal = ({ bookId, onClose }: { bookId: string, onClose: () => void }) => {
  const finalRef = React.useRef(null)
  const { openAlert, setOpenAlert } = useGlobalContext();
  console.log(openAlert)
  const handleDeleteBook = () => {
    axios.delete(`${process.env.NEXT_PUBLIC_BASE_URL}/api/book/delete/${bookId}`)
      .then(res => console.log(res.data))
    onClose()
  }
  console.log("deleteModal render ediliyor")
  return (
    <div>
      <ModalBody>
        delete{bookId}
      </ModalBody>
      <ModalFooter className='flex gap-5' >
        <Button size={'xs'} onClick={() => { onClose() }} colorScheme='blue' >
          Close
        </Button>
        <Button leftIcon={<MdDelete />} size={"xs"} onClick={handleDeleteBook} colorScheme='red' variant='solid'>Sil</Button>
      </ModalFooter>
    </div>
  )
}

export default DeleteModal
import { TableContainer, TableCaption, Thead, Table, Tbody, Th, Tr, Tfoot, Td, Button, useDisclosure } from '@chakra-ui/react'
import React, { SetStateAction, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/core/hooks'
import { fetchAllBooks } from '@/package/services/book/index'
import { MdOutlineModeEditOutline, MdDelete } from "react-icons/md"
import BookModal from './modals/BookModal'
import { modalContentControl } from '../slice/admin.modal.slice'

const AllBooks = () => {
    const dispatch = useAppDispatch();
    const { data } = useAppSelector(state => state.books)
    const [bookId, setBookId] = useState<any>("")

    //Modal control states
    const { isOpen, onOpen, onClose } = useDisclosure()

    useEffect(() => {
        dispatch(fetchAllBooks())
    }, [data])
    

    const handleDeleteModal = (id: String) => {
        setBookId(id)
        dispatch(modalContentControl("delete"))
        onOpen();
    }

    const handleUpdateModal = (id: String) => {
        setBookId(id)
        dispatch(modalContentControl("update"))
        onOpen();
    }

    return (
        <div>
            <BookModal bookId={bookId} isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
            <TableContainer fontSize={'xs'} >
                <Table variant='striped' colorScheme='teal'>
                    <Thead>
                        <Tr>
                            <Th>Book Name</Th>
                            <Th>Price</Th>
                            <Th>Düzenleme</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            data && data.map((item: any, key: any) => {
                                return (
                                    <Tr key={key}>
                                        <Td>{item.name}</Td>
                                        <Td>{item.price}</Td>
                                        <Td className='flex gap-5 items-center' >
                                            <Button onClick={() => handleUpdateModal(item.id)} size={'xs'} leftIcon={<MdOutlineModeEditOutline />} colorScheme='facebook' variant='solid'>
                                                Düzenle
                                            </Button>
                                            <Button onClick={() => handleDeleteModal(item.id)} size={'xs'} leftIcon={<MdDelete />} colorScheme='red' variant='solid'>
                                                Sil
                                            </Button>
                                        </Td>
                                    </Tr>
                                )
                            })
                        }

                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default AllBooks
import { TableContainer, TableCaption, Thead, Table, Tbody, Th, Tr, Tfoot, Td } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/core/hooks'
import { fetchAllBooks } from '@/package/services/book/index'


const AllBooks = () => {
    const dispatch = useAppDispatch();
    const { data } = useAppSelector(state => state.books)
    console.log(`${process.env.NEXT_PUBLIC_BASE_URL}/api/book/all`)

    useEffect(() => {
        dispatch(fetchAllBooks())
    }, [])

    console.log(data)
    return (
        <div>
            <TableContainer>
                <Table variant='striped' colorScheme='teal'>
                    <TableCaption>Imperial to metric conversion factors</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>To convert</Th>
                            <Th>into</Th>
                            <Th isNumeric>multiply by</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>inches</Td>
                            <Td>millimetres (mm)</Td>
                            <Td isNumeric>25.4</Td>
                        </Tr>
                        <Tr>
                            <Td>feet</Td>
                            <Td>centimetres (cm)</Td>
                            <Td isNumeric>30.48</Td>
                        </Tr>
                        <Tr>
                            <Td>yards</Td>
                            <Td>metres (m)</Td>
                            <Td isNumeric>0.91444</Td>
                        </Tr>
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th>To convert</Th>
                            <Th>into</Th>
                            <Th isNumeric>multiply by</Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
        </div>
    )
}

export default AllBooks
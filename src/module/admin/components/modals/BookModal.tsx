import {
    Modal,
    Button,
    ModalBody,
    ModalOverlay,
    Box,
    ModalHeader,
    ModalContent,
    ModalCloseButton,
    ModalFooter,
    useDisclosure
} from '@chakra-ui/react'
import dynamic from 'next/dynamic';
import React from 'react'
import { AdminModal } from '../../types'
import { useAppSelector } from '@/core/hooks'
import Loading from '@/package/components/Loading';
import UpdateModal from './UpdateModal';
import DeleteModal from './DeleteModal';


const BookModal = (props: AdminModal) => {
    const { modalContent } = useAppSelector(state => state.adminModal)
    const finalRef = React.useRef(null)
    console.log("bookModal render ediliyor")
    return (
        <>
            <Modal finalFocusRef={finalRef} isOpen={props.isOpen} onClose={props.onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{modalContent === "update" ? "Ürün Güncelleme" : "Ürün Silme"}</ModalHeader>
                    <ModalCloseButton />
                    {modalContent === "update" ? <UpdateModal bookId={props.bookId} /> : null}
                    {modalContent === "delete" ? <DeleteModal bookId={props.bookId} onClose={props.onClose} /> : null}
                </ModalContent>
            </Modal>
        </>
    )
}

export default React.memo(BookModal);
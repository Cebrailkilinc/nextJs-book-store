import { Button, Input, ModalBody, ModalFooter } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useLayoutEffect, useState } from 'react'

interface deneme {
  name: string;
  price: string | number,

}

const UpdateModal = ({ bookId }: { bookId: string }) => {

  const [book, setBook] = useState<deneme>({ name: "", price: "" })

  useEffect(() => {
    const getBookById = () => {
      axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/book/${bookId}`).then(res => {
        const updatedBook = {
          name: res.data.name,
          price: res.data.price
        };
        // Update the book state
        setBook(updatedBook);
      })
    }
    getBookById();
     
  }, [])

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Update the name in the book state
    setBook({ ...book, name: e.target.value });
  };
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const parsedValue = parseFloat(inputValue);
    // Update the name in the book state
    setBook({ ...book, price: !isNaN(parsedValue) || inputValue === '' ? parsedValue : book.price });
  };

 
  const handleUpdateBook = async () => {
    const updatedBook = {
      id: bookId,
      name: book.name,
      author: "cebrail",
      price: book.price
    };

    try {
      const response = await axios.put(`${process.env.NEXT_PUBLIC_BASE_URL}/api/book/update`, updatedBook);
      console.log(response.data); // Güncellenmiş ürün verisi
      return response.data;
    } catch (error) {
      console.error('Ürün güncelleme hatası:', error);
      throw error; // Hata durumunda isteği yukarı taşı
    }
  }
  
  return (
    <div>
      <ModalBody display={"flex"} flexDirection={"column"} gap={"10px"}>
        <div>
          <h6 className='text-xs'>Name</h6>
          <Input type='text' size={'xs'} onChange={handleNameChange
          } value={book.name} placeholder='Basic usage' />
        </div>
        <div>
          <h6 className='text-xs'>Price</h6>
          <Input onChange={handlePriceChange} value={book.price} type='text' size={'xs'} placeholder='Basic usage' />
        </div>
        <div>
          <h6 className='text-xs'>Name</h6>
          <Input size={'xs'} placeholder='Basic usage' />
        </div>
        <div>
          <h6 className='text-xs'>Name</h6>
          <Input size={'xs'} placeholder='Basic usage' />
        </div>
        <div>
          <h6 className='text-xs'>Name</h6>
          <Input size={'xs'} placeholder='Basic usage' />
        </div>
      </ModalBody>
      <ModalFooter>
        <Button size={'xs'} colorScheme='blue' >
          Close
        </Button>
        <Button size={'xs'} variant='ghost' onClick={() => handleUpdateBook()}>Güncelle</Button>
      </ModalFooter>
    </div>
  )
}

export default React.memo(UpdateModal);
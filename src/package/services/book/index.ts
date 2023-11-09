import { createAsyncThunk } from "@reduxjs/toolkit";
import BookService from "./BookService";


export const fetchAllBooks = createAsyncThunk('books/fetchAllBooks', async () => {
  const bookService = new BookService();
  const getAllBooks = await bookService.getAllBooks();
  return getAllBooks;
});

export const addNewBook = async (book: any) => {
  const bookService = new BookService();
  const addBookResponse = bookService.addBook(book);
  return addBookResponse;
};




import axios from "axios";
import IBookService from "./IBookService";
import { alertControl, messageControl } from "@/module/auth/slice/auth.slices";
import { useAppDispatch } from "@/core/hooks";

export default class BookService implements IBookService {

    async addBook(book: any){
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/book/add`, book)          
        return response;
    }

    async getAllBooks() {
        // get all books 
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/book/all`);
        return response.data;
    }
}


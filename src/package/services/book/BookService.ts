import axios from "axios";
import IBookService from "./IBookService";

export default class BookService implements IBookService {
    async getAllBooks() {
        // getAllBooks işlemini düzgün bir şekilde gerçekleştirin ve veriyi döndürün
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/book/all`); // URL'i doğru bir şekilde ayarlayın
        return response.data;
    }

    async getUser() {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
        return response.data;
    }
}

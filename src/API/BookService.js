import axios from "axios"

const BOOK_URL = "http://localhost:8000/books";

class BookService {
    static async getAll() {
        try {
            const response = await axios.get(BOOK_URL)
            console.log(response.data);
            return response.data
            
        } catch (error) {
            console.error('Ошибка при получении данных', error);
            
        }
    }
}

export default BookService;
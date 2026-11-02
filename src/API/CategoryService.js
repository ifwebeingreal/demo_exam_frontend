import axios from 'axios';

const CATEGORY_URL = 'http://localhost:8000/categories';


class CategoryService {
    static async getAll() {
        try {
            const response = await axios.get(CATEGORY_URL);
            console.log(response.data);
            return response.data
        } catch (error) {
            console.error("Ошибка при получении категорий", error);
            
        }
    }
}

export default CategoryService;
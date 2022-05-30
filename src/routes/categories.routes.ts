import { Router, Request, Response } from 'express'
import { v4 as uuidV4 } from 'uuid'
import { Category } from '../models/category'

const categoriesRoutes = Router()

const categories = []

categoriesRoutes.post('/', (request: Request, response: Response) => {
    const { name, description } = request.body;

    const category: Category = {
        id: uuidV4(),
        name, 
        description
    };

    categories.push(category);

    return response.status(201).json({ categories });
})

export { categoriesRoutes }
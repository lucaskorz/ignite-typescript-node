import { Router, Request, Response } from 'express'
import { CategoriesRepository } from '../repositories/CategoriesRepository';
import { PostgresCategoriesRepository } from '../repositories/PostgresCategoriesRepository';
import { CreateCategoryService } from '../services/CreateCategoryService';

const categoriesRoutes = Router();
const categoriesRepository = new PostgresCategoriesRepository();

categoriesRoutes.post('/', (request: Request, response: Response) => {
    const { name, description } = request.body;

    const createCategoryService = new CreateCategoryService(categoriesRepository)

    createCategoryService.execute({ name, description })

    return response.status(201).send();
})

categoriesRoutes.get("/", (request: Request, response: Response) => {
  const all = categoriesRepository.list();
  return response.status(200).json({ categories: all })
})

export { categoriesRoutes }

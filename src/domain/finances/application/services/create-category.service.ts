import { Injectable } from '@nestjs/common'
import { Category } from '../../enterprise/entities/category'
import { CategoriesRepository } from '../repositories/categories-repository'

type CreateCategoryServiceProps = {
  title: string
}

@Injectable()
export class CreateCategoryService {
  constructor(private categoryRepository: CategoriesRepository) {}

  async execute({ title }: CreateCategoryServiceProps): Promise<Category> {
    const category = new Category({
      title,
    })
    return this.categoryRepository.create(category)
  }
}

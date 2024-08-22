import { CategoriesRepository } from 'src/domain/finances/application/repositories/categories-repository'
import { Category } from 'src/domain/finances/enterprise/entities/category'

export class InMemoryCategoriesRepository implements CategoriesRepository {
  categories: Category[] = []

  constructor() {}

  async create(category: Category): Promise<Category> {
    this.categories.push(category)
    return category
  }
}

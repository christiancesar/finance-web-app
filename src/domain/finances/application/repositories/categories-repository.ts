import { Category } from '../../enterprise/entities/category'

export abstract class CategoriesRepository {
  abstract create(category: Category): Promise<Category>
}

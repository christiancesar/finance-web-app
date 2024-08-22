import { describe, beforeEach, it, expect } from 'vitest'
import { InMemoryCategoriesRepository } from 'test/repositories/in-memory-categories-repository'
import { CreateCategoryService } from './create-category.service'

let inMemoryCategoriesRepository: InMemoryCategoriesRepository
let sut: CreateCategoryService

describe('Create Category', () => {
  beforeEach(() => {
    inMemoryCategoriesRepository = new InMemoryCategoriesRepository()
    sut = new CreateCategoryService(inMemoryCategoriesRepository)
  })

  it('should create a category', async () => {
    const category = await sut.execute({ title: 'Saúde' })
    await sut.execute({ title: 'Combustivel' })
    await sut.execute({ title: 'Estudo' })

    expect(inMemoryCategoriesRepository.categories[0].title).toEqual(
      category.title,
    )
    expect(inMemoryCategoriesRepository.categories).toHaveLength(3)
  })
})

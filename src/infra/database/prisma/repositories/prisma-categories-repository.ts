import { CategoriesRepository } from 'src/domain/finances/application/repositories/categories-repository'
import { Category } from 'src/domain/finances/enterprise/entities/category'
import { PrismaCategoriesMapper } from '../mappers/prisma-categories-mapper'
import { PrismaService } from '../prisma.service'
import { Injectable } from '@nestjs/common'

@Injectable()
export class PrismaCategoriesRepository implements CategoriesRepository {
  constructor(private prisma: PrismaService) {}

  async create(raw: Category): Promise<Category> {
    const data = PrismaCategoriesMapper.toPrisma(raw)
    const category = await this.prisma.category.create({ data })

    return PrismaCategoriesMapper.toDomain(category)
  }
}

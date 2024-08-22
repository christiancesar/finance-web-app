import { Category as PrismaCategory } from '@prisma/client'
import { Category } from 'src/domain/finances/enterprise/entities/category'

export class PrismaCategoriesMapper {
  static toPrisma(raw: Category): PrismaCategory {
    return {
      id: raw.id,
      title: raw.title,
      imageUrl: raw.imageUrl,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
    }
  }

  static toDomain(raw: PrismaCategory): Category {
    return new Category({
      id: raw.id,
      title: raw.title,
      imageUrl: raw.imageUrl,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
    })
  }
}

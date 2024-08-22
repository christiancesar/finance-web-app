import { Entity } from 'src/core/entity'
type CategoryProps = {
  id?: string
  title: string
  imageUrl?: string
  createdAt?: Date
  updatedAt?: Date
}

export class Category extends Entity {
  title: string
  imageUrl?: string
  createdAt: Date
  updatedAt: Date

  constructor({ id, title, imageUrl, createdAt, updatedAt }: CategoryProps) {
    super(id)
    this.title = title
    this.imageUrl = imageUrl
    this.createdAt = createdAt ?? new Date()
    this.updatedAt = updatedAt
  }
}

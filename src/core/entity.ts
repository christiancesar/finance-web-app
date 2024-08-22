import { randomUUID } from 'node:crypto'

export class Entity {
  id: string

  constructor(id?: string) {
    this.id = id ?? randomUUID()
  }

  getId(): string {
    return this.id
  }
}

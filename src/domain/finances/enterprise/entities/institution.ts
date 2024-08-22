import { Entity } from 'src/core/entity'

type InstitutionsProps = {
  id?: string
  code: number
  name: string
  fullName: string
}

export class Institutions extends Entity {
  code: number
  name: string
  fullName: string

  constructor({ id, code, name, fullName }: InstitutionsProps) {
    super(id)
    this.code = code ?? 0
    this.name = name
    this.fullName = fullName
  }
}

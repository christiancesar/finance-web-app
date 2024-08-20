import { randomUUID } from 'node:crypto'
type InstitutionsProps = {
  id?: string
  code: number
  name: string
  fullName: string
}
export class Institutions {
  id: string
  code: number
  name: string
  fullName: string

  constructor({ id, code, name, fullName }: InstitutionsProps) {
    this.id = id ?? randomUUID()
    this.code = code ?? 0
    this.name = name
    this.fullName = fullName
  }
}

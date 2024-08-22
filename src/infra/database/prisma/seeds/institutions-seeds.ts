import { Institutions } from '../../../../domain/finances/enterprise/entities/Institution'
import fs from 'fs'
import { PrismaClient } from '@prisma/client'
import path from 'path'
type InstitutionsList = {
  code: number
  name: string
  fullName: string
}

export class InstitutionsSeeds {
  private prisma: PrismaClient
  constructor() {
    this.prisma = new PrismaClient({
      log: ['query', 'warn', 'error'],
    })
    this.prisma.$connect()
  }

  async execute() {
    const institutionsAlredyExists = await this.prisma.institution.findMany()
    if (institutionsAlredyExists.length > 0) {
      console.log('Institutions already seeded')
      return
    }

    const institutionsJson = fs.readFileSync(
      path.resolve(__dirname, './institutions-list.json'),
      {
        encoding: 'utf-8',
      },
    )

    const institutionsList = JSON.parse(institutionsJson) as InstitutionsList[]

    // eslint-disable-next-line
    const institutions = institutionsList.map((institution) => {
      if (institution.name && institution.fullName) {
        return new Institutions(institution)
      }
    })

    await this.prisma.institution.createMany({
      data: institutions,
    })

    console.log('Institutions seeded')
  }
}

new InstitutionsSeeds().execute()

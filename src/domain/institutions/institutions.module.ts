import { Module } from '@nestjs/common'
import { PrismaService } from 'src/infra/database/prisma/prisma.service'

@Module({
  imports: [],
  controllers: [],
  providers: [PrismaService],
  exports: [],
})
export class InstitutionsModule {}

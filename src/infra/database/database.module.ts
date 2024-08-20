import { Global, Module } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'
@Global()
@Module({
  imports: [PrismaService],
  exports: [PrismaService],
})
export class DatabaseModule {}

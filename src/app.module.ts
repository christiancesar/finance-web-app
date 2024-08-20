import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { InstitutionsModule } from './domain/institutions/institutions.module'

@Module({
  imports: [InstitutionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SavoryModule } from './savory/savory.module';

@Module({
  imports: [SavoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

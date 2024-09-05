import { Module } from '@nestjs/common';
import { SavoryService } from './savory.service';
import { SavoryController } from './savory.controller';

@Module({
  controllers: [SavoryController],
  providers: [SavoryService],
})
export class SavoryModule {}

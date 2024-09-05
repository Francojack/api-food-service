import { Test, TestingModule } from '@nestjs/testing';
import { SavoryController } from './savory.controller';
import { SavoryService } from './savory.service';

describe('SavoryController', () => {
  let controller: SavoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SavoryController],
      providers: [SavoryService],
    }).compile();

    controller = module.get<SavoryController>(SavoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

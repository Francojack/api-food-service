import { Test, TestingModule } from '@nestjs/testing';
import { SavoryService } from './savory.service';

describe('SavoryService', () => {
  let service: SavoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SavoryService],
    }).compile();

    service = module.get<SavoryService>(SavoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

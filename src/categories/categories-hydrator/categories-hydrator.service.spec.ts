import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesHydratorService } from './categories-hydrator.service';

describe('CategoriesHydratorService', () => {
  let service: CategoriesHydratorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoriesHydratorService],
    }).compile();

    service = module.get<CategoriesHydratorService>(CategoriesHydratorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

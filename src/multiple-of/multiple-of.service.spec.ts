import { Test, TestingModule } from '@nestjs/testing';
import { MultipleOfService } from './multiple-of.service';

describe('MultipleOfService', () => {
  let service: MultipleOfService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MultipleOfService],
    }).compile();

    service = module.get<MultipleOfService>(MultipleOfService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

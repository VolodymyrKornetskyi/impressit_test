import { Test, TestingModule } from '@nestjs/testing';
import { MultipleOfController } from './multiple-of.controller';
import { MultipleOfService } from './multiple-of.service';

describe('MultipleOfController', () => {
  let controller: MultipleOfController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MultipleOfController],
      providers: [MultipleOfService],
    }).compile();

    controller = module.get<MultipleOfController>(MultipleOfController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

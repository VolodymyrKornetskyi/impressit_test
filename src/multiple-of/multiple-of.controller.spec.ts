import { Test, TestingModule } from '@nestjs/testing';
import { MultipleOfController } from './multiple-of.controller';

describe('MultipleOfController', () => {
  let controller: MultipleOfController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MultipleOfController],
    }).compile();

    controller = module.get<MultipleOfController>(MultipleOfController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

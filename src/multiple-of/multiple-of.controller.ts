import { Controller, Get } from '@nestjs/common';
import { MultipleOfService } from './multiple-of.service';

@Controller('/get')
export class MultipleOfController {
  constructor(private readonly multipleOf: MultipleOfService) {}

  @Get()
  getMultipleOfThreeAndFive(): string {
    return this.multipleOf.getHello();
  }
}

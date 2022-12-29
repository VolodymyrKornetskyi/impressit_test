import { Module } from '@nestjs/common';
import { MultipleOfController } from './multiple-of.controller';
import { MultipleOfService } from './multiple-of.service';

@Module({
  controllers: [MultipleOfController],
  providers: [MultipleOfService],
})
export class MultipleOfModule {}

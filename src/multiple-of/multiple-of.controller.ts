import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { MultipleOfService } from './multiple-of.service';
import * as multipleOfCheckRules from './multiple-of-config.json';
import { MultipleOfCheckRule } from './models';

@Controller('/get')
export class MultipleOfController {
  private readonly rules: MultipleOfCheckRule[] = [];

  constructor(private readonly multipleOf: MultipleOfService) {
    this.rules =
      this.multipleOf.validateMultipleOfCheckRules(multipleOfCheckRules);
  }

  @Get()
  getMultipleOfThreeAndFive(@Query('value') originalValue: string): string {
    const value = parseInt(originalValue, 10);
    let response = '';

    try {
      for (const configItem of this.rules) {
        if (this.multipleOf.isNumberMultipleOf(value, configItem.multipleOf)) {
          response += configItem.ifYes;
        }
      }
    } catch (e) {
      console.error(
        '[MultipleOfController] Error in getMultipleOfThreeAndFive',
        e,
      );
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: "Provided value isn't correct number",
        },
        HttpStatus.BAD_REQUEST,
        {
          cause: e,
        },
      );
    }

    return response === '' ? value.toString() : response;
  }
}

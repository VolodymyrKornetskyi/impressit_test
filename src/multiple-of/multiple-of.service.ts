import { Injectable } from '@nestjs/common';
import { isNumber } from '../shared/helpers/numberHelpers';
import { MultipleOfCheckRule } from './models';

@Injectable()
export class MultipleOfService {
  isNumberMultipleOf(
    originalNumber: number,
    multipleOfNumber: number,
  ): boolean {
    if (!isNumber(originalNumber)) {
      throw new Error(
        `Provided value as originalNumber ${originalNumber} isn't proper number`,
      );
    }
    if (!isNumber(multipleOfNumber)) {
      throw new Error(
        `Provided value as multipleOfNumber ${multipleOfNumber} isn't proper number`,
      );
    }

    return originalNumber % multipleOfNumber === 0;
  }

  validateMultipleOfCheckRules(
    rulesFromFile: unknown[],
  ): MultipleOfCheckRule[] | never {
    try {
      if (!Array.isArray(rulesFromFile)) {
        throw new Error(
          `Rules configuration isn't array type. Please check: ${rulesFromFile}`,
        );
      }
      return rulesFromFile.map(
        ({ ifYes, multipleOf }: MultipleOfCheckRule): MultipleOfCheckRule => {
          if (typeof ifYes === 'string' && typeof multipleOf === 'number') {
            return { ifYes, multipleOf };
          }
          throw new Error(
            `Rules configuration is broken. Please check: ${rulesFromFile}`,
          );
        },
      );
    } catch (e) {
      console.error('[MultipleOfService] [validateMultipleOfCheckRules]', e);
      throw e;
    }
  }
}

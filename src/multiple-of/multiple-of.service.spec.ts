import { Test, TestingModule } from '@nestjs/testing';
import { MultipleOfService } from './multiple-of.service';
import {
  testConfigSuccessPass,
  testConfigErrorPass,
} from './__mocks__/multiple-of.mock';

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

  it('should check is Number multiple of another number', () => {
    testConfigSuccessPass.forEach((pass) => {
      expect(service.isNumberMultipleOf(pass.value1, pass.value2)).toBeTruthy();
    });
    testConfigErrorPass.forEach((pass) => {
      expect(service.isNumberMultipleOf(pass.value1, pass.value2)).toBeFalsy();
    });
  });

  it('should check error from isNumberMultipleOf if multipleOfNumber is wrong', () => {
    expect(() =>
      service.isNumberMultipleOf(123, 'd' as unknown as number),
    ).toThrowError("Provided value as multipleOfNumber d isn't proper number");
  });

  it('should check error from isNumberMultipleOf if originalNumber is wrong', () => {
    expect(() =>
      service.isNumberMultipleOf('12d3' as unknown as number, 123),
    ).toThrowError("Provided value as originalNumber 12d3 isn't proper number");
  });

  describe('Check rules validation', () => {
    it('should throw error if not array', () => {
      expect(() =>
        service.validateMultipleOfCheckRules({} as unknown as []),
      ).toThrowError(
        "Rules configuration isn't array type. Please check: [object Object]",
      );
    });

    it('should throw error if items in array are broken', () => {
      expect(() =>
        service.validateMultipleOfCheckRules([{ ifYes: 'asdas' }]),
      ).toThrowError(
        'Rules configuration is broken. Please check: [object Object]',
      );
    });

    it('should return rules if everything is ok', () => {
      const rules = [{ ifYes: 'asdas', multipleOf: 13 }];
      expect(service.validateMultipleOfCheckRules(rules)).toEqual(rules);
    });
  });
});

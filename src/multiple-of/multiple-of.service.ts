import { Injectable } from '@nestjs/common';

@Injectable()
export class MultipleOfService {
  getHello(): string {
    return 'GB';
  }
}

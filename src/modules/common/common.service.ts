import { Injectable } from '@nestjs/common';

@Injectable()
export class CommonService {
  getName() {
    return 'common module';
  }
}

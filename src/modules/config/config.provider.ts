import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class ConfigService {
  constructor(@Inject('CONFIG_OPTIONS') private readonly options) {
    console.log('inject options:', options);
  }
  getConfig() {
    return this.options;
  }
}

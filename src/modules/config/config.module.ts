import { Module, DynamicModule } from '@nestjs/common';
import { ConfigService } from './config.provider';

@Module({})
export class ConfigModule {
  static register(options: any): DynamicModule {
    return {
      module: ConfigModule,
      providers: [
        {
          provide: 'CONFIG_OPTIONS',
          useValue: options,
        },
        ConfigService,
      ],
      exports: [ConfigService],
    };
  }
}

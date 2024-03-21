import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from '../common/conmon.module';
import { ConfigModule } from '../config/config.module';
import { LoggerMiddleWare } from '../../middleware/logger';

@Module({
  imports: [CommonModule, ConfigModule.register({ forRoutes: '/test' })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleWare).forRoutes('/');
  }
}

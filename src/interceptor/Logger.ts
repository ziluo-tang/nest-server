import {
  NestInterceptor,
  Injectable,
  CallHandler,
  ExecutionContext,
} from '@nestjs/common';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    console.log('LoggerInterceptor: before request');
    return next
      .handle()
      .pipe(tap(() => console.log('LoggerInterceptor: after request')));
  }
}

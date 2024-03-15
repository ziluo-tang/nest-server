import { Inject, Injectable } from '@nestjs/common';
/**
 * 管道（验证管道）
 */
@Injectable()
export class AppService {
  getHello(name: string): string {
    return `hey! ${name}`;
  }
}

import { HttpException, HttpStatus } from '@nestjs/common';
/**
 * 自定义异常类
 */
export class ForbiddenException extends HttpException {
  constructor() {
    super('Forbidden', HttpStatus.FORBIDDEN);
  }
}

import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CommonService } from '../common/common.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly commonService: CommonService,
  ) {}
  @Get()
  render() {
    return 'hello, nestjs'
  }
    
  @Get('/user')
  getUser() {
    throw new HttpException(
      { status: HttpStatus.FORBIDDEN, message: 'error' },
      HttpStatus.EXPECTATION_FAILED,
    );
  }
  @Get(':id')
  getHello(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ): string {
    return `${this.appService.getHello(id.toString())}, ${this.commonService.getName()}`;
  }
}

import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  HttpStatus,
  HttpException,
  UseInterceptors,
  Inject
} from '@nestjs/common';
import { AppService } from './app.service';
import { CommonService } from '../common/common.service';
import { ConfigService } from '../config/config.provider'
import { LoggerInterceptor } from '../../interceptor/Logger'

@Controller()
@UseInterceptors(LoggerInterceptor)
export class AppController {
  @Inject(CommonService)
  private readonly commonService: CommonService;
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService,
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
    console.log(this.configService.getConfig())
    return `${this.appService.getHello(id.toString())}, ${this.commonService.getName()}`;
  }
}

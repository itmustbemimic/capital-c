import { Body, Controller, Get, Post } from '@nestjs/common';
import { scanTable, putGameResult, getGameResult } from './xxx.services';

@Controller('xxx')
export class XxxController {
  @Get()
  findAll() {
    return scanTable();
  }

  @Post()
  inputData(@Body() body) {
    return putGameResult(body);
  }

  @Get('test')
  test() {
    getGameResult();
    return 'hi';
  }
}

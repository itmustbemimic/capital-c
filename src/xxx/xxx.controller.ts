import { Body, Controller, Get, Post } from '@nestjs/common';
import { scanTable, putItem, getItem } from './xxx.services';

@Controller('xxx')
export class XxxController {
  @Get()
  findAll() {
    return scanTable();
  }

  @Post()
  inputData(@Body() body) {
    return putItem(body);
  }

  @Get('test')
  test() {
    getItem();
    return 'hi';
  }
}
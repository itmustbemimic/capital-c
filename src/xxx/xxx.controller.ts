import { Body, Controller, Get, Post } from '@nestjs/common';
import { scanTable, putGameResult, getGameResult, putPrivateSale } from "./xxx.services";

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

  @Post('ps')
  privateSale(@Body() body) {
    return putPrivateSale(body);
  }
}

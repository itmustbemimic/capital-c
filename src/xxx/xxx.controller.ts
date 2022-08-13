import { Controller, Get } from '@nestjs/common';
import { scanTable } from './xxx.services';

@Controller('xxx')
export class XxxController {
  @Get()
  findAll(): string {
    let result;
    scanTable().then((item) => {
      result = item;
    });

    return result;
  }
}

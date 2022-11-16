import { Controller, Body, Post } from '@nestjs/common';
import { putPrivateSale } from './private-sale.services';
import { ApiOperation } from "@nestjs/swagger";

@Controller('private-sale')
export class PrivateSaleController {
  @Post()
  @ApiOperation({ summary: 'private sale 입력', description: ''})
  privateSale(@Body() body) {
    return putPrivateSale(body);
  };
}

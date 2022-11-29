import { Controller, Body, Post, Res, HttpStatus } from "@nestjs/common";
import { putPrivateSale } from './private-sale.services';
import { ApiOperation } from '@nestjs/swagger';
import { CreatePrivateSaleDto } from './private-sale.dto';

@Controller('private-sale')
export class PrivateSaleController {
  @Post()
  @ApiOperation({
    summary: 'private sale 입력',
    description: '누가 사면 db에 저장',
  })
  privateSale(@Body() privateSaleDto: CreatePrivateSaleDto, @Res() res: Response) {
    const privateSale = putPrivateSale(privateSaleDto);

    return privateSale;
  }
}

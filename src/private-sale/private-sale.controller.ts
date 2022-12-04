import { Controller, Body, Post, Res, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreatePrivateSaleDto } from './private-sale.dto';
import { PrivateSaleService } from './private-sale.service';

@Controller('private-sale')
export class PrivateSaleController {
  constructor(private readonly privateSaleService: PrivateSaleService) {}

  @Post()
  @ApiOperation({
    summary: 'private sale 입력',
    description: '누가 사면 db에 저장',
  })
  createPrivateSale(@Body() privateSaleDto: CreatePrivateSaleDto, @Res() res) {
    return this.privateSaleService.create(privateSaleDto);
  }

  @Get('/:addr')
  @ApiOperation({
    summary: '구매 내역 보기',
    description: '유저 주소 입력하면 구매내역 나옴ㅁ',
  })
  getPrivateSale(@Param('addr') user_address: string) {
    return this.privateSaleService.getItems(user_address);
  }
}

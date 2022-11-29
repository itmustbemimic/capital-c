import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePrivateSaleDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    example: '80001',
    description: '네트워크 아이디',
    required: true,
  })
  readonly networkId: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '0xb123f6bf644Dadd44FE4Cb544aC0c4Dc917C4C63',
    description: '유저 지갑 주소',
    required: true,
  })
  readonly address: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'USDT',
    description: '받은 토큰 종류',
    required: true,
  })
  readonly currency: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    example: '1000',
    description: '받은 수량',
    required: true,
  })
  readonly investment: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    example: '5000',
    description: '줘야 될 네온 수량',
    required: true,
  })
  readonly neon: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '0xf837bcc883d23eb0f586dfdfa1fdbfdc0f39942a779d76d4f981e5ec8312aba8',
    description: '트랜잭션 ID',
    required: true,
  })
  readonly tx: string;

  // @IsString()
  // @ApiProperty({ description: '서버에서 자동 추가' })
  // readonly date: string;
}

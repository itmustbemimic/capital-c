import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { XxxController } from './xxx/xxx.controller';
import { PrivateSaleController } from './private-sale/private-sale.controller';
import { PrivateSaleService } from './private-sale/private-sale.service';

@Module({
  imports: [],
  controllers: [AppController, XxxController, PrivateSaleController],
  providers: [AppService, PrivateSaleService],
})
export class AppModule {}

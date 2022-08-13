import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { XxxController } from './xxx/xxx.controller';

@Module({
  imports: [],
  controllers: [AppController, XxxController],
  providers: [AppService],
})
export class AppModule {}

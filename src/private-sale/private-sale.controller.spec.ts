import { Test, TestingModule } from '@nestjs/testing';
import { PrivateSaleController } from './private-sale.controller';

describe('PrivateSaleController', () => {
  let controller: PrivateSaleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrivateSaleController],
    }).compile();

    controller = module.get<PrivateSaleController>(PrivateSaleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { ddbDocClient } from '../config/ddb/ddbDocClient';
import { PutCommand, ScanCommand } from '@aws-sdk/lib-dynamodb';
import { CreatePrivateSaleDto } from './private-sale.dto';
import { Injectable } from '@nestjs/common';

const privateSaleTable = 'private_sale2';

@Injectable()
export class PrivateSaleService {
  async create(privateSaleDto: CreatePrivateSaleDto) {
    const params = {
      TableName: privateSaleTable,
      Item: {
        networkId: privateSaleDto.networkId,
        address: privateSaleDto.address,
        currency: privateSaleDto.currency,
        investment: privateSaleDto.investment,
        neon: privateSaleDto.neon,
        tx: privateSaleDto.tx,
        date: new Date().toUTCString(),
      },
    };

    try {
      const data = await ddbDocClient.send(new PutCommand(params));
      console.log('put item success :: ', data);
      return true;
    } catch (err) {
      console.log('put item error :: ', err);
      return false;
    }
  }
}

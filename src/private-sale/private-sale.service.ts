import { ddbDocClient } from '../config/ddb/ddbDocClient';
import { GetCommand, PutCommand, QueryCommand, ScanCommand } from "@aws-sdk/lib-dynamodb";
import { CreatePrivateSaleDto } from './private-sale.dto';
import { Injectable } from '@nestjs/common';

import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

const dbclient = new DynamoDBClient({ region: 'ap-northeast-2' });

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
      return data;
    } catch (err) {
      console.log('put item error :: ', err);
      return err.$metadata;
    }
  }

  async getItems(user_address: string) {
    const params = {
      TableName: privateSaleTable,
      FilterExpression: 'address = :addr',
      ExpressionAttributeValues: {
        ':addr': user_address,
      },
    };

    try {
      const data = await ddbDocClient.send(new ScanCommand(params));
      console.log('get item success:: ', data);
      return data.Items;
    } catch (err) {
      console.log('get item error :: ', err);
      return err.$metadata;
    }
  }
}

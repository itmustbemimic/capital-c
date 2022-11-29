import { ddbDocClient } from '../config/ddb/ddbDocClient';
import { PutCommand, ScanCommand } from '@aws-sdk/lib-dynamodb';

const privateSaleTable = 'private_sale2';

export const putPrivateSale = async (body) => {
  const params = {
    TableName: privateSaleTable,
    Item: {
      networkId: body.networkId,
      address: body.address,
      currency: body.currency,
      investment: body.investment,
      neon: body.neon,
      tx: body.tx,
      date: new Date().toUTCString(),
    },
  };

  try {
    const data = await ddbDocClient.send(new PutCommand(params));
    console.log('put item success ::', data);
    return data;
  } catch (err) {
    console.log('put item error! :::', err);
    return err;
  }
};

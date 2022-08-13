import { ddbDocClient } from '../config/ddbDocClient';
import { ScanCommand } from '@aws-sdk/lib-dynamodb';

export const params = {
  TableName: 'history',
};

export const scanTable = async () => {
  try {
    const data = await ddbDocClient.send(new ScanCommand(params));
    console.log('success', data.Items);
  } catch (err) {
    console.error('Error! :::', err);
    console.log(process.env.REGION);
  }
};
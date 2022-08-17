import { ddbDocClient } from '../config/ddbDocClient';
import { PutCommand, ScanCommand } from '@aws-sdk/lib-dynamodb';

const tableName = 'history';

export const scanTable = async () => {
  try {
    const params = {
      TableName: tableName,
    };
    const data = await ddbDocClient.send(new ScanCommand(params));
    console.log('success', data.Items);
    return data.Items;
  } catch (err) {
    console.error('Error! :::', err);
  }

};

export const putItem = async (body) => {
  const params = {
    TableName: tableName,
    Item: {
      game: body.game, //게임이름
      date: new Date().toUTCString(), //시간
      bet: body.bet,
      choice: body.choice,
      payout: body.payout,
      player: body.player,
      result: body.result,
    },
  };

  try {
    const data = await ddbDocClient.send(new PutCommand(params));
    console.log('Success - item added or updated', data);
    return true;
  } catch (err) {
    console.error('Error! :::', err);
    return false;
  }
};

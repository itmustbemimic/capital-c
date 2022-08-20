import { ddbDocClient } from '../config/ddb/ddbDocClient';
import { PutCommand, ScanCommand } from '@aws-sdk/lib-dynamodb';
import Web3 from 'web3';
import AbiItem from 'web3-utils';
import _DiceJson from '../config/contracts/Dice.json';

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

export const getItem = async () => {
  const url = 'wss://ws-mumbai.matic.today/';
  //const provider = new Web3.providers.WebsocketProvider(url);
  const web3 = new Web3(url);
  console.log(web3.version);



  const DiceContract = new web3.eth.Contract(
    _DiceJson.abi as AbiItem[],
    _DiceJson.networks[80001].address,
  );

  const currentBlockNumber = await web3.eth.getBlockNumber();
  const options = {
    filter: {
      rollUnder: [],
    },
    fromBlock: currentBlockNumber,
  };

  DiceContract.events.BetPlaced(options).on('data', (event) => {
    const { betId, player, amount, rollUnder, choice, outcome, winAmount } =
      event.returnValues;
    const item = {
      game: 'dice',
      date: new Date().toUTCString(),
      bet: amount,
      choice: choice,
      payout: winAmount,
      player: player,
      result: outcome,
    };

    console.log(item);
  });
};

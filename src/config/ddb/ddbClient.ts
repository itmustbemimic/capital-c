import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { fromEnv } from '@aws-sdk/credential-providers';
import 'dotenv/config';

const REGION = process.env.REGION;
const ddbClient = new DynamoDBClient({
  region: REGION,
  credentials: fromEnv(),
});
export { ddbClient };

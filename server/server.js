const express = require("express");
const app = express();
require("dotenv").config();

const {
  DynamoDBClient,
  ListTablesCommand,
  PutItemCommand,
  GetItemCommand,
  ScanCommand,
} = require("@aws-sdk/client-dynamodb");

const client = new DynamoDBClient({
  region: "ap-south-1",
  credentials: {
    accessKeyId: "AKIA5FCD6WGKOK4Z7N4A",
    secretAccessKey: "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",
  },
});
const tableName = "StrikeTable1";
const allItems = [];

async function main(params) {
  // const putItemCommand = new PutItemCommand({
  //   TableName: "demo",
  //   Item: {
  //     serial_no: {
  //       S: "0001",
  //     },
  //     name: {
  //       S: "AJ",
  //     },
  //   },
  // });
  // await client.send(putItemCommand);

  //---------------get--------------------------

  // const getItemCommand = new GetItemCommand({
  //   TableName: "StrikeTable1",
  //   Key: {
  //     "Punch Id": { N: "7" },
  //   },
  // });

  // const responce = await client.send(getItemCommand);
  // console.log({
  //   items: responce.Item,
  // });

  let exclusiveStartKey = undefined;

  do {
    const scanParams = {
      TableName: tableName,
      ExclusiveStartKey: exclusiveStartKey,
    };

    const scanCommand = new ScanCommand(scanParams);

    try {
      const response = await client.send(scanCommand);
      allItems.push(...response.Items);
      exclusiveStartKey = response.LastEvaluatedKey;
    } catch (error) {
      console.error("Error scanning DynamoDB table:", error);
      break;
    }
  } while (exclusiveStartKey);

  return allItems;
}

(async () => {
  const allRecords = await main();
  console.log("All records:", allRecords);
  app.get("/userData", (req, res) => {
    res.json({ All_records: allRecords });
  });
})();

main().catch((err) => {
  console.log(err);
});

// const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3");
// const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

// const s3Client = new S3Client({
//   region: "ap-south-1",
//   credentials: {
//     accessKeyId: "AKIA5FCD6WGKFHALKCUM",
//     secretAccessKey: "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",
//   },
// });

// async function getObjectURL(key) {
//   const command = new GetObjectCommand({
//     Bucket: "strikesense-data",
//     Key: key,
//   });

//   const url = getSignedUrl(s3Client, command);
//   return url;
// }

// async function init() {
//   console.log("url", await getObjectURL("strike_sense_punch_data.csv"));
// }
// init();

app.listen(5000, () => {
  console.log("server started on port 5000");
});

const express = require("express");
const app = express();
const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

const s3Client = new S3Client({
  region: "ap-south-1",
  credentials: {
    accessKeyId: "AKIA5FCD6WGKFHALKCUM",
    secretAccessKey: "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",
  },
});

async function getObjectURL(key) {
  const command = new GetObjectCommand({
    Bucket: "strikesense-data",
    Key: key,
  });

  const url = getSignedUrl(s3Client, command);
  return url;
}

async function init() {
  console.log("url", await getObjectURL("strike_sense_punch_data.csv"));
}
init();

app.get("/api", (req, res) => {
  res.json({ users: ["userOne", "userTwo"] });
});
app.listen(5000, () => {
  console.log("server started on port 5000");
});

const awsIot = require("aws-iot-device-sdk");
const WebSocket = require("ws");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // Allow cross-origin requests

const server = require("http").createServer(app);
const wss = new WebSocket.Server({ server });

const device = awsIot.device({
  keyPath:
    "./Certs/70f532b4af9479f74a29297c222cfb1100a7f87351385b32c58ea59e32f25cfc-private.pem.key", // Path to your private key
  certPath:
    "./Certs/70f532b4af9479f74a29297c222cfb1100a7f87351385b32c58ea59e32f25cfc-certificate.pem.crt", // Path to your certificate
  caPath: "./Certs/AmazonRootCA1.pem", // AWS IoT Root CA
  clientId: "iotconsole-50d9f1c5-093b-4cea-a5de-d05a870a3fc0", // Unique Client ID
  host: "a2c52zdkyunxoy-ats.iot.ap-south-1.amazonaws.com", // Replace with your AWS IoT Core endpoint
});
// Connect to AWS IoT Core
device.on("connect", () => {
  console.log("Connected to AWS IoT Core");
  device.subscribe("$aws/things/Strike-sense/shadow/update"); // Subscribe to the topic
});

// Broadcast messages to connected WebSocket clients
device.on("message", (topic, payload) => {
  const message = payload.toString();
  console.log(`Received: ${message}`);

  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(message);
    }
  });
});

// WebSocket connection for React frontend
wss.on("connection", (ws) => {
  console.log("Client connected");
  ws.on("close", () => console.log("Client disconnected"));
});

// Start server
server.listen(5000, () => console.log("Server running on port 5000"));

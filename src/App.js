import { useEffect, useState } from "react";
import "./App.css";
import MainDash from "./components/MainDash/MainDash";

import PricingContainer from "./components/pricing-component/pricing-component-container";
import Cards from "./components/Cards/Cards";
import "./components/MainDash/MainDash.css";
import { addPunchData, getPunchData } from "./Data/Data";

const WS_URL = "wss://aws-production-4ef1.up.railway.app"; // Replace with actual WebSocket URL

function App() {
  const [message, setMessage] = useState("");
  const [socket, setSocket] = useState(null);
  const [punchData, setPunchData] = useState({});

  useEffect(() => {
    const ws = new WebSocket(WS_URL);
    setSocket(ws);

    ws.onopen = () => console.log("Connected to WebSocket");
    ws.onmessage = (event) => {
      try {
        const newData = JSON.parse(event.data); // Assuming the message is in JSON format
        setMessage(newData);
        const value = [
          newData.data["Punch power (N)"],
          newData.data["Punch Speed (km/h)"],
          newData.data["Reflex time (ms)"],
          newData.data["isblocked"],
          newData.data["timestamp"].substring(11, 19),
        ];
        addPunchData(newData.data.timestamp.substring(0, 11), value);
        setPunchData(getPunchData());
      } catch (error) {
        console.error("Error parsing WebSocket message", error);
      }

      ws.onclose = () => {
        console.log("WebSocket Disconnected");
      };

      ws.onerror = (error) => {
        console.error("WebSocket Error:", error);
      };

      // Cleanup function to close WebSocket when component unmounts
      return () => {
        ws.close();
      };
    };

    return () => ws.close();
  }, []);
  // console.log(punchData);

  return (
    <div>
      <div>
        {message ? (
          <div>
            <PricingContainer
              punch={[
                message.data["timestamp"].substring(0, 11),
                message.data["timestamp"].substring(11, 19),
                message.data["Punch power (N)"],
                message.data["Punch Speed (km/h)"],
                message.data["Reflex time (ms)"],
                message.data["isblocked"] === 0 ? "No" : "Yes",
              ]}
            ></PricingContainer>
            <div style={{ padding: "0px 150px 50px 150px" }}>
              <Cards
                punchData={punchData}
                currentPower={message.data["Punch power (N)"]}
                currentSpeed={message.data["Punch Speed (km/h)"]}
              />
            </div>
          </div>
        ) : (
          <p>Waiting for data...</p>
        )}
      </div>
    </div>
  );
}

export default App;

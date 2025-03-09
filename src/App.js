import { useEffect, useState } from "react";
import "./App.css";
import MainDash from "./components/MainDash/MainDash";
import RightSide from "./components/RigtSide/RightSide";
import Sidebar from "./components/Sidebar";
import useWebSocket from "react-use-websocket";
const styles = {
  heading: {
    fontSize: "48px", // Large font size
    fontWeight: "bold", // Bold text
    color: "#333", // Dark gray color
    textAlign: "center", // Center alignment
    margin: "20px 0", // Top and bottom spacing
  },
  subText: {
    fontSize: "24px", // Medium font
    color: "#555", // Lighter gray
    textAlign: "center",
  },
};

function App() {
  const [message, setMessage] = useState(null);

  const [punchData, setPunchData] = useState({});

  const updateObject = (key, value) => {
    if (punchData.hasOwnProperty(key)) {
      setPunchData((prevData) => ({
        [key]: [...prevData[key], value],
      }));
    } else {
      setPunchData((currentState) => {
        return { ...currentState, [key]: [value] };
      });
    }
  };

  console.log(punchData);

  // Connect to WebSocket server
  useWebSocket("ws://localhost:5000", {
    onMessage: (event) => {
      JSON.parse(event.data);
      setMessage(JSON.parse(event.data)); // Parse incoming JSON data
      if (message) {
        const value = [
          message.data["Punch power (N)"],
          message.data["Punch Speed (km/h)"],
          message.data["Reflex time (ms)"],
          message.data["isblocked"],
          message.data["timestamp"].substring(11, 19),
        ];
        updateObject(message.data.timestamp.substring(0, 11), value);
      }
    },
  });

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>IoT Dashboard</h1>
      <h2>Received Data:</h2>
      {message ? (
        <pre
          style={{ background: "#ddd", padding: "10px", borderRadius: "5px" }}
        >
          <p style={styles.heading}>
            Date: {message.data["timestamp"].substring(0, 11)}
          </p>
          <p style={styles.heading}>
            Time: {message.data["timestamp"].substring(11, 19)}
          </p>
          <p style={styles.heading}>
            Punch Power: {message.data["Punch power (N)"]}
          </p>
          <p style={styles.heading}>
            Punch Speed:{message.data["Punch Speed (km/h)"]}
          </p>
          <p style={styles.heading}>
            Reflex Time: {message.data["Reflex time (ms)"]}
          </p>
          <p style={styles.heading}>
            Was Blocked: {message.data["isblocked"] === 0 ? "No" : "Yes"}
          </p>
        </pre>
      ) : (
        <p>Waiting for data...</p>
      )}
    </div>
  );

  // return (
  //   <div className="App">
  //     <div className="AppGlass">
  //       <Sidebar />
  //       <MainDash punchData={punchData} />
  //       <RightSide />
  //     </div>
  //   </div>
  // );
}

export default App;

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

const WS_URL = "wss://aws-production-4ef1.up.railway.app"; // Replace with actual WebSocket URL

function App() {
  const [message, setMessage] = useState("");
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const ws = new WebSocket(WS_URL);
    setSocket(ws);

    ws.onopen = () => console.log("Connected to WebSocket");
    ws.onmessage = (event) => setMessage(event.data);
    ws.onclose = () => console.log("WebSocket Disconnected");

    return () => ws.close();
  }, []);

  const sendMessage = () => {
    if (socket) socket.send("Hello from React!");
  };

  return (
    <div>
      <h1>WebSocket Message: {message}</h1>
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
}

export default App;

//-------------------------------------------------------------------------

// function App() {
//   const [message, setMessage] = useState(null);

//   const [punchData, setPunchData] = useState({});

//   const updateObject = (key, value) => {
//     if (punchData.hasOwnProperty(key)) {
//       setPunchData((prevData) => ({
//         [key]: [...prevData[key], value],
//       }));
//     } else {
//       setPunchData((currentState) => {
//         return { ...currentState, [key]: [value] };
//       });
//     }
//   };

//   console.log(punchData);

//   // Connect to WebSocket server
//   useWebSocket("ws://localhost:5000", {
//     onMessage: (event) => {
//       JSON.parse(event.data);
//       setMessage(JSON.parse(event.data)); // Parse incoming JSON data
//       if (message) {
//         const value = [
//           message.data["Punch power (N)"],
//           message.data["Punch Speed (km/h)"],
//           message.data["Reflex time (ms)"],
//           message.data["isblocked"],
//           message.data["timestamp"].substring(11, 19),
//         ];
//         updateObject(message.data.timestamp.substring(0, 11), value);
//       }
//     },
//   });

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>IoT Dashboard</h1>
//       <h2>Received Data:</h2>
//       {message ? (
//         <pre
//           style={{ background: "#ddd", padding: "10px", borderRadius: "5px" }}
//         >
//           <p style={styles.heading}>
//             Date: {message.data["timestamp"].substring(0, 11)}
//           </p>
//           <p style={styles.heading}>
//             Time: {message.data["timestamp"].substring(11, 19)}
//           </p>
//           <p style={styles.heading}>
//             Punch Power: {message.data["Punch power (N)"]}
//           </p>
//           <p style={styles.heading}>
//             Punch Speed:{message.data["Punch Speed (km/h)"]}
//           </p>
//           <p style={styles.heading}>
//             Reflex Time: {message.data["Reflex time (ms)"]}
//           </p>
//           <p style={styles.heading}>
//             Was Blocked: {message.data["isblocked"] === 0 ? "No" : "Yes"}
//           </p>
//         </pre>
//       ) : (
//         <p>Waiting for data...</p>
//       )}
//     </div>
//   );

//   // return (
//   //   <div className="App">
//   //     <div className="AppGlass">
//   //       <Sidebar />
//   //       <MainDash punchData={punchData} />
//   //       <RightSide />
//   //     </div>
//   //   </div>
//   // );
// }

// export default App;

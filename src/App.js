import { useEffect, useState } from "react";
import "./App.css";
import MainDash from "./components/MainDash/MainDash";
import RightSide from "./components/RigtSide/RightSide";
import Sidebar from "./components/Sidebar";
import useWebSocket from "react-use-websocket";

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

  // return (
  //   <div style={{ textAlign: "center", marginTop: "50px" }}>
  //     <h1>IoT Dashboard</h1>
  //     <h2>Received Data:</h2>
  //     {message ? (
  //       <pre
  //         style={{ background: "#ddd", padding: "10px", borderRadius: "5px" }}
  //       >
  //         {JSON.stringify(message, null, 2)}
  //       </pre>
  //     ) : (
  //       <p>Waiting for data...</p>
  //     )}
  //   </div>
  // );
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <MainDash punchData={punchData} />
        <RightSide />
      </div>
    </div>
  );
}

export default App;

// function App() {
//   const [backendData, setBackendData] = useState([{}]);

//   useEffect(() => {
//     fetch("/userData")
//       .then((res) => res.json())
//       .then((data) => {
//         const records = data.All_records;
//         for (const [key, value] of Object.entries(records)) {
//           const mainKey = value.timestamp.S.substring(0, 11);
//           const data = [];
//           data.push(value["Punch Speed (km/h)"].N);
//           data.push(value["Punch Speed (km/h)"].N);
//           data.push(value["Punch Id"].N);
//           data.push(value["Punch Id"].N);
//           punchData[mainKey] = data;
//         }
//         console.log(punchData);
//       });
//   }, []);

//   return (
//     <div className="App">
//       <div className="AppGlass">
//         <Sidebar />
//         <MainDash />
//         <RightSide />
//       </div>
//     </div>
//   );
// }

// export default App;

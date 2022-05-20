import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    const consultaAPI = async () => {
      const { data } = await axios.get("/v1/api/hi", {
        "Content-Type": "application/json",
      });
      setData(data);
    };

    consultaAPI();
  }, []);

  return (
    <div className="App">
      <header className="App-header">Hello:</header>
      <header className="App-header">{data}</header>
    </div>
  );
}

export default App;

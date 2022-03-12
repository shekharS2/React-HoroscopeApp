import "./styles.css";
import Home from "./components/Home.jsx";
import { useEffect, useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sign, setSign] = useState("");
  const [day, setDay] = useState("");
  const [data, setData] = useState({});

  let propsObj = {
    name,
    setName,
    email,
    setEmail,
    sign,
    setSign,
    day,
    setDay
  };

  return (
    <div className="App">
      <label>Test</label>
      <Home propsObj={propsObj} />
    </div>
  );
}

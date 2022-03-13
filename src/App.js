import "./styles.css";
import Home from "./components/Home.jsx";
import Result from "./components/Result.jsx";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from "./imgs/logo.jpg";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sign, setSign] = useState("");
  const [day, setDay] = useState("");
  const [data, setData] = useState({
    
    });

  let propsObj = {
    name,
    setName,
    email,
    setEmail,
    sign,
    setSign,
    day,
    setDay,
    setData
  };

  return (
    <Router>
      <div className="App">
        <Link to="/">
        <img src={logo} height="60px" width="60px"></img>
        </Link>

        <Routes>
          <Route path="/horoscope" element={<Result data={data} day={day} name={name} email={email} sign={sign}/>}></Route>
          <Route path="/" element={<Home propsObj={propsObj}/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

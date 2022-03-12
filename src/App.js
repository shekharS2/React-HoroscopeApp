import "./styles.css";
import Home from "./components/Home.jsx";
import Result from "./components/Result.jsx";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sign, setSign] = useState("");
  const [day, setDay] = useState("");
  const [data, setData] = useState({ color: "TestRed" });

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
    // <Router>
    //   <div className="App">
    //     {/* <label>Test</label> */}
    //     <Switch>
    //       <Route path="/about">
    //         <Result data={data} />
    //       </Route>
    //       <Route path="/">
    //         <Home propsObj={propsObj} />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
    <div>
      <Home propsObj={propsObj} />
      <Result data={data} />
    </div>
  );
}

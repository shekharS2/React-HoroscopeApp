import "./styles.css";
import FormInputText from "./components/FormInputText.jsx";
import { useEffect, useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sign, setSign] = useState("");
  const [day, setDay] = useState("");
  const [data, setData] = useState({});
  const signs = [
    "aries",
    "taurus",
    "gemini",
    "cancer",
    "leo",
    "virgo",
    "libra",
    "scorpio",
    "sagittarius",
    "capricorn",
    "aquarius",
    "pisces"
  ];

  const days = ["yesterday", "today", "tomorrow"];

  let nameError = "";
  let emailError = "";
  let signError = "";
  let dayError = "";

  let handleName = (event) => {
    let tmp = event.target.value.toLowerCase();
    setName(tmp);
  };

  let handleEmail = (event) => {
    setEmail(event.target.value);
  };

  let handleSign = (event) => {
    let tmp = event.target.value.toLowerCase();
    setSign(tmp);
  };

  let handleDay = (event) => {
    let tmp = event.target.value.toLowerCase();
    setDay(tmp);
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    //   fetch(
    //     `https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${sign}&day=${day}`,
    //     {
    //       method: "POST",
    //       headers: {
    //         "x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
    //         "x-rapidapi-key": "efea65f3cdmshede39374287e8ccp1fdea2jsn96148723ceec"
    //       }
    //     }
    //   )
    //     .then((response) => response.json())
    //     .then((data) => {
    //       setData(data);
    //     })
    //     .catch((err) => {
    //       console.error(err);
    //     });
  };

  return (
    <div className="App">
      {name}
      <form onSubmit={handleSubmit}>
        <div class="inputFields">
          <FormInputText
            val={name}
            placeholder="Enter name"
            handleInput={handleName}
          />
          <div>{nameError}</div>

          <FormInputText
            val={email}
            placeholder="Enter email"
            handleInput={handleEmail}
          />
          <div>{emailError}</div>

          <FormInputText
            val={sign}
            placeholder="Enter horoscope sign"
            handleInput={handleSign}
          />
          <FormInputText
            val={day}
            placeholder="Enter day"
            handleInput={handleDay}
          />
        </div>
        <button onClick={() => {}}>Submit</button>
      </form>
    </div>
  );
}

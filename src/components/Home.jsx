import "../styles.css";
import FormInputText from "./FormInputText.jsx";

export default function (props) {
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
    props.propsObj.setName(tmp);
  };

  let handleEmail = (event) => {
    props.propsObj.setEmail(event.target.value);
  };

  let handleSign = (event) => {
    let tmp = event.target.value.toLowerCase();
    props.propsObj.setSign(tmp);
  };

  let handleDay = (event) => {
    let tmp = event.target.value.toLowerCase();
    props.propsObj.setDay(tmp);
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    // fetch(
    //   `https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${sign}&day=${day}`,
    //   {
    //     method: "POST",
    //     headers: {
    //       "x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
    //       "x-rapidapi-key": "efea65f3cdmshede39374287e8ccp1fdea2jsn96148723ceec"
    //     }
    //   }
    // )
    //   .then((response) => response.json())
    //   .then((data) => {
    //     props.propsObj.setData(data);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  };
  return (
    <div>
      {/* <h1>Test Home</h1>
      <h2>{props.propsObj.name}</h2> */}

      <form onSubmit={handleSubmit}>
        <div class="inputFields">
          <FormInputText
            val={props.propsObj.name}
            placeholder="Enter name"
            handleInput={handleName}
          />
          <div>{nameError}</div>

          <FormInputText
            val={props.propsObj.email}
            placeholder="Enter email"
            handleInput={handleEmail}
          />
          <div>{emailError}</div>

          <FormInputText
            val={props.propsObj.sign}
            placeholder="Enter horoscope sign"
            handleInput={handleSign}
          />
          <FormInputText
            val={props.propsObj.day}
            placeholder="Enter day"
            handleInput={handleDay}
          />
        </div>
        <button onClick={() => {}}>Submit</button>
      </form>
    </div>
  );
}

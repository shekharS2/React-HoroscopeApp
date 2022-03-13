import { useState } from "react";
import "../styles.css";
import { useNavigate } from "react-router-dom";
import FormInputText from "./FormInputText.jsx";

export default function (props) {
  let navigate = useNavigate();
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

  let validateName = () => {
    let iChars = "!@#$%^&*()+=-[]\\\';,./{}|\":<>?";
    if(props.propsObj.name === ""){
      alert("'Name' field cannot be empty.");
      return false;
    }

    for (let i = 0; i < props.propsObj.name.length; i++){
      if (iChars.indexOf(props.propsObj.name.charAt(i)) != -1){
        alert("'Name' field cannot have special characters.");
        return false;
      }
    }
    return true;
  }

  let validateEmail = () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(props.propsObj.email)){
      return (true);
    }
    alert("You have entered an invalid email address!");
    return (false);
  }

  let validateSign = () => {
    if(signs.includes(props.propsObj.sign)){
      return true;
    }else{
      signError = "Invalid sign!";
      alert("Invalid Sign!");
      return false;
    }
  }

  let validateDay = () => {
    if(days.includes(props.propsObj.day)){
      return true;
    }else{
      signError = "Invalid sign.";
      alert("Invalid day! Choose from 'Yesterday', 'Today' and 'Tomorrow'");
      return false;
    }
  }

  let handleClick = (e) => {
    e.preventDefault();
    if(validateName() && validateEmail() && validateSign() && validateDay()){

      fetch(
        `https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${props.propsObj.sign}&day=${props.propsObj.day}`,
        {
          method: "POST",
          headers: {
            "x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
            "x-rapidapi-key": "efea65f3cdmshede39374287e8ccp1fdea2jsn96148723ceec"
          }
        }
      )
        .then((response) => response.json())
        .then((data) => {
          props.propsObj.setData(data);
        })
        .catch((err) => {
          console.error(err);
         });
         
      setTimeout(() => {navigate("/horoscope");}, 1500);

    }
  };
  return (
    <div>
      <form onSubmit={handleClick}>
        <div class="inputFields">
          <FormInputText
            type="name"
            val={props.propsObj.name}
            placeholder="Enter name"
            setName = {props.propsObj.setName}
            name = {props.propsObj.name}
            error = {nameError}
          />
          

          <FormInputText
            type="email"
            val={props.propsObj.email}
            placeholder="Enter email"
            setEmail = {props.propsObj.setEmail}
            email = {props.propsObj.email}
            error = {emailError}
          />

          <FormInputText
            type="sign"
            val={props.propsObj.sign}
            placeholder="Enter horoscope sign"
            setSign = {props.propsObj.setSign}
            sign = {props.propsObj.sign}
            error = {signError}
          />

          <FormInputText
            type="day"
            val={props.propsObj.day}
            placeholder="Enter day"
            setDay = {props.propsObj.setDay}
            day = {props.propsObj.day}
            error = {dayError}
          />

        </div>
        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
}

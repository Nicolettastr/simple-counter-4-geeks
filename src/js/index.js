//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import PropTypes from "prop-types";

let seconds = 0;
let startTimer = false;

const Counter = (props) => {

  const element = <FontAwesomeIcon icon={faClock} className="iconDetails" />;

  return (
    <>
      <div className="tempStruture">
        <div className="iconSection">
          <section className="first numDiv">{element}</section>
        </div>
        <div className="numberSection">
          <section className="second numDiv">{props.numberSix % 10}</section>
          <section className="third numDiv">{props.numberFive % 10}</section>
          <section className="fourth numDiv">{props.numberFour % 10}</section>
          <section className="fifth numDiv">{props.numberThree % 10}</section>
          <section className="sixth numDiv">{props.numberTwo % 10}</section>
          <section className="seventh numDiv">{props.numberOne % 10}</section>
        </div>
      </div>
      <div className="btnSection">
        <button className="btn" onClick={btnStart}>Start</button>
        <button className="btn" onClick={btnStop}>Stop</button>
        <button className="btn" onClick={btnContinue}>Continue</button>
        <button className="btn" onClick={btnReset}>Reset</button>
      </div>
    </>
  );
};

const btnReset = (event) => {
    startTimer = false;
    seconds = 0;
}

const btnStop = () => {
  startTimer = false;
}

const btnStart = (event) => {
  if(startTimer === false && seconds === 0) {
    startTimer = true
    event.currentTarget.classList.add('redBtn');
  }else if(startTimer && seconds != 0){
    startTimer = false;
    event.currentTarget.classList.remove('redBtn');
  }
}

const btnContinue= () => {
  if(startTimer === false && seconds != 0) {
    startTimer = true
  }else if(startTimer && seconds === 0){
    startTimer = false;
  }
}



Counter.propTypes = {
  numberSix: PropTypes.number,
  numberFive: PropTypes.number,
  numberFour: PropTypes.number,
  numberThree: PropTypes.number,
  numberTwo: PropTypes.number,
  numberOne: PropTypes.number,
};

setInterval(() => {
  const six = Math.floor(seconds / 100000);
  const five = Math.floor(seconds / 10000);
  const four = Math.floor(seconds / 1000);
  const three = Math.floor(seconds / 100);
  const two = Math.floor(seconds / 10);
  const one = Math.floor(seconds / 1);

  ReactDOM.render(
    <Counter
      numberOne={one}
      numberTwo={two}
      numberThree={three}
      numberFour={four}
      numberFive={five}
      numberSix={six}
    />,
    document.querySelector("#app")
  );

  if(startTimer){
    seconds++;
  }
  

}, 1000);

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import HelloFunctionalComponent from "./component/HelloComponent";
import StatefullComponent from "./container/StatefullComponent";
import YoutubeComp from "./component/YoutubeComp/YoutubeComp";
import Home from "./container/Home/Home";

// function HelloComponent() {
//   return <p>Hello Functional Component</p>;
// }
// diganti menjadi const
// merupakan Stateless Component

const HelloComponent = () => {
  return <p>Hello Functional Component</p>;
};

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

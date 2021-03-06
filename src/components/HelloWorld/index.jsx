import React from "react";
import { hot } from "react-hot-loader";
import "./styles.css";

import reactLogo from "../../assets/react.png";
import electronLogo from "../../assets/electron.png";
import webPackLogo from "../../assets/webpack.png";

const logos = [reactLogo, electronLogo, webPackLogo];

import Logo from "../Logo/index";
const renderLogos = logos.map((logo, index) => {
  return <Logo src={logo} key={index} />;
});

const HelloWorld = () => {
  return (
    <div className="helloWorld">
      <h1> Hello, World! </h1>
      {renderLogos}
    </div>
  );
};

export default hot(module)(HelloWorld);

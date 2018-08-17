import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const Logo = props => {
  return <img src={props.src} className="Logo" />;
};

Logo.propTypes = {
  src: PropTypes.string.isRequired
};

export default Logo;

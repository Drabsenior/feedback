import React from "react";
import PropTypes from "prop-types";
const Button = ({ children, version, isDisabled, type }) => {
  return (
    <button className={`btn btn-${version}`} type={type} disabled={isDisabled}>
      {children}
    </button>
  );
};
Button.defaultProps = {
  version: "primary",
  isDisabled: true,
  type: "button",
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  isDisabled: PropTypes.bool,
  type: PropTypes.string,
};

export default Button;

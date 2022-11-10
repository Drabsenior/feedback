import React from "react";
import PropTypes from "prop-types";
const Header = ({ text, bgcolor, colorz }) => {
  const headerStyle = {
    backgroundColor: bgcolor,
    color: colorz,
  };

  return (
    <header style={headerStyle}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
};
Header.defaultProps = {
  text: "Feedback UI",
  bgcolor: "rgba(0,0,0,0.4)",
  colorz: "#ffa695",
};
Header.propTypes = {
  text: PropTypes.string,
  bgcolor: PropTypes.string,
  colorz: PropTypes.string,
};

export default Header;

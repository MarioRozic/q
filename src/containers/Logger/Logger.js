import React from "react";
import PropTypes from "prop-types";

const Logger = (WrappedComponent) => (props) => {
  console.log(props.propsmessage, WrappedComponent.name);
  return <WrappedComponent {...props} />;
};

Logger.propTypes = {
  propsmessage: PropTypes.string.isRequired,
};

export default Logger;

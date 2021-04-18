import React from "react";

const Logger = (WrappedComponent) => (props) => {
  console.log(props.propsmessage, WrappedComponent.name);
  return <WrappedComponent {...props} />;
};

export default Logger;

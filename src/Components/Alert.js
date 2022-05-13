import React from 'react';
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
function Alert({ message, success }) {
  if (!message) {
    return null;
  }
  return (
    <div className={`Alert alert-${success ? "success" : "error"}`}>
      {message}
    </div>
  );
}

export default Alert;

Alert.defaultProps = {
  success: false,
};

Alert.PropType = {
  message: PropTypes.string.isRequired,
  success: PropTypes.bool,
};

import React from 'react';
import './error-indicator.css';

const ErrorIndicator = ({error}) => {
  return (
    <div className="error-box">
      <h4>Something wrong!</h4>
      <p>However, we caught the case.</p>
    </div>
  );
};

export default ErrorIndicator;

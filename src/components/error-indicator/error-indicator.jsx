import React from 'react';

import './error-indicator.scss';

const ErrorIndicator = ({ error: { message } }) => {
  return (
    <div className="error-box">
      <h4>{message || 'Something wrong!'}</h4>
      <p>However, we caught the case.</p>
    </div>
  );
};

export { ErrorIndicator };

import React, { ComponentProps } from 'react';

import './Spinner.css';

const Spinner: React.FC<ComponentProps<'div'>> = (props) => {
  return (
    <div id="container-spinner" {...props}>
      <div id="spinner" />
    </div>
  );
};

export default Spinner;

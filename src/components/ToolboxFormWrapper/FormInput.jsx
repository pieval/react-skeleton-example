/* eslint "react/forbid-prop-types":0 */
import React, { PropTypes } from 'react';
import Input from 'react-toolbox/lib/input';

const FormInput = (props) => {
  const { input, meta, ...otherProps } = props;
  return (
    <Input
      {...input}
      {...otherProps}
      error={meta.touched && meta.error}
    />
  );
};

// let them in object to be able to supports minor API changes (@see Redux-Form API to know details.)
FormInput.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
};

export default FormInput;

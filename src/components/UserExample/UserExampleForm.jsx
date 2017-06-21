import React, { PropTypes } from 'react';
import { Field } from 'redux-form';
import Button from 'react-toolbox/lib/button';
import ProgressBar from 'react-toolbox/lib/progress_bar';
import { empty } from '../../form_validations/validators';
import FormInput from '../ToolboxFormWrapper/FormInput';

const UserExampleForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="name"
        type="text"
        component={FormInput}
        label="Username"
        validate={empty}
      />
      { (submitting) ? <ProgressBar type="circular" mode="indeterminate" /> : null }
      <Button type="submit" raised primary disabled={pristine || submitting}>Send</Button>
      <Button type="button" raised disabled={pristine || submitting} onClick={reset}>Reset</Button>
    </form>
  );
};

UserExampleForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default UserExampleForm;

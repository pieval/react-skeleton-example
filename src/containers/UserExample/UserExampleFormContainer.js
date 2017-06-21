import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import UserExampleForm from '../../components/UserExample/UserExampleForm';
import { setUserNameForm } from '../../redux/modules/userExample';
import { alpha } from '../../form_validations/validators';

// TODO Dumb validation method need a complete validation module to be smart and reusable
// Here only to show that if an error object exist with props names as fileds name the are shown in error
const validate = (values) => {
  const errors = {};
  if (alpha(values.name)) {
    errors['name'] = alpha(values.name); /* eslint dot-notation: 0 */
  }
  return errors;
};

const ReduxForm = reduxForm({
  form: 'userDefinition',
  validate,
  onSubmit: (values, dispatch) => dispatch(setUserNameForm(values.name)),
})(UserExampleForm);

export default connect(
  state => ({
    initialValues: {
      name: state.user.nameForm,
    },
  }),
)(ReduxForm);

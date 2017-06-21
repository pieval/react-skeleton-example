import { connect } from 'react-redux';
import { resetError } from '../../redux/modules/error';
import Error from '../../components/Error';

export default connect(
  state => ({
    message: state.error.message,
  }),
  dispatch => ({
    onClose: () => dispatch(resetError()),
  }),
)(Error);

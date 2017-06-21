import { connect } from 'react-redux';
import User from '../../components/UserExample';
import { setUserNameSync, setUserNameAsync, setUserNameApi } from '../../redux/modules/userExample';

export default connect(
  state => ({
    nameForSync: state.user.nameForSync,
    nameForAsync: state.user.nameForAsync,
    nameApi: state.user.nameApi,
    nameForm: state.user.nameForm,
    isFetching: state.user.isFetching,
  }), // mapStateToProps
  dispatch => ({
    onChangeSync: name => dispatch(setUserNameSync(name)),
    onChangeAsync: name => dispatch(setUserNameAsync(name)),
    onChangeApi: () => dispatch(setUserNameApi()),
  }), // mapDispatchToProps
)(User);

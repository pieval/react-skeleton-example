import React, { PropTypes } from 'react';
import { Button } from 'react-toolbox/lib/button';
import ProgressBar from 'react-toolbox/lib/progress_bar';
import UserExampleForm from '../../containers/UserExample/UserExampleFormContainer';

const User = (props) => {
  const { nameForSync, nameForAsync, nameApi, nameForm, isFetching, onChangeSync, onChangeAsync, onChangeApi } = props;
  const onChangeSynchronous = event => onChangeSync(event.target.value);
  const onChangeASynchronous = event => onChangeAsync(event.target.value);
  return (
    <div>
      <div>
        <h1>Synchronized redux action</h1>
        <h2>Actual user name is {nameForSync}</h2>
        <p>Change are made syncronously in redux state</p>
        User name : <input type="text" name="username" value={nameForSync} onChange={onChangeSynchronous} />
      </div>
      <hr />
      <div>
        <h1>Async redux action</h1>
        <h2>Actual user name is {nameForAsync}</h2>
        <p>You may wait for a 1,5 seconds delay to see change appears.</p>
        User name : <input type="text" name="username" value={nameForAsync} onChange={onChangeASynchronous} />
      </div>
      <hr />
      <div>
        <h1>API redux action</h1>
        <h2>Actual user name is {nameApi}</h2>
        <p>Click on button to generate a new name calling the random API</p>
        {
          (isFetching) ? <ProgressBar type="circular" mode="indeterminate" />
          : <Button primary raised onClick={onChangeApi}>New Name</Button>
        }
      </div>
      <hr />
      <div>
        <h1>Redux-Form form</h1>
        <h2>Actual user name is {nameForm}</h2>
        <p>Free to fill input with your wanted name and submit it to server</p>
        <UserExampleForm />
      </div>
    </div>

  );
};

User.propTypes = {
  nameForSync: PropTypes.string.isRequired,
  nameForAsync: PropTypes.string.isRequired,
  nameApi: PropTypes.string.isRequired,
  nameForm: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  onChangeSync: PropTypes.func.isRequired,
  onChangeAsync: PropTypes.func.isRequired,
  onChangeApi: PropTypes.func.isRequired,
};

export default User;

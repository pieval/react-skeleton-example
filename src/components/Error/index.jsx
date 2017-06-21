import React, { PropTypes } from 'react';
import styles from './styles.css';

const Error = (props) => {
  const { message, onClose } = props;
  if (message) {
    return (
      <div className={styles.errorBox}>
        { message }
        <button className={styles.closeButton} onClick={onClose}>X</button>
      </div>
    );
  }
  return false;
};

Error.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Error;

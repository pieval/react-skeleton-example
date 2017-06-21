import React, { PropTypes } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './app.css';
import Error from '../../containers/Error';
import '../../app.global.css';

const App = (props) => {
  const { children } = props;
  return (
    <Grid>
      <Row>
        <Col xs={12}>
          {children}
          <Error />
        </Col>
      </Row>
    </Grid>
  );
};

App.propTypes = {
  children: PropTypes.element.isRequired,
};

export default App;

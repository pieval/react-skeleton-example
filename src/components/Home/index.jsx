import React from 'react';
import { Link } from 'react-router';
import '../../app.global.css';

export default () =>
  <div>
    Lets start this crazy project !
    <div>
      <Link to="/user">User</Link>
    </div>
  </div>;

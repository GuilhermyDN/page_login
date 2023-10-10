import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

ReactDOM.render(
  <Router> {/* Envolve o App com o BrowserRouter */}
    <App />
  </Router>,
  document.getElementById('root')
);

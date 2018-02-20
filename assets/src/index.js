import React from 'react';
import Main from './components/Main';
import ReactDOM from 'react-dom';

import '../scss/index.scss';

const App = () => {
  return (
    <Main />
  );
};

const element = document.getElementById('content');
ReactDOM.render(<App />, element);

document.body.classList.remove('loading');
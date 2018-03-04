import React from 'react';
import Main from './components/Main';
import ReactDOM from 'react-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Main />
  );
};

const element = document.getElementById('root');
ReactDOM.render(<App />, element);

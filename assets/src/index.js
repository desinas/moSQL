import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import convert from './reducers/convert';
import Main from './components/Main';

const store = createStore(convert);

const App = () => (
    <Provider store={store}>
      <Main />
    </Provider>
);

const element = document.getElementById('root');
ReactDOM.render(<App />, element);

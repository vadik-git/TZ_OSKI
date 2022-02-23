import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import setAuthToken from './setAuthToken';
import { store } from "./store";
import { Provider } from "react-redux";
import jwt from "jsonwebtoken";
import { LOGIN_USER } from './components/login/types';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

let token = localStorage.token;
if (token) {
  setAuthToken(token);
  const { name } = jwt.decode(token, { json: true });
  store.dispatch({
    type: LOGIN_USER,
    payload: name,
  });
}

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter basename={baseUrl}>
    <App />
  </BrowserRouter>
  </Provider>,
  rootElement);

registerServiceWorker();


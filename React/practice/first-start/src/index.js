import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Header } from './App';

const elem = <h2>Header</h2>;

//const elem = React.createElement('h2', {className: 'fff'}, 'Header');

const text = 'hi';

const struct = (
  <StrictMode>
    <App />
  </StrictMode>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  struct
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

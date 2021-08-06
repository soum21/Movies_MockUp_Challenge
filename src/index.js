import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import { CssBaseline } from '@material-ui/core';
import Loading from './app/components/loading';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.Suspense fallback={<Loading />}>
    <CssBaseline>
      <App />
    </CssBaseline>
  </React.Suspense>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

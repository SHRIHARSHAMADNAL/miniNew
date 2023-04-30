import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { combineReducers,createStore } from 'redux';
import { Provider } from 'react-redux';
import bankReducer from './redux/reducers/bankReducers'
import {
  BrowserRouter as Router
} from 'react-router-dom';
const reducers = combineReducers({
  bankDetails:bankReducer
})
const store = createStore(reducers,{})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
    <App />
    </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

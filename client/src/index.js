import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from 'react-router-dom';
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducers from './reducers/rootReducers';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <Router basename="/">
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);

serviceWorker.unregister();

/* eslint react/jsx-filename-extension: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  HashRouter as Router,
  Switch,
} from 'react-router-dom';
import PublicRoute from './components/PublicRoute';
import App from './components/App';
import Store from './stores';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={Store}>
    <Router>
      <Switch>
        <PublicRoute path="/" exact component={App} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
// Commented out for dev environment
// registerServiceWorker();

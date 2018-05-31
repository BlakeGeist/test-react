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
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Store from './stores';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={Store}>
    <Router>
      <Switch>
        <PublicRoute path="/" exact component={App} />
        <PublicRoute path="/page1" exact component={Page1} />
        <PublicRoute path="/page2" exact component={Page2} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
// Commented out for dev environment
// registerServiceWorker();

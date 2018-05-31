import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';

const PublicRoute = (props) => {
  const { component: Component } = props;
  return (
    <Route
      path={props.path}
      exact={props.exact}
      render={matchProps => (
        <div>
          <Header />
          <Component {...matchProps} />
          <Footer />
        </div>
    )}
    />
  );
};

PublicRoute.propTypes = {
  component: PropTypes.instanceOf(React.Component).isRequired,
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
};


export default connect()(PublicRoute);

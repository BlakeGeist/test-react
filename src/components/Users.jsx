import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { List } from 'immutable';
import { fakeApiCall } from '../actions';

class Users extends Component {
  constructor(props) {
    super(props);
    this.dispatch = props.dispatch;
    this.doApiCall = this.doApiCall.bind(this);
  }

  doApiCall() {
    this.dispatch(fakeApiCall());
  }

  render() {
    return (
      <div>
        <b><button href="#" onClick={this.doApiCall}>Fetch Users</button></b>
        <h2>Users</h2>
        {
          this.props.users.map((v, k) => {
            const name = `${v.name} (${v.email})`;
            return <div key={`user-${k + 1}`}>{name}</div>;
          })
        }
      </div>);
  }
}

Users.propTypes = {
  users: PropTypes.instanceOf(List).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    users: state.getIn(['MainReducer', 'users']),
  };
}

export default connect(mapStateToProps)(Users);

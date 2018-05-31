
import React from 'react';
import { connect } from 'react-redux';
import TestForm from './TestForm';

class TestFormPage extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values) {
    console.log(values.toJS());
    alert(JSON.stringify(values.toJS()));
  }

  render() {
    return (
      <div>
        <h2>Sign In</h2>
        <TestForm
          onSubmit={this.onSubmit}
        />
      </div>);
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(TestFormPage);

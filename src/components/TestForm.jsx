import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import PropTypes from 'prop-types';
import InputControl from '../formComponents/InputControl';
import FileInputControl from '../formComponents/FileInputControl';

const emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const validate = (values) => {
  const errors = {};

  if (!values.get('password')) {
    errors.password = 'Required';
  }

  if (!values.get('email')) {
    errors.email = 'Required';
  } else if (values.get('email') && !emailRegEx.test(values.get('email'))) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

const TestForm = props => (
  <form onSubmit={props.handleSubmit}>
    <Field
      name="email"
      component={InputControl}
      type="text"
      label="Email"
      placeholder="Email"
    />

    <Field
      name="password"
      component={InputControl}
      type="text"
      label="Password"
      placeholder="Password"
    />

    <Field
      name="file-upload"
      accepts=".pdf"
      component={FileInputControl}
      label="File Upload"
      placeholder="File Upload"
    />


    <Field
      name="file-upload2"
      accepts=".jpg, .png, .jpeg"
      component={FileInputControl}
      label="File Upload 2"
      placeholder="File Upload 2"
    />

    <div className="pull-right">
      <button className="btn btn-primary" type="submit">Submit</button>
    </div>
    <div className="clearfix" />
  </form>
);

TestForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'TestForm',
  validate,
})(TestForm);

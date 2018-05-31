import React from 'react';
import PropTypes from 'prop-types';

const InputControl = ({
  input, label, required, type, meta: {
    touched, error,
  },
}) => (
  <div className={`form-group ${touched && error ? 'has-error' : ''}`}>
    <label htmlFor={label} className="control-label">{label}</label>
    <div>
      <input
        {...input}
        className="form-control"
        placeholder={label}
        type={type}
        required={required}
      />
      {touched && ((error && <span className="help-block">{error}</span>))}
    </div>
  </div>
);

InputControl.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
  input: PropTypes.shape({}),
  meta: PropTypes.shape({}),
};

InputControl.defaultProps = {
  label: 'Default Label',
  type: 'text',
  required: false,
  input: {},
  meta: {},
};

export default InputControl;

import React from 'react';
import PropTypes from 'prop-types';

const TextAreControl = ({
  input,
  label,
  placeholder,
  required,
  rows = 4,
  meta: {
    touched,
    error,
  },
}) => (
  <div className={`form-group ${touched && error ? 'has-error' : ''}`}>
    <label htmlFor={label} className="control-label">{label}</label>
    <div>
      <textarea
        {...input}
        className="form-control"
        placeholder={placeholder}
        required={required}
        rows={rows}
      />
      {touched && ((error && <span className="help-block">{error}</span>))}
    </div>
  </div>
);

TextAreControl.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  rows: PropTypes.number,
  input: React.PropTypes.shape({}),
  meta: React.PropTypes.shape({}),
};

TextAreControl.defaultProps = {
  label: 'Default Label',
  placeholder: 'Default Placeholder',
  rows: 5,
  required: false,
  input: {},
  meta: {},
};

export default TextAreControl;

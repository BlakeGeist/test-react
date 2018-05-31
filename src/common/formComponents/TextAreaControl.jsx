import React from 'react';

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
  label: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  required: React.PropTypes.bool,
  rows: React.PropTypes.number,
  input: React.PropTypes.shape({}),
  meta: React.PropTypes.shape({}),
};

export default TextAreControl;

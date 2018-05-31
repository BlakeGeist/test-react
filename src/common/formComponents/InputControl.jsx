import React from 'react';
import PropTypes from 'prop-types';

const InputControl = ({
  input,
  label,
  required,
  type,
  placeholder,
  helpText,
  containerClass,
  controlClass,
  meta: {
    touched, error,
  },
}) => (
  <div className={`${containerClass} ${touched && error ? 'has-error' : ''}`}>

    <label className="control-label">{label}</label>
    <div className={controlClass}>
      <input
        {...input}
        className="form-control-custom"
        placeholder={placeholder}
        type={type}
        required={required}
      />
    </div>
    {touched && ((error && <span className="error">{error}</span>))}
    {helpText && (<p>{helpText}</p>)}
  </div>
);

InputControl.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
  input: PropTypes.shape({}),
  meta: PropTypes.shape({}),
  helpText: PropTypes.string,
  controlClass: PropTypes.string,
  containerClass: PropTypes.string,
};

InputControl.defaultProps = {
  label: '',
  placeholder: '',
  type: 'text',
  required: false,
  input: {},
  meta: {},
  helpText: '',
  controlClass: 'form-control-input',
  containerClass: 'form-control-custom',
};

export default InputControl;

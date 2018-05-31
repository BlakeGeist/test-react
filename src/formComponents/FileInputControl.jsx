import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FileInputControl extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const { input: { onChange } } = this.props;
    console.log(e.target.files[0]);
    onChange(e.target.files[0]);
  }

  render() {
    // const { input: { value } } = this.props;
    const {
      input, label, required, accepts, helpText,
      meta: {
        touched, error,
      },
    } = this.props; // whatever props you send to the component from redux-form Field

    return (
      <div>
        <label>
          {label}
        </label>
        <div>
          <input
            type="file"
            accept={accepts}
            onChange={this.onChange}
            required={required}
          />
        </div>
        {touched && ((error && <span className="error">{error}</span>))}
        {helpText && (<p>{helpText}</p>)}
      </div>
    );
  }
}

FileInputControl.propTypes = {
  label: PropTypes.string,
  required: PropTypes.bool,
  input: PropTypes.shape({}),
  meta: PropTypes.shape({}),
  helpText: PropTypes.string,
  accepts: PropTypes.string,
};

FileInputControl.defaultProps = {
  label: '',
  required: false,
  input: {},
  meta: {},
  helpText: '',
  accepts: '',
};

export default FileInputControl;

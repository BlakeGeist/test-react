import React from 'react';

const SelectControl = ({
  input,
  label,
  skipEmptyItem,
  values,
  meta: { touched, error },
}) => (
  <div className={`form-group ${touched && error ? 'has-error' : ''}`}>
    <label className="control-label">{label}</label>
    <div>
      <select {...input} className="form-control">
        {skipEmptyItem !== true && <option>Select...</option>}
        {values.map((val, counter) => <option value={val.key} key={`${val.key}-${counter}`}>{val.value}</option>)}
      </select>
      {touched && ((error && <span className="help-block">{error}</span>))}
    </div>
  </div>
);

// SelectControl.propTypes = {
//   input: PropTypes.shape({}),
//   label: PropTypes.string,
//   skipEmptyItem: PropTypes.bool,
//   meta: PropTypes.shape({}),
//   values: PropTypes.arrayOf(
//     PropTypes.object,
//   ),
// };

export default SelectControl;

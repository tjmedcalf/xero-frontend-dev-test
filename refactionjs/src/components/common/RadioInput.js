import React from 'react';
import PropTypes from 'prop-types';

const RadioInput = ({id, name, label, value, handler, checked}) => {
  return(
    <div className="form-check form-check-inline">
      <input 
          className="form-check-input"
          id={id}
          name={name} 
          type="checkbox"
          value={value} 
          checked={checked} 
          onChange={handler} /> 

        <label className="form-check-label" htmlFor={id}>{label}</label>
    </div>
  )
}

RadioInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
  checked: PropTypes.bool
}

export default RadioInput;

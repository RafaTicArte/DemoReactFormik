/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types';

function InputField({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="form-group">
      <label className="label">{label}</label>
      <input className="form-control" {...field} {...props} />
      {meta.touched && meta.error && (
        <p className="text-danger">{meta.error}</p>
      )}
    </div>
  );
}

InputField.propTypes = {
  label: PropTypes.string.isRequired,
};

export default InputField;

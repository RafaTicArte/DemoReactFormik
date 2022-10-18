import React from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import InputField from './InputField';

const validateBasketball = (values) => {
  const errors = {};
  if (!values.team) {
    errors.team = 'Team is required!';
  } else if (values.team.length < 2) {
    errors.team = 'Team has to be 2 character at less!';
  }
  if (!values.name) {
    errors.name = 'Name is required!';
  } else if (values.name.length <= 2) {
    errors.name = 'Name has to be 2 character at less!';
  }
  if (!values.lastName) {
    errors.lastName = 'Last name is required!';
  }
  if (!values.number) {
    errors.number = 'Number is required!';
  } else if (Number.isNaN(Number(values.number))) {
    errors.number = 'Must be a number!';
  }
  return errors;
};

function BasketballForm({ initialBasketballValues }) {
  return (
    <Formik
      initialValues={initialBasketballValues}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          console.log('Submitting...');
          console.log(values);
          console.log(actions);
          actions.setSubmitting(false);
        }, 1000);
      }}
      validate={validateBasketball}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        resetForm,
        values,
        touched,
        errors,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="label" htmlFor="team">
              Team
            </label>
            <input
              className="form-control"
              id="team"
              name="team"
              value={values.team}
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.team && errors.team && (
              <p className="text-danger">{errors.team}</p>
            )}
          </div>
          <InputField name="name" type="text" label="Player Name" />
          <InputField name="lastName" type="text" label="Player Last Name" />
          <InputField name="number" type="text" label="Number" />
          <div className="form-group">
            <label className="label" htmlFor="position">
              Position
            </label>
            <select
              className="form-select"
              id="position"
              name="position"
              onChange={handleChange}
              value={values.position}
            >
              <option value="pg">Point Guard</option>
              <option value="sg">Shooting Guard</option>
              <option value="sf">Small Forward</option>
              <option value="pf">Power Forward</option>
              <option value="c">Center</option>
            </select>
          </div>
          <div className="form-group">
            <p className="control">
              <button
                className="btn btn-primary"
                disabled={isSubmitting}
                type="submit"
              >
                Submit
              </button>
              <button
                className="btn btn-secondary"
                type="button"
                onClick={resetForm}
              >
                Reset
              </button>
            </p>
          </div>
        </form>
      )}
    </Formik>
  );
}

BasketballForm.propTypes = {
  initialBasketballValues: PropTypes.shape({
    team: PropTypes.string,
    name: PropTypes.string,
    lastname: PropTypes.string,
    number: PropTypes.string,
    position: PropTypes.string,
  }).isRequired,
};

export default BasketballForm;

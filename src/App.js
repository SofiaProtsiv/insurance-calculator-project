import React, { useState } from "react";

import {
  INSURANCE_TYPE,
  PACKAGE_TYPE,
  ADDITIONAL_CHARGES,
  NUMBER_OF_PEOPLE,
} from "./assets/constants";

import Calculation from "./assets/calculation";

import style from "./app.module.scss";

const initialState = {
  insurance_term: "",
  period_start: "",
  period_end: "",
  package_type: "",
  additional_charges: "",
  number_of_people: 1,
};

export default function App() {
  const [state, setState] = useState(initialState);
  const [optionalValue, setOptionalValue] = useState(true);
  const [result, setResult] = useState(0);

  const today = new Date().toISOString().split("T")[0];
  console.log(state);
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const result = Calculation(state);
    setResult(result);
  };

  const handleChangeOptional = () => {
    setOptionalValue(!optionalValue);
    setState({ ...state, additional_charges: "" });
  };

  const {
    insurance_term,
    period_start,
    period_end,
    package_type,
    additional_charges,
    number_of_people,
  } = state;

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit} className={style.form}>
        <div className={style.fieldsWrapper}>
          <h2 className={style.formName}>Insurance calculator</h2>
          <fieldset
            className={style.fieldset}
            id="insurance_term"
            value={insurance_term}
            onChange={handleChange}
          >
            <legend className={style.title}>Insurance type</legend>
            {INSURANCE_TYPE.map(({ label, type, required, value, name }) => (
              <label key={value} className={style.label}>
                {label}
                <input
                  className={style.input}
                  required={required}
                  type={type}
                  value={value}
                  name={name}
                />
              </label>
            ))}
          </fieldset>

          <fieldset id="period" className={style.fieldset}>
            <legend className={style.title}>Period</legend>
            <label htmlFor="period_start" className={style.label}>
              Period start
              <input
                name="period_start"
                htmlFor="period_start"
                type="date"
                required
                value={period_start}
                onChange={handleChange}
                className={style.input}
                min={today}
              />
            </label>

            <label htmlFor="period_end" className={style.label}>
              Period end
              <input
                name="period_end"
                htmlFor="period_end"
                type="date"
                required={insurance_term === "annual_insurance" ? false : true}
                disabled={insurance_term === "annual_insurance" ? true : false}
                value={period_end}
                onChange={handleChange}
                className={style.input}
                min={today}
              />
            </label>
          </fieldset>

          <fieldset
            className={style.fieldset}
            id="package_type"
            value={package_type}
            onChange={handleChange}
          >
            <legend className={style.title}>Package type</legend>
            {PACKAGE_TYPE.map(({ label, type, required, value, name }) => (
              <label key={value} className={style.label}>
                {label}
                <input
                  className={style.input}
                  required={required}
                  type={type}
                  value={value}
                  name={name}
                />
              </label>
            ))}
          </fieldset>

          <label className={style.title}>
            Any additional charges?
            <input
              className={style.input}
              type="checkbox"
              value={optionalValue}
              onChange={handleChangeOptional}
            />
          </label>
          {!optionalValue ? (
            <fieldset
              className={style.fieldset}
              id="additional_charges"
              value={additional_charges}
              onChange={handleChange}
            >
              {ADDITIONAL_CHARGES.map(
                ({ label, type, required, value, name }) => (
                  <label key={value} className={style.label}>
                    {label}
                    <input
                      className={style.input}
                      required={required}
                      type={type}
                      value={value}
                      name={name}
                    />
                  </label>
                )
              )}
            </fieldset>
          ) : null}

          <label className={style.title}>
            Number of people
            <select
              className={style.fieldset}
              name="number_of_people"
              value={number_of_people}
              onChange={handleChange}
            >
              {NUMBER_OF_PEOPLE.map(({ label, required, value, name }) => (
                <option
                  key={value}
                  required={required}
                  value={value}
                  name={name}
                >
                  {label}
                </option>
              ))}
            </select>
          </label>

          <div className={style.buttonsWrapper}>
            <input type="submit" value="Submit" className={style.button} />
            <input
              type="reset"
              value=""
              className={style.buttonReset}
              onClick={() => setState(initialState)}
            />
          </div>
        </div>

        <div className={style.resultWrapper}>
          <p className={style.text}>Your cost of insurance:</p>
          <p className={style.result}>{result}€</p>
        </div>
      </form>
    </React.Fragment>
  );
}

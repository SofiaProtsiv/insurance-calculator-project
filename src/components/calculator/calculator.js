import React, { useEffect, useState } from "react";

import style from "./calculator.module.scss";
import {
  INSURANCE_TYPE,
  PACKAGE_TYPE,
  ADDITIONAL_CHARGES,
} from "../../assets/constants";

import Calculation from "../../assets/calculation";

const initialState = {
  insurance_term: "",
  period_start: "",
  period_end: "",
  package_type: "",
  additional_charges: ["no_additional_charges"],
  number_of_people: 1,
};
const today = new Date().toISOString().split("T")[0];

export default function Calculator() {
  const [state, setState] = useState(initialState);
  const [isStateEmpty, setIsStateEmpty] = useState(true);
  const [result, setResult] = useState(0);
  const [isCheck, setIsCheck] = useState(["no_additional_charges"]);

  const {
    insurance_term,
    period_start,
    period_end,
    package_type,
    additional_charges,
    number_of_people,
  } = state;

  const handleChange = ({ target }) => {
    setState({ ...state, [target.name]: target.value });
  };

  const handleCheckAdditionalCharges = ({ target }) => {
    if (target.name === "no_additional_charges") {
      setIsCheck(["no_additional_charges"]);
    } else {
      if (isCheck.includes("no_additional_charges")) {
        isCheck.splice(0, 1);
      }

      setIsCheck([...isCheck, target.name]);
      if (!target.checked) {
        setIsCheck(isCheck.filter((item) => item !== target.name));
      }
    }
  };
  // console.log(state);

  const incrementCounter = () =>
    setState({ ...state, number_of_people: number_of_people + 1 });
  const decrementCounter = () =>
    setState({ ...state, number_of_people: number_of_people - 1 });

  useEffect(() => {
    const result = Calculation(state);

    if (insurance_term === "annual_insurance") {
      if (period_start && package_type) {
        setIsStateEmpty(false);
        setResult(result);
      }
    } else {
      setResult(0);
      if (period_end && period_start && package_type && insurance_term) {
        setIsStateEmpty(false);
        setResult(result);
      }
    }
  }, [state]);

  useEffect(() => {
    setState({ ...state, additional_charges: isCheck });
  }, [additional_charges, isCheck]);

  useEffect(() => {
    if (insurance_term === "annual_insurance" && period_start) {
      let date = new Date(
        new Date(period_start).setFullYear(
          new Date(period_start).getFullYear() + 1
        )
      );
      let end = new Date(date).toISOString().split("T")[0];

      setState({
        ...state,
        period_end: end,
      });
    }
    if (insurance_term === "short_term_insurance") {
      setState({
        ...state,
        period_end: "",
      });
    }
  }, [insurance_term, period_start]);

  return (
    <div className={style.container}>
      <h2 className={style.header}>Insurance calculator</h2>
      <form className={style.form}>
        <fieldset
          className={style.fieldset}
          name="insurance_term"
          value={insurance_term}
          onChange={handleChange}
        >
          <legend className={style.legend}>Insurance type</legend>
          {INSURANCE_TYPE.map(({ label, type, required, value, name }) => (
            <React.Fragment key={value}>
              <input
                id={value}
                className={style.input}
                required={required}
                type={type}
                value={value}
                name={name}
              />
              <label className={style.label} htmlFor={value}>
                {label}
              </label>
            </React.Fragment>
          ))}
        </fieldset>

        <fieldset id="period" className={style.fieldset}>
          <legend className={style.legend}>Period</legend>
          <input
            name="period_start"
            htmlFor="period_start"
            type="date"
            required
            value={period_start}
            onChange={handleChange}
            className={style.dateRange}
            min={today}
            max={period_end}
          />

          <input
            name="period_end"
            htmlFor="period_end"
            type="date"
            required={insurance_term === "annual_insurance" ? false : true}
            disabled={insurance_term === "annual_insurance" ? true : false}
            value={period_end}
            onChange={handleChange}
            className={style.dateRange}
            min={period_start}
          />
        </fieldset>

        <fieldset
          className={style.fieldset}
          name="package_type"
          value={package_type}
          onChange={handleChange}
        >
          <legend className={style.legend}>Package type</legend>
          {PACKAGE_TYPE.map(({ label, type, required, value, name }) => (
            <React.Fragment key={value}>
              <input
                id={value}
                className={style.input}
                required={required}
                type={type}
                value={value}
                name={name}
              />
              <label className={style.label} htmlFor={value}>
                {label}
              </label>
            </React.Fragment>
          ))}
        </fieldset>

        <fieldset className={style.fieldset} name="additional_charges">
          <legend className={style.legend}>Any additional charges?</legend>
          {ADDITIONAL_CHARGES.map(({ label, type, required, value, name }) => (
            <React.Fragment key={value}>
              <input
                id={value}
                className={style.input}
                required={required}
                type={type}
                value={value}
                name={name}
                onChange={handleCheckAdditionalCharges}
                checked={isCheck.includes(name)}
              />

              <label className={style.label} htmlFor={value}>
                {label}
              </label>
            </React.Fragment>
          ))}
        </fieldset>

        <fieldset className={style.fieldset}>
          <legend className={style.legend}>Number of people </legend>
          <div className={style.wrapper}>
            <button
              type="button"
              className={style.buttonDecrement}
              onClick={decrementCounter}
              disabled={number_of_people === 1 ? true : false}
            >
              -
            </button>
            <p className={style.text}>{number_of_people}</p>
            <button
              type="button"
              className={style.buttonIncrement}
              onClick={incrementCounter}
              disabled={number_of_people === 3 ? true : false}
            >
              +
            </button>
          </div>
        </fieldset>
      </form>

      <p className={style.resultText}>
        {isStateEmpty
          ? "Please choose parameters"
          : `Your cost of insurance: €${result}`}
      </p>
      <span className={style.additionalText}>
        Some information about this calculator maybe it will be very long...
      </span>
    </div>
  );
}

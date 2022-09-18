import React from "react";
import style from "./insuranceType.module.scss";
import { INSURANCE_TYPE } from "../../../assets/constants";
export default function InsuranceType({ handleChange, state, page, setPage }) {
  const { insurance_term } = state;

  return (
    <fieldset className={style.fieldset}>
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
            checked={insurance_term}
            onChange={handleChange}
          />
        </label>
      ))}
      <div className={style.buttonsWrapper}>
        <button
          className={style.button}
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Next
        </button>
      </div>
    </fieldset>
  );
}

import React, { useState } from "react";
import style from "./package.module.scss";
import { PACKAGE_TYPE, ADDITIONAL_CHARGES } from "../../../assets/constants";

export default function Package({
  optionalValue,
  handleChangeOptional,
  handleChange,
  state,
  page,
  setPage,
}) {
  const { package_type, additional_charges } = state;

  return (
    <React.Fragment>
      <fieldset className={style.fieldset}>
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
              checked={package_type}
              onChange={handleChange}
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
          onClick={handleChangeOptional}
        />
      </label>
      {!optionalValue ? (
        <fieldset className={style.fieldset}>
          {ADDITIONAL_CHARGES.map(({ label, type, required, value, name }) => (
            <label key={value} className={style.label}>
              {label}
              <input
                className={style.input}
                required={required}
                type={type}
                value={value}
                name={name}
                checked={additional_charges}
                onChange={handleChange}
              />
            </label>
          ))}
        </fieldset>
      ) : null}

      <div className={style.buttonsWrapper}>
        <button
          className={style.button}
          onClick={() => {
            setPage(page - 1);
          }}
        >
          Previous
        </button>
        <button
          className={style.button}
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Next
        </button>
      </div>
    </React.Fragment>
  );
}

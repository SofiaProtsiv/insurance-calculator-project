import React from "react";
import { NUMBER_OF_PEOPLE } from "../../../assets/constants";

import style from "./numberOfPeople.module.scss";
export default function NumberOfPeople({
  handleChange,
  state,
  page,
  setPage,
  handleSubmit,
}) {
  const { number_of_people } = state;
  return (
    <React.Fragment>
      <label className={style.title}>
        Number of people
        <select
          className={style.fieldset}
          name="number_of_people"
          value={number_of_people}
          onChange={handleChange}
        >
          {NUMBER_OF_PEOPLE.map(({ label, required, value, name }) => (
            <option key={value} required={required} value={value} name={name}>
              {label}
            </option>
          ))}
        </select>
      </label>

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
          type="submit"
          className={style.button}
          onClick={(event) => {
            setPage(page + 1);
            handleSubmit(event);
          }}
        >
          Submit
        </button>
      </div>
    </React.Fragment>
  );
}

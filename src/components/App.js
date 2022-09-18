import React, { useState } from "react";

import Calculation from "../assets/calculation";

import style from "./app.module.scss";

import InsuranceType from "./steps/insuranceType/insuranceType";
import Period from "./steps/period/period";
import Package from "./steps/package/package";
import NumberOfPeople from "./steps/numberOfPeople/numberOfPeople";
import Result from "./steps/result/result";

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
  const [result, setResult] = useState(0);
  const [page, setPage] = useState(0);
  const [optionalValue, setOptionalValue] = useState(true);

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

  const componentList = [
    <InsuranceType
      state={state}
      handleChange={handleChange}
      page={page}
      setPage={setPage}
    />,
    <Period
      state={state}
      handleChange={handleChange}
      page={page}
      setPage={setPage}
    />,
    <Package
      state={state}
      handleChange={handleChange}
      handleChangeOptional={handleChangeOptional}
      optionalValue={optionalValue}
      page={page}
      setPage={setPage}
    />,
    <NumberOfPeople
      state={state}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      page={page}
      setPage={setPage}
    />,
    <Result state={state} result={result} />,
  ];

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <div className={style.fieldsWrapper}>
        <h2 className={style.formName}>Insurance calculator</h2>
        <div>{componentList[page]}</div>
      </div>
    </form>
  );
}

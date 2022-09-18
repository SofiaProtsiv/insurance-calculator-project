import style from "./period.module.scss";

export default function Period({ handleChange, state, page, setPage }) {
  const { insurance_term, period_start, period_end } = state;
  const today = new Date().toISOString().split("T")[0];

  return (
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
          max={period_end}
        />
      </label>
      {insurance_term === "short_term_insurance" ? (
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
            min={period_start}
          />
        </label>
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
    </fieldset>
  );
}

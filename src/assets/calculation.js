import getNumberOfDays from "./getNumberOfDays";

export default function Calculation({
  insurance_term,
  period_start,
  period_end,
  package_type,
  additional_charges,
  number_of_people,
}) {
  let values = {};

  if (insurance_term === "annual_insurance") {
    let annual_price = 0;

    switch (package_type) {
      case "basic":
        values.insurance_term = 39;
        break;
      case "extended":
        values.insurance_term = 49;
        break;
      case "extra":
        values.insurance_term = 59;
        break;
      default:
        values.insurance_term = 0;
    }

    if (
      additional_charges.includes("sport_activities") &&
      additional_charges.includes("cancellation")
    ) {
      values.additional_charges = 30;
      return (annual_price =
        values.insurance_term *
        number_of_people *
        (values.additional_charges / 100 + 1)).toFixed(2);
    }
    if (additional_charges.includes("cancellation")) {
      values.additional_charges = 20;
      return (annual_price =
        values.insurance_term *
        number_of_people *
        (values.additional_charges / 100 + 1)).toFixed(2);
    }
    if (additional_charges.includes("sport_activities")) {
      values.additional_charges = 10;
      return (annual_price =
        values.insurance_term *
        number_of_people *
        (values.additional_charges / 100 + 1)).toFixed(2);
    } else {
      values.additional_charges = 0;
      return (annual_price = values.insurance_term * number_of_people).toFixed(
        2
      );
    }
  }

  if (insurance_term === "short_term_insurance") {
    let short_time_price = 0;
    let days = Math.abs(getNumberOfDays(period_start, period_end));

    switch (package_type) {
      case "basic":
        values.insurance_term = 1.2;
        break;
      case "extended":
        values.insurance_term = 1.8;
        break;
      case "extra":
        values.insurance_term = 2.4;
        break;
      default:
        values.insurance_term = 0;
    }

    if (
      additional_charges.includes("sport_activities") &&
      additional_charges.includes("cancellation")
    ) {
      values.additional_charges = 80;
      return (short_time_price =
        values.insurance_term *
        number_of_people *
        days *
        (values.additional_charges / 100 + 1)).toFixed(2);
    }
    if (additional_charges.includes("cancellation")) {
      values.additional_charges = 50;
      return (short_time_price =
        values.insurance_term *
        number_of_people *
        days *
        (values.additional_charges / 100 + 1)).toFixed(2);
    }
    if (additional_charges.includes("sport_activities")) {
      values.additional_charges = 30;
      return (short_time_price =
        values.insurance_term *
        number_of_people *
        days *
        (values.additional_charges / 100 + 1)).toFixed(2);
    } else {
      values.additional_charges = 0;
      return (short_time_price =
        values.insurance_term * number_of_people * days).toFixed(2);
    }
  }
}

// console.log(`${values.insurance_term} * ${number_of_people} * ${days} +
// ${values.additional_charges} / 100 + 1`);

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
      case "extended":
        values.insurance_term = 49;
        break;
      case "extra":
        values.insurance_term = 59;
        break;
      default:
        values.insurance_term = 39;
    }

    switch (additional_charges) {
      case "cancellation":
        values.additional_charges = 20;
        break;
      case "sport_activities":
        values.additional_charges = 10;
        break;
      default:
        values.additional_charges = 0;
    }

    if (values.additional_charges === 0) {
      annual_price = values.insurance_term * number_of_people;
    } else {
      annual_price =
        values.insurance_term *
        number_of_people *
        (values.additional_charges / 100 + 1);
    }

    return annual_price.toFixed(2);
  } else {
    let short_time_price = 0;
    let days = Math.abs(getNumberOfDays(period_start, period_end));

    switch (package_type) {
      case "extended":
        values.insurance_term = 1.8;
        break;
      case "extra":
        values.insurance_term = 2.4;
        break;
      default:
        values.insurance_term = 1.2;
    }

    switch (additional_charges) {
      case "cancellation":
        values.additional_charges = 50;
        break;
      case "sport_activities":
        values.additional_charges = 30;
        break;
      default:
        values.additional_charges = 0;
    }

    if (values.additional_charges === 0) {
      short_time_price = values.insurance_term * number_of_people * days;
    } else {
      short_time_price =
        values.insurance_term *
        number_of_people *
        days *
        (values.additional_charges / 100 + 1);
    }

    return short_time_price.toFixed(2);
  }
}

// console.log(`${values.insurance_term} * ${number_of_people} * ${days} +
// ${values.additional_charges} / 100 + 1`);

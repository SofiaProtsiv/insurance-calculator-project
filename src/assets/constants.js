import { type } from "@testing-library/user-event/dist/type";

export const INSURANCE_TYPE = [
  {
    label: "Annual insurance",
    type: "radio",
    required: true,
    value: "annual_insurance",
    name: "insurance_term",
  },
  {
    label: "Short term insurance",
    type: "radio",
    required: true,
    value: "short_term_insurance",
    name: "insurance_term",
  },
];

export const PACKAGE_TYPE = [
  {
    label: "Basic",
    type: "radio",
    required: true,
    value: "basic",
    name: "package_type",
  },
  {
    label: "Extended",
    type: "radio",
    required: true,
    value: "extended",
    name: "package_type",
  },
  {
    label: "Extra",
    type: "radio",
    required: true,
    value: "extra",
    name: "package_type",
  },
];

export const ADDITIONAL_CHARGES = [
  {
    label: "Cancellation",
    type: "radio",
    required: false,
    value: "cancellation",
    name: "additional_charges",
  },
  {
    label: "Sport activities",
    type: "radio",
    required: false,
    value: "sport_activities",
    name: "additional_charges",
  },
];

export const NUMBER_OF_PEOPLE = [
  {
    label: "1",
    type: "radio",
    required: true,
    value: "1",
    name: "number_of_people",
  },
  {
    label: "2",
    type: "radio",
    required: true,
    value: "2",
    name: "number_of_people",
  },
  {
    label: "3",
    type: "radio",
    required: true,
    value: "3",
    name: "number_of_people",
  },
];

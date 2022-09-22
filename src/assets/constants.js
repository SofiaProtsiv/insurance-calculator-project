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
    label: "No",
    type: "checkbox",
    required: false,
    value: "no_additional_charges",
    name: "no_additional_charges",
  },
  {
    label: "Cancellation",
    type: "checkbox",
    required: false,
    value: "cancellation",
    name: "cancellation",
  },
  {
    label: "Sport activities",
    type: "checkbox",
    required: false,
    value: "sport_activities",
    name: "sport_activities",
  },
];

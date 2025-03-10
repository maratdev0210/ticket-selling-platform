import mirIcon from "../../../../../../public/mir.svg";
import visaIcon from "../../../../../../public/visa.svg";
import mastercardIcon from "../../../../../../public/mastercard.svg";

const icons = {
  4: visaIcon,
  5: mastercardIcon,
  22: mirIcon,
};

// describes the form fields for each form
const formFields = [
  {
    type: "text",
    name: "name",
    placeholder: "Name",
    label: "Name",
  },
  {
    type: "text",
    name: "surname",
    placeholder: "Surname",
    label: "Surname",
  },
  {
    type: "text", // set the email to type text to override the in-built browser email validation
    name: "email",
    placeholder: "xxx@gmail.com",
    label: "Email",
  },
  {
    type: "tel",
    name: "phone",
    placeholder: "+7-xxx-xxx-xx-xx",
    label: "Phone",
  },
];

const validationFields = [
  {
    required: { value: true, message: "Name is required" },
    minLength: { value: 2, message: "Name must be between 2 to 30 characters" },
    maxLength: {
      value: 30,
      message: "Name must be between 2 to 30 characters",
    },
  },
  { maxLength: 30, message: "surname cannot be longer than 30 characters" }, // surname field
  {
    required: { value: true, message: "Email field is required" }, // email field
    pattern: {
      value:
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
      message: "Email is invalid!",
    },
  },
  {
    required: { value: true, message: "Phone field is required" },
    pattern: {
      value: /^\+7-\d{3}-\d{3}(?:-\d{2}-\d{2}|-\d{4})$/, // phone field
      message: "Invalid phone number",
    },
  },
];

const cardNumberInput = [
  {
    type: "text",
    name: "payment",
    placeholder: "xxxx-xxxx-xxxx-xxxx",
    label: "Card details",
    pattern: {
      value: /^(?:22\d{2}|[45]\d{3}) \d{4} \d{4} \d{4}$/,
      message: "Invalid card number!",
    },
    required: { value: true, message: "Enter your card number!" },
  },
];

const cardDetailsInput = [
  {
    type: "text",
    name: "expiration",
    placeholder: "03/25",
    label: "Expiration date",
    required: true,
    pattern: /^(0[1-9]|1[0-2])\/\d{2}$/,
    maxLength: "5",
  },
  {
    type: "text",
    name: "cvc",
    placeholder: "345",
    label: "CVC/CVV",
    required: true,
    pattern: /^\d{3}$/,
    maxLength: "3",
  },
];



export {icons, formFields, validationFields, cardNumberInput, cardDetailsInput };

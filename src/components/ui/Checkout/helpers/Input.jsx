// for each input element set the validation rules
// -> name: minLength: 2, maxLength: 30, etc.
import { Check, X } from "lucide-react";
import { useState } from "react";
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
  { required: true, message: "Payment info is required" }, // payment field
  // TO-DO: add card validation: 4 for Visa,5 for Mastercard, 22 for MIR Pay,
];

export default function Input({
  type,
  name,
  placeholder,
  label,
  register,
  index,
  errors,
  isSubmit,
}) {
  const [isChange, setIsChange] = useState(false);

  return (
    <div className="w-3/4 group">
      <label
        className="group-hover:cursor-pointer mb-2 flex flex-col font-medium text-lg"
        key={index}
      >
        {label}

        <span className="relative">
          <input
            {...register(name, validationFields[index])}
            type={type}
            placeholder={placeholder}
            name={name}
            onInput={() => setIsChange(true)}
            className="mt-2 w-full border-1 px-2 py-2  focus:outline-purple-300  focus:text-gray-700 text-gray-600 border-gray-300 rounded-lg"
          />
          {(isChange || isSubmit) && (
            <span
              className={`${!errors[name] ? "bg-green-500" : "bg-red-500"} p-0.5 text-white/80 rounded-full inline absolute top-4 right-2`}
            >
              {errors[name] ? <X /> : <Check />}
            </span>
          )}

          {errors[name] && (
            <span className="text-sm text-red-600 py-1 block">
              {errors[name].message}
            </span>
          )}
        </span>
      </label>
    </div>
  );
}

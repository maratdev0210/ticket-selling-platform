// Name, Surname, email, and phone fields.
// For Payment field look at CardInput component
import { useState } from "react";
import { validationFields } from "./formFields";
import ErrorField from "./ErrorField";

export default function MainInput({
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
    <div className="w-full group">
      <label
        className="group-hover:cursor-pointer dark:text-gray-300 mb-2 flex flex-col font-medium text-lg"
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
            className="mt-2 dark:placeholder-gray-500 dark:text-gray-200 w-full border-1 px-2 py-2  dark:focus:outline-blue-400 dark:focus:outline-1 focus:outline-purple-300 dark:focus:text-gray-200  focus:text-gray-700 text-gray-600 dark:border-blue-400 border-gray-300 rounded-lg"
          />
          <ErrorField
            isChange={isChange}
            isSubmit={isSubmit}
            errors={errors}
            name={name}
          />
        </span>
      </label>
    </div>
  );
}

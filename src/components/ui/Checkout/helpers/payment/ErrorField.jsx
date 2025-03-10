import { Check, X } from "lucide-react";

// show errors on input only if the field has changed at least once
// or if the form has been submitted
export default function ErrorField({ isChange, isSubmit, errors, name }) {
  return (
    <>
      {(isChange || isSubmit) && (
        <span
          className={`${!errors[name] ? "bg-green-500" : "bg-red-500 dark:bg-red-500/90"} p-0.5 text-white/80 dark:text-gray-300 rounded-full inline absolute top-4 right-2`}
        >
          {errors[name] ? <X /> : <Check />}
        </span>
      )}

      {errors[name] && (
        <span className="text-sm dark:text-red-500 text-red-600 py-1 block">
          {errors[name].message}
        </span>
      )}
    </>
  );
}

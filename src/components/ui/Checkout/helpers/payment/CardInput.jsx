import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { icons, cardNumberInput, cardDetailsInput } from "./formFields";
import ErrorField from "./ErrorField";

function showCardIcon(cardNumber) {
  let icon = cardNumber.substring(0, 1); // either 4, 5, or undefined;
  if (icon == "2") {
    return icons[22]; // returns mirIcon
  }
  return icons[icon]; // returns visa or mastercard
}

function validateMonth(expiration) {
  return (
    parseInt(expiration.substring(0, 2)) == 0 ||
    parseInt(expiration.substring(0, 2)) > 12
  );
}

const cardNumberRegex = /^(?:22|4|5)/; // does the card starts with numbers 4, 5, or 22?

export default function CardInput({
  register,
  errors,
  isSubmit,
  watch,
  setValue,
}) {
  const [isChangeCard, setIsChangeCard] = useState(false);
  const [showDetails, setShowDetails] = useState(true); // show/hide card input numbers
  const cardNum = watch("payment", "");
  const expiration = watch("expiration", "");
  const cvc = watch("cvc", "");

  const formatCardNumber = (cardNum) => {
    return cardNum.replace(/\D/g, "").replace(/(\d{4})(?=\d)/g, "$1 ");
  };

  const formatExpirationDate = (expiration) => {
    if (expiration.length >= 2 && validateMonth(expiration)) {
      return expiration.substring(0, 2);
    }
    return expiration.replace(/\D/g, "").replace(/(\d{2})(?=\d)/g, "$1/");
  };

  const handleInput = (e, name, watchOnChange = undefined) => {
    if (watchOnChange !== undefined) {
      setIsChangeCard(true);
    }

    const rawValue = e.target.value.replace(/\D/g, "");
    setValue(name, rawValue, { shouldValidate: true });
  };

  return (
    <>
      <div className="w-full">
        {cardNumberInput.map(
          ({ type, name, placeholder, label, pattern, required }, index) => {
            return (
              <label
                className="group-hover:cursor-pointer mb-2 flex dark:text-gray-300  flex-col font-medium text-lg"
                key={index}
              >
                <span className="flex items-center justify-between gap-2">
                  {label}

                  <span
                    className="text-gray-500 hover:cursor-pointer"
                    onClick={() => setShowDetails(!showDetails)}
                  >
                    {showDetails ? <Eye /> : <EyeOff />}
                  </span>
                </span>

                <span className="relative">
                  {cardNum?.length >= 4 && cardNumberRegex.test(cardNum) && (
                    <span>
                      <img
                        className="absolute top-4 left-2 w-8 h-8"
                        src={showCardIcon(cardNum)}
                        alt="card icon"
                      />
                    </span>
                  )}

                  <input
                    {...register(name, { pattern, required })}
                    type={showDetails ? type : "password"}
                    name={name}
                    placeholder={placeholder}
                    onInput={(e, name, watchOnChange) =>
                      handleInput(e, name, true)
                    }
                    value={formatCardNumber(cardNum)}
                    maxLength="19"
                    className={`${cardNum?.length >= 4 && cardNumberRegex.test(cardNum) ? "px-12" : "px-2"} mt-2 w-full border-1 py-2 dark:text-gray-300 dark:focus:text-gray-300 focus:outline-purple-300  focus:text-gray-700 text-gray-600 dark:focus:outline-1 dark:focus:outline-blue-500 dark:border-blue-400 border-gray-300 text-lg rounded-lg`}
                  />
                  <ErrorField
                    isChange={isChangeCard}
                    isSubmit={isSubmit}
                    errors={errors}
                    name={name}
                  />
                </span>
              </label>
            );
          }
        )}
      </div>

      <div className="w-full gap-2 relative bottom-2 flex justify-between">
        {cardDetailsInput.map(
          (
            { type, name, placeholder, label, required, pattern, maxLength },
            index
          ) => {
            return (
              <div className="w-1/3" key={index}>
                <label className="dark:text-gray-400 group-hover:cursor-pointer mb-2 flex flex-col font-medium text-gray-400 text-sm">
                  {label}
                  <input
                    type={showDetails ? type : "password"}
                    onInput={(e, name) => handleInput(e, name)}
                    value={index == 0 ? formatExpirationDate(expiration) : cvc}
                    {...register(name, {
                      required,
                      pattern,
                    })}
                    placeholder={placeholder}
                    maxLength={maxLength}
                    className={`px-2 mt-1 w-full border-1 py-2 dark:text-gray-300 dark:focus:text-gray-300 dark:focus:outline-1 dark:focus:outline-gray-300 focus:outline-purple-300  focus:text-gray-700 text-gray-600 text-lg dark:border-gray-200 border-gray-300 rounded-lg`}
                  />
                </label>
              </div>
            );
          }
        )}
      </div>
    </>
  );
}

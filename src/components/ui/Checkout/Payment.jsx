import SlideIn from "../animate/SlideIn";
import { useForm } from "react-hook-form";
import MainInput from "./helpers/payment/MainInput";
import CardInput from "./helpers/payment/CardInput";
import { useState } from "react";
import { formFields } from "./helpers/payment/formFields";

export default function Payment({ onNext }) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const [isSubmit, setIsSubmit] = useState(false);

  const onSubmit = () => {
    onNext();
  };

  watch("name");
  watch("surname");
  watch("email");
  watch("phone");
  watch("payment");
  watch("expiration");
  watch("cvc");

  return (
    <SlideIn>
      <div className="mt-8">
        <form
          className="flex gap-2 flex-col justify-center items-center"
          onSubmit={handleSubmit(onSubmit)}
          action="/"
          method="post"
        >
          {formFields.map(({ type, name, placeholder, label }, index) => {
            return (
              <MainInput
                key={index}
                type={type}
                name={name}
                placeholder={placeholder}
                label={label}
                index={index}
                register={register}
                errors={errors}
                isSubmit={isSubmit}
              />
            );
          })}

          <CardInput
            register={register}
            errors={errors}
            isSubmit={isSubmit}
            watch={watch}
            setValue={setValue}
          />

          <input
            onClick={() => setIsSubmit(true)}
            type="submit"
            value="Pay"
            className="border-none rounded-lg cursor-pointer hover:bg-blue-500/75 bg-blue-500 text-white font-medium text-center w-3/4 h-10 mt-8"
          />
        </form>
      </div>
    </SlideIn>
  );
}

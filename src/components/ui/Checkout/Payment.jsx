import SlideIn from "../animate/SlideIn";
import { useForm } from "react-hook-form";
import Input from "./helpers/Input";
import { useState } from "react";

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
  /*
  {
    type: "text",
    name: "payment",
    placeholder: "xxx-xxxx-xx-xxx",
    label: "Payment info",
  }, */
];

export default function Payment({ onNext }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const [isSubmit, setIsSubmit] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    onNext();
  };

  console.log(watch("name"));
  watch("surname");
  watch("email");
  watch("phone");

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
              <Input
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

          <input
            onClick={() => setIsSubmit(true)}
            type="submit"
            value="Send Data"
            className="border-none rounded-lg cursor-pointer hover:bg-blue-500/75 bg-blue-500 text-white font-medium text-center w-3/4 h-10 mt-8"
          />
        </form>
      </div>
    </SlideIn>
  );
}

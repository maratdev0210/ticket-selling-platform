import SlideIn from "../animate/SlideIn";

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
    type: "email",
    name: "email",
    placeholder: "xxx@gmail.com",
    label: "Email",
  },
  {
    type: "phone",
    name: "phone",
    placeholder: "+7-xxx-xxx-xx-xx",
    label: "Phone",
  },
  {
    type: "text",
    name: "payment",
    placeholder: "xxx-xxxx-xx-xxx",
    label: "Payment info",
  },
];

export default function Payment({ handleSubmit }) {
  return (
    <SlideIn>
      <div className="mt-8">
        <form
          className="flex gap-2 flex-col justify-center items-center"
          onSubmit={(e) => e.preventDefault()}
          action="/"
          method="post"
        >
          {formFields.map((field) => {
            return (
              <label className="flex flex-col">
                {field.label}
                <input
                  className="input"
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                />
              </label>
            );
          })}
          <button
            type="submit"
            onClick={handleSubmit}
            onSubmit={(e) => e.preventDefault()}
          >
            Send Data
          </button>
        </form>
      </div>
    </SlideIn>
  );
}

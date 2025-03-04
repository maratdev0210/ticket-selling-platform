import SlideIn from "./helpers/SlideIn";

export default function Payment({ handleSubmit }) {
  return (
    <SlideIn>
      <div className="mt-8">
        <form
          className="flex  gap-2 flex-col justify-center items-center"
          onSubmit={(e) => e.preventDefault()}
          action="/"
          method="post"
        >
          <label className="flex flex-col">
            Name
            <input
              className="input"
              name="name"
              type="text"
              placeholder="Name"
            />
          </label>

          <label className="flex flex-col">
            Surname
            <input
              className="input"
              name="surname"
              type="text"
              placeholder="surname"
            />
          </label>
          <label className="flex flex-col">
            Email address
            <input
              className="input"
              name="email"
              type="email"
              placeholder="xxx@gmail.com"
            />
          </label>

          <label className="flex flex-col">
            Phone number
            <input
              className="input"
              name="phone"
              type="phone"
              placeholder="+7-xxx-xxx-xx-xx"
            />
          </label>

          <label htmlFor="payment" className="flex flex-col">
            Payment info
            <input
              className="input"
              id="payment"
              name="payment"
              type="text"
              placeholder="xxxx-xxx-xxxxx"
            />
          </label>
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

// Final step congratulating the user that his tickets have been bought
import SlideIn from "../animate/SlideIn";
import { Link } from "react-router";

export default function Final() {
  return (
    <SlideIn>
      <div className="flex flex-col">
        <div>
          <p className="text-center font-medium text-lg py-4">
            Congratulations!
          </p>
          <p className="text-center font-medium text-md ">
            The tickets have been bought
          </p>
        </div>
        <div>
          <Link
            to="/"
            className="text-md block text-center p- text-gray-700/80 hover:text-gray-700/60"
          >
            Go back to the main page!
          </Link>
        </div>
      </div>
    </SlideIn>
  );
}

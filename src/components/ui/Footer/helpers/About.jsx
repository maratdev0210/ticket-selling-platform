import { Link } from "react-router";

const aboutUs = ["Home", "Contacts", "Who is this for?"];

export default function About() {
  return (
    <div className="flex flex-col">
      <span className="font-bold text-lg text-gray-500">About Us</span>
      <div className="mt-2 flex flex-col gap-2">
        {aboutUs.map((label, index) => {
          return (
            <Link onClick={() => window.scrollTo(0, 0)} key={index} to="/">
              <span className="text-gray-500 font-medium">{label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

import { Link } from "react-router";

const DEVELOPERS = {
  Docs: "https://github.com/maratdev0210/ticket-selling-platform?tab=readme-ov-file#ticket-selling-platform",
  Project: "https://github.com/maratdev0210/ticket-selling-platform",
};

export default function Developers() {
  return (
    <div className="flex flex-col">
      <span className="font-bold text-lg text-gray-500 dark:text-white">
        For Developers
      </span>
      <div className="mt-2 flex flex-col gap-2">
        {Object.entries(DEVELOPERS).map((developer, index) => {
          return (
            <Link key={index} to={developer[1]}>
              <span className=" text-gray-500 dark:text-gray-100 font-medium">
                {developer[0]}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

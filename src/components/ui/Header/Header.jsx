import ThemeSwitch from "./themeSwitch";
import { Link } from "react-router";
import MobileHeader from "./helpers/MobileHeader";

export default function Header() {
  const underlineStyle =
    "group-hover:h-0.5 bg-linear-to-r from-gray-300 from-50% to-gray-400 ease-in-out group-hover:origin-[0%_50%] group-hover:transition group-hover:duration-300 w-4 h-0 relative left-0.5 bottom-1";

  return (
    <>
      <div className="sticky top-0 left-0 bg-white dark:bg-gray-900 z-100">
        <div className="hidden sm:flex items-center sm:items-start justify-between px-4 sm:px-8 py-4">
          <nav className="hidden sm:block relative top-2">
            <ul className="flex gap-6 *:text-2xl *:cursor-pointer font-medium text-pink-500 dark:text-pink-400">
              <Link to="/">
                <li className="flex flex-col group">
                  Home{" "}
                  <span
                    className={`${underlineStyle} group-hover:scale-x-400`}
                  ></span>
                </li>
              </Link>

              <Link to="/order">
                <li className="tracking-tighter flex flex-col group">
                  Your order{" "}
                  <span
                    className={`${underlineStyle} group-hover:scale-x-625`}
                  ></span>
                </li>
              </Link>
            </ul>
          </nav>
          <ThemeSwitch />
        </div>
      </div>

      <MobileHeader />
    </>
  );
}

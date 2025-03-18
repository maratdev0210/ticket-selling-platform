import { Menu, X } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";
import ThemeSwitch from "../themeSwitch";

export default function MobileHeader() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div
      className={`${showMenu ? "fixed top-0 left-0 h-[100vh] w-full bg-white dark:bg-gray-900 z-10000" : ""}  `}
    >
      <div className="flex justify-between items-center sm:hidden">
        <Menu
          className="dark:text-white"
          onClick={() => setShowMenu(!showMenu)}
          size={48}
        />
        <ThemeSwitch />
      </div>

      <nav className={`${showMenu ? "relative top-2" : "hidden"}`}>
        <ul className="flex flex-col h-[80vh] justify-center items-center gap-6 *:text-2xl *:cursor-pointer font-medium text-pink-500 dark:text-pink-400">
          <Link onClick={() => setShowMenu(false)} to="/">
            <li className="  overflow-hidden  flex *:relative *:bottom-8 group">
              <span className="animate-letterAppear">H</span>
              <span className="animate-letterAppear2">o</span>
              <span className="animate-letterAppear3">m</span>
              <span className="animate-letterAppear4">e</span>
            </li>
          </Link>

          <li className="tracking-tighter flex flex-col group">Your order</li>
        </ul>
      </nav>
    </div>
  );
}

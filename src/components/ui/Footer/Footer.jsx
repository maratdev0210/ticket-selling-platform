import Profile from "../../../../public/profile.jpg";
import ShowProfile from "./helpers/ShowProfile";
import Socials from "./helpers/Socials";
import Developers from "./helpers/Developers";
import About from "./helpers/About";
import { useState } from "react";

export default function Footer() {
  const [showCode, setShowCode] = useState(false); // shows the qr code to Telegram profile
  return (
    <>
      {showCode && <ShowProfile setShowCode={setShowCode} profile={Profile} />}
      <footer className="bg-gray-100 h-auto relative bottom-0 px-12 pt-18 pb-4 mt-40 *:cursor-pointer">
        <div className="grid grid-cols-2 w-full sm:grid-cols-3 gap-4 md:w-3/4 lg:w-1/2 2xl:w-130">
          <About />
          <Developers />
          <Socials setShowCode={setShowCode} />
        </div>
        <div className="mt-12">
          <span className="font-medium text-gray-500 text-sm">
            Marat Musagitov
          </span>
        </div>
      </footer>
    </>
  );
}

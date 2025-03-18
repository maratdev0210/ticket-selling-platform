import { Link } from "react-router";
import TelegramLogo from "../../../../../public/TelegramLogo.svg";
import VkLogo from "../../../../../public/VkLogo.svg";
import QrIcon from "../../../../../public/QrIcon.svg";

const SOCIALS = {
  Telegram: { link: "https://t.me/marat022005", icon: TelegramLogo },
  VK: { link: "https://vk.com", icon: VkLogo },
};

export default function Socials({ setShowCode }) {
  return (
    <div className="flex flex-col">
      <span className="font-bold text-lg text-gray-500 dark:text-white">
        Socials
      </span>
      <div className="mt-2 flex flex-col gap-2">
        {Object.entries(SOCIALS).map((social, index) => {
          return (
            <div key={index} className="flex items-center gap-1">
              <img src={social[1].icon} className="size-5" />
              <Link to={social[1].link}>
                <span className="text-gray-500 dark:text-gray-100 font-medium">
                  {social[0]}
                </span>
              </Link>
            </div>
          );
        })}
        <div
          onClick={() => setShowCode(true)}
          className="flex items-center gap-1"
        >
          <img src={QrIcon} className="size-5" />
          <span className="text-gray-500 dark:text-gray-100 font-medium">
            Scan QR
          </span>
        </div>
      </div>
    </div>
  );
}

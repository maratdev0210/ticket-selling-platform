import ListedSeats from "./ListedSeats";
import Payment from "./Payment";
import Final from "./Final";
import { useState } from "react";
import { Check } from "lucide-react";
import ThemeSwitch from "../Header/themeSwitch";
import { useStore } from "zustand";
import useTheme from "../../state/useTheme";

export default function Checkout() {
  const [page, setPage] = useState(1);
  const theme = useStore(useTheme, (state) => state.theme); // dark || light

  const onNext = () => {
    setPage(page + 1);
  };

  const steps = [
    <ListedSeats onNext={onNext} />,
    <Payment handleSubmit={onNext} />,
    <Final />,
  ];

  return (
    <div>
      <ThemeSwitch />
      <div className="mt-24 mb-24 p-2 sm:p-4 shadow-xl h-auto mx-auto  border-1 border-gray-900/10 rounded-md border-solid sm:w-1/2 lg:w-3/5 xl:w-1/3">
        {steps[page - 1]}

        <div className="py-4 gap-0.5 flex justify-center items-center w-full mx-auto mt-16">
          {[1, 2, 3].map((currentPage, index) => {
            return (
              <>
                <span
                  key={index}
                  onClick={() => setPage(index + 1)}
                  className={`${currentPage <= page ? "bg-blue-700/50 text-white border-2" : " border-gray-700"} border-2 hover:cursor-pointer w-7 text-center  text-md rounded-full `}
                >
                  {currentPage < page || page == 3 ? <Check /> : currentPage}
                </span>
                {currentPage < 3 && (
                  <span
                    className={`${currentPage < page ? "text-blue-700/50" : "text-gray-500"} border-1 border-solid w-16  h-0`}
                  ></span>
                )}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

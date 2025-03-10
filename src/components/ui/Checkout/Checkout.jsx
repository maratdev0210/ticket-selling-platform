import ListedSeats from "./ListedSeats";
import Payment from "./Payment";
import Final from "./Final";
import { useState, useEffect } from "react";
import { Check } from "lucide-react";
import ThemeSwitch from "../Header/themeSwitch";
import { useStore } from "zustand";
import useTheme from "../../state/useTheme";
import Skeleton from "./helpers/Skeleton";

export default function Checkout() {
  const [page, setPage] = useState(1);
  const theme = useStore(useTheme, (state) => state.theme); // dark || light
  const [loading, setLoading] = useState(true);
  const onNext = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    const simulateLoad = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1500));
      } finally {
        setLoading(false);
      }
    };

    simulateLoad();
  }, []);

  const steps = [
    <ListedSeats onNext={onNext} />,
    <Payment onNext={onNext} />,
    <Final />,
  ];

  return (
    <>
      <div className={`h-auto `}>
        <ThemeSwitch />
        {loading ? (
          <Skeleton />
        ) : (
          <div className="mt-8 p-2 sm:p-4 shadow-xl h-auto mx-auto  border-1 border-gray-900/10 rounded-md border-solid sm:w-1/2 lg:w-3/5 xl:w-1/3 mb-10">
            {steps[page - 1]}

            <div className="py-4 gap-0.5 flex justify-center items-center w-full mx-auto mt-16">
              {[1, 2, 3].map((currentPage, index) => {
                return (
                  <>
                    <span
                      key={index}
                      onClick={() => setPage(index + 1)}
                      className={`${currentPage <= page ? "bg-blue-700/50 dark:bg-blue-500 dark:border-white/90 text-white border-2" : "dark:border-gray-500 dark:text-white border-gray-700"} border-2 hover:cursor-pointer w-7 text-center rounded-full `}
                    >
                      {currentPage < page || page == 3 ? (
                        <Check />
                      ) : (
                        currentPage
                      )}
                    </span>
                    {currentPage < 3 && (
                      <span
                        className={`${currentPage < page ? "dark:text-blue-500 text-blue-700/50" : "dark:text-gray-300 text-gray-500"} border-1 border-solid w-16  h-0`}
                      ></span>
                    )}
                  </>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

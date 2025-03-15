// Loading animation before the component mounts
function ListItem() {
  return [1, 2, 3].map((_, index) => {
    return (
      <div key={index} className="flex items-center gap-2 mt-6">
        <span className="rounded-full size-6 bg-gray-300"></span>
        <div>
          <p className="w-16 h-2 bg-gray-300/60"></p>
          <p className="w-12 h-2 bg-gray-400/75 mt-2"></p>
        </div>
      </div>
    );
  });
}

function StepsIcon() {
  return [1, 2, 3].map((_, index) => {
    return (
      <>
        <span className="size-4 rounded-full bg-gray-300"></span>
        {index < 2 && (
          <span className="border-1 h-0 border-gray-200 w-16"></span>
        )}
      </>
    );
  });
}

export default function Skeleton() {
  return (
    <>
      <div
        className={`mt-24 animate-skeleton  shadow-lg sm:w-1/2 lg:w-3/5 xl:w-1/3  h-auto pb-8 mx-auto rounded-md border-none dark:border-gray-700/50 dark:rounded-xl dark:border-solid border-1`}
      >
        <div>
          <p className="w-1/2 rounded-lg mx-auto h-4 mt-4 bg-gray-300/75"></p>
        </div>
        <div className="px-8 mt-8">
          <p className="w-1/3 rounded-lg px-4 h-2 bg-gray-300/50 "></p>
        </div>
        <div className="px-8">
          <ListItem />
        </div>
        <div className="w-1/3 mx-auto mt-8">
          <div className="h-6 rounded-full bg-gray-300 dark:bg-gray-400"></div>
        </div>
        <div className="flex w-1/2 mx-auto mt-8  justify-center gap-1 items-center">
          <StepsIcon />
        </div>
      </div>
    </>
  );
}

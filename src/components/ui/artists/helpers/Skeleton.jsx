function ListItem() {
  return [1, 2, 3, 4, 5].map((_, index) => {
    return (
      <div className="px-4 mt-4  relative" key={index}>
        <div>
          <div className="rounded-full animate-pulse size-9 bg-gray-300 relative top-16"></div>

          <div className="mx-11 animate-skeleton relative top-8 w-60">
            <div>
              <p className="font-medium w-40 h-2 bg-gray-300"></p>
              <div className="flex gap-2">
                <p className="bg-gray-300 w-30 h-2 top-2 relative"></p>
                <p className="bg-gray-100  h-2 w-15 absolute top-0 animate-skeletonRun"></p>
                <p className="bg-gray-300 w-10 h-2 top-2 relative"></p>
                <p className="bg-gray-100  h-2 w-15 absolute top-4 animate-skeletonRunAlternate"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
}

// show the preloading
export default function Skeleton() {
  return (
    <div>
      <div className="border-2  border-gray-200 mt-4 rounded-xl h-105 w-60 sm:w-80">
        <ListItem />
      </div>
    </div>
  );
}

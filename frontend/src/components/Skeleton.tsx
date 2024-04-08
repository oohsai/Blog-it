export const BlogSkeleton = () => {
  return (
    <div>
      <div role="status" className="max-w-sm animate-pulse"></div>
      <div className="p-4 w-screen max-w-screen-md cursor-pointer">
        <div className="flex">
          <div className="h-6 w-6 bg-gray-200 rounded-full"></div>
          <div className="font-extralight text-sm pl-2 mt-10 flex justify-center flex-col">
            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
          </div>
          <div className="pl-2 font-thin text-sm text-slate-500 flex justify-center flex-col">
            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
          </div>
        </div>
        <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
        <div className="text-lg font-semilight">
          <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        </div>
        <div className="text-slate-400 text-sm pt-2">
          <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        </div>
        <hr className=" m-[2vh] h-px my-8 bg-gray-200 border-0" />
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

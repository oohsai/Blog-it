import { AppBar } from "./Appbar";

export const BlogSkeletonBlog = () => {
  return (
    <div>
      <AppBar />
      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full max-w-screen-2xl ">
          <div className="col-span-8 p-10 ">
            <div className="h-4 w-[25vh] bg-gray-200 rounded-full mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full mb-4"></div>
          </div>
          <div className="col-span-4 px-10 p-10 text-3xl font-light">
            <div className="h-2 w-[10vh] bg-gray-200 rounded-full mb-2.5"></div>
            <div className="h-2 w-[15vh] bg-gray-200 rounded-full mb-2.5"></div>
            <div className="h-2 w-[20vh] bg-gray-200 rounded-full mb-2.5"></div>
            <div className="flex p-2">
              <div className="flex justify-center flex-col pr-2"></div>
              <div>
                <div className="flex pt-2 pl-2">
                  <div className="text-xl font-bold">
                    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                  </div>
                </div>
                <div className="text-lg pt-1 text-slate-500 pl-2">
                  <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

import { Blog } from "../hooks";
import { AppBar } from "./Appbar";
import { Avatar } from "./BlogCard";

export const BlogContent = ({ blog }: { blog: Blog }) => {
  return (
    <div className="w-h-screen flex justify-center">
      <div className="max-w-screen-2xl">
        <AppBar />
        <div className="grid grid-cols-12 px-10 w-full">
          <div className="col-span-8 p-10">
            <div className="text-5xl font-extrabold">{blog.title}</div>
            <div className="text-slate-500 pt-2">Posted on 6th April 2024</div>
            <div className="max-h-96 overflow-y-auto">
              <div className="text-md font-normal bg-red-100 p-4 whitespace-pre-wrap">
                {blog.content}
              </div>
            </div>
          </div>
          <div className="col-span-4 px-10 p-10 text-3xl font-light">
            <div className="text-lg text-slate-500 font-semibold">Author</div>
            <div className="flex p-2">
              <div className="flex justify-center flex-col pr-2">
                <Avatar size="big" name={blog.author.name || "Anonymous"} />
              </div>
              <div>
                <div className="flex pt-2 pl-2">
                  <div className="text-xl font-bold">
                    {blog.author.name || "Anonymous"}
                  </div>
                </div>
                <div className="text-lg pt-1 text-slate-500 pl-2">
                  Random Catch Phrase from the User
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

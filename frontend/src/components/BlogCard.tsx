import { Link } from "react-router-dom";

interface BlogCardProps {
  id: string;
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

export const BlogCard = ({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="p-4 w-screen max-w-screen-md cursor-pointer">
        <div className="flex">
          <Avatar name={authorName} />
          <div className="font-extralight text-sm pl-2 flex justify-center flex-col">
            {authorName}
          </div>
          <div className=" pl-2 text-[0.75vh] flex justify-center flex-col">
            &#9679;
          </div>
          <div className="pl-2 font-thin text-sm text-slate-500 flex justify-center flex-col">
            {publishedDate}
          </div>
        </div>
        <div className="text-3xl font-semibold pt-2">{title}</div>
        <div className="text-lg font-semilight">
          {content.slice(0, 100) + "..."}
        </div>
        <div className="text-slate-400 text-sm pt-2">{`${Math.ceil(
          content.length / 100
        )} min read`}</div>
        <hr className=" m-[2vh] h-px my-8 bg-gray-200 border-0" />
      </div>
    </Link>
  );
};

export function Avatar({
  name,
  size = "small",
}: {
  name: string;
  size?: "small" | "big";
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-600 rounded-full ${
        size === "small" ? "w-6 h-6" : "w-10 h-10"
      }`}
    >
      <span
        className={`${
          size === "small" ? "text-xs" : "text-md"
        } font-extralight text-gray-100 `}
      >
        {name[0]}
      </span>
    </div>
  );
}

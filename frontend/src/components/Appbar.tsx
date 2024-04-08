import { Avatar } from "./BlogCard";
import { Link } from "react-router-dom";
export const AppBar = () => {
  return (
    <div className="border-b flex justify-between px-10 py-4">
      <Link
        to={"/blogs"}
        className="flex justify-center flex-col cursor-pointer"
      >
        Medium
      </Link>
      <div>
        <Link to={"/publish"}>
          <button
            type="button"
            className="mr-8 text-white bg-green-600 hover:bg-green-700 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 "
          >
            New
          </button>
        </Link>

        <Avatar size={"big"} name="User" />
      </div>
    </div>
  );
};

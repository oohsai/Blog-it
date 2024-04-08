import { BlogContent } from "../components/BlogContent";
import { BlogSkeletonBlog } from "../components/SkeletonBlogC";
import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";

export const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({
    id: id || "",
  });
  if (loading || !blog) {
    return (
      <div>
        <BlogSkeletonBlog />
      </div>
    );
  }
  return (
    <div className="w-h-screen">
      <BlogContent blog={blog} />
    </div>
  );
};

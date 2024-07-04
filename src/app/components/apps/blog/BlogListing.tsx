import { useEffect } from "react";
import BlogCard from "./BlogCard";
import { useSelector, useDispatch } from "@/store/hooks";
import { fetchBlogPosts } from "@/store/apps/blog/BlogSlice";
import BlogFeaturedCard from "./BlogFeaturedCard";
import { BlogPostType } from "../../../(DashboardLayout)/types/apps/blog";
import { orderBy } from "lodash";
const BlogListing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(fetchBlogPosts());
  }, [dispatch]);

  const filterBlogs = (
    posts: BlogPostType[],
    sortBy: string,
    _cSearch: string
  ) => {
    // SORT BY

    if (sortBy === "newest") {
      posts = orderBy(posts, ["createdAt"], ["desc"]);
    }
    if (sortBy === "oldest") {
      posts = orderBy(posts, ["createdAt"], ["asc"]);
    }
    if (sortBy === "popular") {
      posts = orderBy(posts, ["view"], ["desc"]);
    }
    if (posts) {
      return (posts = posts.filter((t) => t.featured === false));
    }

    return posts;
  };

  const filterFeaturedpost = (posts: BlogPostType[]) => {
    return (posts = posts.filter((t) => t.featured));
  };

  const blogPosts = useSelector((state) =>
    filterBlogs(
      state.blogReducer.blogposts,
      state.blogReducer.sortBy,
      state.blogReducer.blogSearch
    )
  );
  const featuredPost = useSelector((state) =>
    filterFeaturedpost(state.blogReducer.blogposts)
  );

  return (
    <>
      <div className="grid grid-cols-12 gap-6">
        {featuredPost.map((post, index) => {
          return (
            <BlogFeaturedCard index={index} post={post} key={post.title} />
          );
        })}
        {blogPosts.map((post) => {
          return <BlogCard post={post} key={post.id} />
        })}
      </div>
    </>
  );
};

export default BlogListing;

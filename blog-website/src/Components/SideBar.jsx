import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const SideBar = () => {
  const [popularBlogs, setPopularBlogs] = useState([]);

  useEffect(() => {
    async function fetchedBlogs() {
      const url = "http://localhost:8000/blogs";
      const response = await fetch(url);
      const data = await response.json();
      setPopularBlogs(data);
    }
    fetchedBlogs();
  }, []);

  return (
    <div>
      <div>
        <h3 className="text-2xl font-semibold px-6">Latest Blogs</h3>
        <div>
          {popularBlogs.slice(0, 5).map((blog) => (
            <div
              key={blog.id}
              className="my-5 border-b-2  border-spacing-2 px-4"
            >
              <h4 className="font-medium mb-2">{blog.title}</h4>
              <Link
                to={`/blogs/${blog.id}`}
                className="text-base pb-2 hover:text-orange-400 inline-flex items-center py-1"
              >
                Read More <FaArrowRight className="mt-1 ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-semibold px-6 mt-16">Popular Blogs</h3>
        <div>
          {popularBlogs.slice(6, 10).map((blog) => (
            <div
              key={blog.id}
              className="my-5 border-b-2  border-spacing-2 px-4"
            >
              <h4 className="font-medium mb-2">{blog.title}</h4>
              <Link
                to={`/blogs/${blog.id}`}
                className="text-base pb-2 hover:text-orange-400 inline-flex items-center py-1"
              >
                Read More <FaArrowRight className="mt-1 ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;

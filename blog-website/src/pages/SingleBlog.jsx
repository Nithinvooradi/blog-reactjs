import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import SideBar from "../Components/SideBar";

const SingleBlog = () => {
  const data = useLoaderData();
  const {
    title,
    image,
    category,
    author,
    published_date,
    reading_time,
    content,
  } = data[0];
  return (
    <div>
      <div className="py-40 px-4 bg-black text-white text-center">
        <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          Single Blog Page
        </h2>
      </div>
      {/* blog details */}
      <div className="max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12 ">
        <div className="lg:w-3/4 mx-auto px-10 py-5">
          <div>
            <img src={image} alt="" className="w-full mx-auto rounded" />
          </div>
          <h2 className="text-3xl font-bold mt-8 mb-4 text-blue-500 cursor-pointer ">
            {title}
          </h2>
          <p className="mb-3 text-gray-600 flex items-center">
            <FaUser className="inline-flex items-center mr-2" />
            {author} |{" "}
            <MdOutlineDateRange className="ml-2 items-center mr-2 w-5 h-5" />{" "}
            {published_date}
          </p>
          <p className="mb-3 text-gray-600 flex items-center">
            <FaClock className="inline-flex items-center mr-2" />
            {reading_time}
          </p>
          <p className="text-base text-gray-500 mb-6">{content}</p>
          <div className="text-base text-gray-500">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              iste sequi voluptatem inventore nemo suscipit sed a? Dolorum
              commodi voluptatibus repudiandae tempore! Aliquid in ex officiis
              atque minima porro nulla.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              iste sequi voluptatem inventore nemo suscipit sed a? Dolorum
              commodi voluptatibus repudiandae tempore! Aliquid in ex officiis
              atque minima porro nulla. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Magni iste sequi voluptatem inventore nemo
              suscipit sed a? Dolorum commodi voluptatibus repudiandae tempore!
              Aliquid in ex officiis atque minima porro nulla.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              iste sequi voluptatem inventore nemo suscipit sed a? Dolorum
              commodi voluptatibus repudiandae tempore! Aliquid in ex officiis
              atque minima porro nulla. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Magni iste sequi voluptatem inventore nemo
              suscipit sed a? Dolorum commodi voluptatibus repudiandae tempore!
              Aliquid in ex officiis atque minima porro nulla.
            </p>
          </div>
        </div>
        <div className="lg:w-1/3 mt-5">
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;

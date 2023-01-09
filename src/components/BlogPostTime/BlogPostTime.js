import React from "react";
import "./BlogPostTime.css";

const BlogPostTime = ({ blogData }) => {
  return (
    <div className="blog-company-info">
      <div className="blog-company-img">
        <img src={blogData?.img} alt="" />
      </div>
      <div className="blog-company-text">
        <h3>{blogData?.title}</h3>
        <p>{blogData?.time}</p>
      </div>
    </div>
  );
};

export default BlogPostTime;

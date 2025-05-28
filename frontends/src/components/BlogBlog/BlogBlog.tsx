import BlogBlogData from "@typings/BlogBlogData";
import "./BlogBlog.css";
import { useState, useEffect } from "react";

function BlogBlog() {
  const [templateData, setTemplateData] = useState<BlogBlogData>({
    id: 0,
    title: "",
  });

  async function getServerData() {
    const request = await fetch("http://localhost:5679/blog-blog", {
      method: "POST",
    });

    const response = (await request.json()) as BlogBlogData;

    setTemplateData(response);
  }

  useEffect(() => {
    getServerData();
  }, []);

  return (
    <div className="BlogBlog banner-container-96">
      <div>{templateData.title}</div>
    </div>
  );
}

export default BlogBlog;

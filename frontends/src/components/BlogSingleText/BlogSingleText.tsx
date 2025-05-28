import "./BlogSingleText.css";
import Image7 from "./../../../public/image-7.svg";
import Badge28 from "./../../../public/badge-28.svg";
import Badge29 from "./../../../public/badge-29.svg";
import Badge30 from "./../../../public/badge-30.svg";
import Badge31 from "./../../../public/badge-31.svg";
import BlogSingleTextData from "@typings/BlogSingleTextData";
import { useState, useEffect } from "react";

function BlogSingleText() {
  const [templateData, setTemplateData] = useState<BlogSingleTextData>({
    id: 0,
    app: "",
    mainTitle: "",
    mainTitle2: "",
    subtitle1: "",
    subtitle2: "",
    subtitle3: "",
    title1: "",
    text1: "",
    text2: "",
    title2: "",
    text3: "",
    share: "",
  });

  async function getServerData() {
    const request = await fetch("http://localhost:5679/blog-single-text", {
      method: "POST",
    });

    const response = (await request.json()) as BlogSingleTextData;

    setTemplateData(response);
  }

  useEffect(() => {
    getServerData();
  }, []);

  return (
    <div className="BlogSingleText banner-center">
      <div className="center-content">
        <div className="font-app">{templateData.app}</div>
        <div className="title-1">{templateData.mainTitle}</div>
        <div className="title-1">{templateData.mainTitle2}</div>
        <div className="text-2">{templateData.subtitle1}</div>
        <div className="text-2">{templateData.subtitle2}</div>
        <div className="text-2">{templateData.subtitle3}</div>
        <img className="image-7" src={Image7} />
      </div>
      <div className="title-3">{templateData.title1}</div>
      <div className="center-content">
        <div className="text-4">
          {templateData.text1}
          <br />
          <br />
          {templateData.text2}
        </div>
      </div>
      <div className="title-3">{templateData.title2}</div>
      <div className="center-content">
        <div className="text-4">{templateData.text3}</div>
        <div className="name">{templateData.share}</div>
        <div className="flex">
          <img src={Badge28} />
          <img src={Badge29} />
          <img src={Badge30} />
          <img src={Badge31} />
        </div>
      </div>
    </div>
  );
}

export default BlogSingleText;

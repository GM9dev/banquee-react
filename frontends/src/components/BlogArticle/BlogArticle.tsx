import "./BlogArticle.css";
import Image from "./../../../public/image.svg";
import Image2 from "./../../../public/image-2.svg";
import Image3 from "./../../../public/image-3.svg";
import Image4 from "./../../../public/image-4.svg";
import Image5 from "./../../../public/image-5.svg";
import Image6 from "./../../../public/image-6.svg";
import BlogArticleData from "@typings/BlogArticleData";
import { useState, useEffect } from "react";

function BlogArticle() {
  const [templateData, setTemplateData] = useState<BlogArticleData>({
    category: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    title1: "",
    text1: "",
    title2: "",
    text2: "",
    title3: "",
    text3: "",
    title4: "",
    text4: "",
    title5: "",
    text5: "",
    title6: "",
    text6: "",
    app: "",
    product: "",
    technology: "",
  });

  async function getServerData() {
    const request = await fetch("http://localhost:5679/blog-article", {
      method: "POST",
    });

    const response = (await request.json()) as BlogArticleData;

    setTemplateData(response);
  }

  useEffect(() => {
    getServerData();
  }, []);

  return (
    <div className="BlogArticle container-blog">
      <div className="blog-options">
        <div className="name">{templateData.category}</div>
        <div className="font">{templateData.option1}</div>
        <div className="font">{templateData.option2}</div>
        <div className="font">{templateData.option3}</div>
        <div className="font">{templateData.option4}</div>
      </div>
      <section className="images-2">
        <div>
          <img className="distance-5" src={Image} />
          <div className="title-3">{templateData.title1}</div>
          <div className="text-features">{templateData.text1}</div>
          <div className="block-14">
            <div className="font">{templateData.app}</div>
            <div className="font">{templateData.technology}</div>
          </div>
        </div>
        <div>
          <img className="distance-5" src={Image2} />
          <div className="title-3">{templateData.title2}</div>
          <div className="text-features">{templateData.text2}</div>
          <div className="block-14">
            <div className="font">{templateData.technology}</div>
          </div>
        </div>
        <div>
          <img className="distance-5" src={Image3} />
          <div className="title-3">{templateData.title3}</div>
          <div className="text-features">{templateData.text3}</div>
          <div className="block-14">
            <div className="font">{templateData.app}</div>
            <div className="font">{templateData.product}</div>
          </div>
        </div>
      </section>
      <section className="images-2">
        <div>
          <img className="distance-5" src={Image4} />
          <div className="title-3">{templateData.title4}</div>
          <div className="text-features">{templateData.text4}</div>
          <div className="block-14">
            <div className="font">{templateData.product}</div>
            <div className="font">{templateData.technology}</div>
          </div>
        </div>
        <div>
          <img className="distance-5" src={Image5} />
          <div className="title-3">{templateData.title5}</div>
          <div className="text-features">{templateData.text5}</div>
          <div className="block-14">
            <div className="font">{templateData.app}</div>
          </div>
        </div>
        <div>
          <img className="distance-5" src={Image6} />
          <div className="title-3">{templateData.title6}</div>
          <div className="text-features">{templateData.text6}</div>
          <div className="block-14">
            <div className="font">{templateData.technology}</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogArticle;

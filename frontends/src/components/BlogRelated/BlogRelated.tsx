import "./BlogRelated.css";
import Vector3 from "./../../assets/Vector-3.svg";
import Image from "./../../../public/image.svg";
import Image2 from "./../../../public/image-2.svg";
import Image3 from "./../../../public/image-3.svg";
import BlogRelatedData from "@typings/BlogRelatedData";
import { useState, useEffect } from "react";

function BlogRelated() {
  const [templateData, setTemplateData] = useState<BlogRelatedData>({
    mainTitle: "",
    link: "",
    title1: "",
    text: "",
    title2: "",
    title3: "",
    product: "",
    technology: "",
  });

  async function getServerData() {
    const request = await fetch("http://localhost:5679/blog-related", {
      method: "POST",
    });

    const response = (await request.json()) as BlogRelatedData;

    setTemplateData(response);
  }

  useEffect(() => {
    getServerData();
  }, []);

  return (
    <div className="BlogRelated banner-container-160">
      <div className="banner-content">
        <div>
          <section className="block-13">
            <div className="title-1">{templateData.mainTitle}</div>
            <div className="all-features">
              {templateData.link}
              <img className="vector-3" src={Vector3} />
            </div>
          </section>
          <section className="images-2">
            <div>
              <img className="distance-5" src={Image} />
              <div className="title-3">{templateData.title1}</div>
              <div className="text-features">{templateData.text}</div>
              <div className="block-14">
                <div className="font">{templateData.product}</div>
                <div className="font">{templateData.technology}</div>
              </div>
            </div>
            <div>
              <img className="distance-5" src={Image2} />
              <div className="title-3">{templateData.title2}</div>
              <div className="text-features">{templateData.text}</div>
              <div className="block-14">
                <div className="font">{templateData.product}</div>
                <div className="font">{templateData.technology}</div>
              </div>
            </div>
            <div>
              <img className="distance-5" src={Image3} />
              <div className="title-3">{templateData.title3}</div>
              <div className="text-features">{templateData.text}</div>
              <div className="block-14">
                <div className="font">{templateData.product}</div>
                <div className="font">{templateData.technology}</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default BlogRelated;

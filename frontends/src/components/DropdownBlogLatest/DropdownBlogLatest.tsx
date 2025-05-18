import "./DropdownBlogLatest.css";
import Vector3 from "./../../assets/Vector-3.svg";
import Image8 from "./../../../public/image-8.svg";
import Image9 from "./../../../public/image-9.svg";
import Image10 from "./../../../public/image-10.svg";
import Image11 from "./../../../public/image-11.svg";
import DropdownBlogLatestData from "@typings/DropdownBlogLatestData";
import { useState, useEffect } from "react";

function DropdownBlogLatest() {
  const [templateData, setTemplateData] = useState<DropdownBlogLatestData>({
    category: "",
    option1: "",
    option2: "",
    option3: "",
    link: "",
    mainTitle: "",
    title1: "",
    title2: "",
    text: "",
  });

  async function getServerData() {
    const request = await fetch("http://localhost:5679/dropdown-blog-latest", {
      method: "POST",
    });

    const response = (await request.json()) as DropdownBlogLatestData;

    setTemplateData(response);
  }

  useEffect(() => {
    getServerData();
  }, []);

  return (
    <div className="DropdownBlogLatest banner-container-32">
      <div className="container-one">
        <div className="left">
          <div className="name">{templateData.category}</div>
          <div className="text-features text-5">{templateData.option1}</div>
          <div className="text-features text-5">{templateData.option2}</div>
          <div className="text-features text-5">{templateData.option3}</div>
          <div className="all-features">
            {templateData.link}
            <img className="vector-3" src={Vector3} />
          </div>
        </div>
        <div className="right">
          <div className="info">{templateData.mainTitle}</div>
          <div className="right-block">
            <div className="white-backgroud">
              <img className="last-images" src={Image8} />
              <div className="right-pad">
                <div className="name">{templateData.title1}</div>
                <div className="money">{templateData.text}</div>
              </div>
            </div>
            <div className="grey-background">
              <img className="last-images" src={Image9} />
              <div>
                <div className="name">{templateData.title2}</div>
                <div className="money">{templateData.text}</div>
              </div>
            </div>
            <div className="grey-background">
              <img className="last-images" src={Image10} />
              <div>
                <div className="name">{templateData.title2}</div>
                <div className="money">{templateData.text}</div>
              </div>
            </div>
            <div className="grey-background">
              <img className="last-images" src={Image11} />
              <div>
                <div className="name">{templateData.title2}</div>
                <div className="money">{templateData.text}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DropdownBlogLatest;

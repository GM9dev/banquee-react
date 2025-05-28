import Vector3Image from "./../../assets/Vector-3.svg";
import "./SiteBlog.css";
import { useState, useEffect } from "react";
import SiteBlogData from "@typings/SiteBlogData";

function SiteBlog() {
  const [templateData, setTemplateData] = useState<SiteBlogData>({
    id: 0,
    title: "",
    options: "",
    boxes: [],
  });

  async function getServerData() {
    const request = await fetch("http://localhost:5679/site-blog", {
      method: "POST",
    });

    const response = (await request.json()) as SiteBlogData;

    setTemplateData(response);
  }

  useEffect(() => {
    getServerData();
  }, []);

  return (
    <div className="SiteBlog banner-container-160">
      <div className="banner-content">
        <div>
          <section className="block-13">
            <div className="title-1">{templateData.title}</div>
            <div className="all-features">
              {templateData.options}
              <img className="vector-3" src={Vector3Image} />
            </div>
          </section>
          <section className="images-2">
            {templateData.boxes.map((itemBoxes, index) => {
              return (
                <div key={index}>
                  <img className="distance-5" src={itemBoxes.image} />
                  <div className="title-3">{itemBoxes.title}</div>
                  <div className="text-features">{itemBoxes.text}</div>
                  <div className="block-14">
                    <div className="font">{itemBoxes.link1}</div>
                    <div className="font">{itemBoxes.link2}</div>
                  </div>
                </div>
              );
            })}
            <div></div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default SiteBlog;

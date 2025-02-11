import Frame85Image from "./../../assets/Frame 8-5.svg";
import Vector3Image from "./../../assets/Vector-3.svg";
import "./SiteOrganize.css";
import { useEffect, useState } from "react";
import SiteOrganizeData from "@typings/SiteOrganizeData";

function SiteOrganize() {
  const [templateData, setTemplateData] = useState<SiteOrganizeData>({
    subTitle: "",
    mainTitle: "",
    description: "",
    options: "",
    boxes: [],
  });

  async function getServerData() {
    const request = await fetch("http://localhost:5679/site-organize", {
      method: "POST",
    });

    const response = (await request.json()) as SiteOrganizeData;

    setTemplateData(response);
  }

  useEffect(() => {
    getServerData();
  }, []);

  return (
    <div className="SiteOrganize banner-container-160">
      <div className="banner-content">
        <div className="block-4">
          <section className="block-one">
            <div className="info">{templateData.subTitle}</div>
            <div className="title-1">{templateData.mainTitle}</div>
            <p className="text-2">{templateData.description}</p>
          </section>
          <section className="block-two">
            <div className="all-features">
              {templateData.options}
              <img className="vector-3" src={Vector3Image} />
            </div>
          </section>
        </div>
        <div className="items">
          {templateData.boxes.map((itemBoxes, index) => {
            return (
              <div key={index}>
                <img src={itemBoxes.image} />
                <div className="info">{itemBoxes.goals}</div>
                <div className="money">{itemBoxes.price}</div>
              </div>
            );
          })}
          <div>
            <img src={Frame85Image} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SiteOrganize;

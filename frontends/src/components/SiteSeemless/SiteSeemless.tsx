import { useEffect, useState } from "react";
import BadgeImage from "./../../assets/badge.svg";
import GridImage from "./../../assets/grid.svg";
import "./SiteSeemless.css";
import SiteSeemlessData from "@typings/SiteSeemlessData";

function SiteSeemless() {
  const [templateData, setTemplateData] = useState<SiteSeemlessData>({
    subTitle: "",
    mainTitle: "",
    description: "",
    listBenefits: [],
  });

  async function getServerData() {
    const request = await fetch("http://localhost:5679/site-seemless", {
      method: "POST",
    });

    const response = (await request.json()) as SiteSeemlessData;

    setTemplateData(response);
  }

  useEffect(() => {
    getServerData();
  }, []);

  return (
    <div className="SiteSeemless banner-container-160">
      <div className="banner-content">
        <section className="image-grid">
          <img className="grid" src={GridImage} />
        </section>
        <section className="block-6">
          <div className="first-block-2">
            <div className="info">{templateData.subTitle}</div>
            <div className="title-1">{templateData.mainTitle}</div>
            <p className="text-3">{templateData.description}</p>
          </div>
          <div className="second-block">
            <div className="list-2">
              {templateData.listBenefits.map((itemBenefit, index) => {
                return (
                  <div key={index} className="text-4">
                    <img className="badge-4" src={BadgeImage} />
                    {itemBenefit}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default SiteSeemless;

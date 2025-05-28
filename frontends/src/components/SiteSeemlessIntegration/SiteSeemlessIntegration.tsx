import { useEffect, useState } from "react";
import BadgeImage from "./../../assets/badge.svg";
import GridImage from "./../../assets/grid.svg";
import "./SiteSeemlessIntegration.css";
import SiteSeemlessIntegrationData from "@typings/SiteSeemlessIntegrationData";

function SiteSeemlessIntegration() {
  const [templateData, setTemplateData] = useState<SiteSeemlessIntegrationData>(
    {
      id: 0,
      subTitle: "",
      mainTitle: "",
      description: "",
      listBenefits: [],
    }
  );

  async function getServerData() {
    const request = await fetch(
      "http://localhost:5679/site-seemless-integration",
      {
        method: "POST",
      }
    );

    const response = (await request.json()) as SiteSeemlessIntegrationData;

    setTemplateData(response);
  }

  useEffect(() => {
    getServerData();
  }, []);

  return (
    <div className="SiteSeemlessIntegration banner-container-160">
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

export default SiteSeemlessIntegration;

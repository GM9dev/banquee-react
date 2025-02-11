import Grid2Image from "./../../assets/grid-2.svg";
import Vector3Image from "./../../assets/Vector-3.svg";
import BadgeImage from "./../../assets/badge.svg";
import "./SiteStay.css";
import { useEffect, useState } from "react";
import SiteStayData from "@typings/SiteStayData";

function SiteStay() {
  const [templateData, setTemplateData] = useState<SiteStayData>({
    subTitle: "",
    mainTitle: "",
    description: "",
    listBenefits: [""],
    options: "",
  });

  async function getServerData() {
    const request = await fetch("http://localhost:5679/site-stay", {
      method: "POST",
    });

    const response = (await request.json()) as SiteStayData;

    setTemplateData(response);
  }

  useEffect(() => {
    getServerData();
  }, []);

  return (
    <div className="SiteStay banner-container-160">
      <div className="banner-content">
        <div className="block-5">
          <section className="section-1">
            <div className="block-text">
              <div className="info">{templateData.subTitle}</div>
              <div className="title-1">{templateData.mainTitle}</div>
              <p className="text-3">{templateData.description}</p>
              <div className="list">
                {templateData.listBenefits.map((itemBenefit, index) => {
                  return (
                    <div key={index} className="list-margin">
                      <img className="badge" src={BadgeImage} />
                      {itemBenefit}
                    </div>
                  );
                })}
              </div>
              <div className="compare-cards">
                {templateData.options}
                <img className="vector-3" src={Vector3Image} />
              </div>
            </div>
          </section>
          <section className="grid-2">
            <img src={Grid2Image} />
          </section>
        </div>
      </div>
    </div>
  );
}

export default SiteStay;

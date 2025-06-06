import App3Image from "./../../assets/app-3.svg";
import Grid3Image from "./../../assets/grid-3.svg";
import Badge10Image from "./../../assets/badge-10.svg";
import "./SiteOneApp2.css";
import { useState, useEffect } from "react";
import SiteOneApp2Data from "@typings/SiteOneApp2Data";

function SiteOneApp2() {
  const [templateData, setTemplateData] = useState<SiteOneApp2Data>({
    id: 0,
    mainTitle: "",
    description: "",
    listBenefits: [],
  });

  async function getServerData() {
    const request = await fetch("http://localhost:5679/site-one-app-2", {
      method: "POST",
    });

    const response = (await request.json()) as SiteOneApp2Data;

    setTemplateData(response);
  }

  useEffect(() => {
    getServerData();
  }, []);

  return (
    <div className="SiteOneApp2 banner-container">
      <div className="banner-content">
        <section className="block-10">
          <div className="title-1">{templateData.mainTitle}</div>
          <div className="text-4">{templateData.description}</div>
          <div className="four-benefits">
            {templateData.listBenefits.map((itemBenefit, index) => {
              return (
                <div key={index} className="text-features">
                  <img className="badge" src={Badge10Image} />
                  {itemBenefit}
                </div>
              );
            })}
          </div>
          <img src={Grid3Image} />
        </section>
        <section>
          <img className="app" src={App3Image} />
        </section>
      </div>
    </div>
  );
}

export default SiteOneApp2;

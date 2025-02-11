import { useEffect, useState } from "react";
import Cards2Image from "./../../assets/cards-2.svg";
import "./SitePerfect.css";
import SitePerfectData from "@typings/SitePerfectData";

function SitePerfect() {
  const [templateData, setTemplateData] = useState<SitePerfectData>({
    subTitle: "",
    mainTitle: "",
    mainTitle2: "",
    description: "",
    description2: "",
    mainButtonText: "",
    secondButtonText: "",
  });

  async function getServerData() {
    const request = await fetch("http://localhost:5679/site-perfect", {
      method: "POST",
    });

    const response = (await request.json()) as SitePerfectData;

    setTemplateData(response);
  }

  useEffect(() => {
    getServerData();
  }, []);

  return (
    <div className="SitePerfect banner-container-160">
      <div className="banner-content">
        <div className="block-7">
          <div className="info">{templateData.subTitle}</div>
          <div className="title-h2">{templateData.mainTitle}</div>
          <div className="title-h2 bottom">{templateData.mainTitle2}</div>
          <p className="text-2">{templateData.description}</p>
          <p className="text-2">{templateData.description2}</p>
          <img className="cards-three" src={Cards2Image} />
          <div className="buttons">
            <div className="green-button-2">{templateData.mainButtonText}</div>
            <div className="compare-cards-2">
              {templateData.secondButtonText}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SitePerfect;

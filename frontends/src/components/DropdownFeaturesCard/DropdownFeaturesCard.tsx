import "./DropdownFeaturesCard.css";
import Card9 from "./../../../public/card-9.svg";
import Card10 from "./../../../public/card-10.svg";
import Card11 from "./../../../public/card-11.svg";
import DropdownFeaturesCardData from "@typings/DropdownFeaturesCardData";
import { useState, useEffect } from "react";

function DropdownFeaturesCard() {
  const [templateData, setTemplateData] = useState<DropdownFeaturesCardData>({
    id: 0,
    plan1: "",
    plan2: "",
    plan3: "",
    info: "",
    text: "",
  });

  async function getServerData() {
    const request = await fetch("http://localhost:5679/compare-the-ideal", {
      method: "POST",
    });

    const response = (await request.json()) as DropdownFeaturesCardData;

    setTemplateData(response);
  }

  useEffect(() => {
    getServerData();
  }, []);

  return (
    <div className="DropdownFeaturesCard banner-container-96">
      <section className="block-plans">
        <div className="block-columm">
          <div className="block-popular">
            <div className="info">{templateData.plan1}</div>
            <div className="green-button-2">{templateData.info}</div>
          </div>
          <div className="money">{templateData.text}</div>
          <img className="cards-padd" src={Card9} />
        </div>
        <div className="block-columm">
          <div className="info">{templateData.plan2}</div>
          <div className="money">{templateData.text}</div>
          <img className="cards-padd" src={Card10} />
        </div>
        <div className="block-columm">
          <div className="info">{templateData.plan3}</div>
          <div className="money">{templateData.text}</div>
          <img className="cards-padd" src={Card11} />
        </div>
      </section>
    </div>
  );
}

export default DropdownFeaturesCard;

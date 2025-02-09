import "./FeaturesAllIn.css";
import { useEffect, useState } from "react";
import Vector3 from "./../../assets/Vector-3.svg";
import Card3 from "./../../assets/card-3.svg";
import Card4 from "./../../assets/card-4.svg";
import Card5 from "./../../assets/card-5.svg";
import FeaturesAllInData from "@typings/FeaturesAllInData";

function FeaturesAllIn() {
  const [templateData, setTemplateData] = useState<FeaturesAllInData>({
    info: "",
    mainTitle: "",
    description: "",
    description2: "",
    button1: "",
    button2: "",
  });

  async function getServerData() {
    const request = await fetch("http://localhost:5679/features-all-in", {
      method: "POST",
    });

    const response = (await request.json()) as FeaturesAllInData;

    setTemplateData(response);
  }

  useEffect(() => {
    getServerData();
  }, []);

  return (
    <div className="FeaturesAllIn container-size-1">
      <div className="block-one block-columm">
        <div className="info">{templateData.info}</div>
        <div className="title-h2">{templateData.mainTitle}</div>
        <div className="text-2">{templateData.description}</div>
        <div className="text-2">{templateData.description2}</div>
        <div className="buttons">
          <div className="green-button">{templateData.button1}</div>
          <div className="compare-cards">
            {templateData.button2}
            <img className="vector-3" src={Vector3} />
          </div>
        </div>
      </div>
      <div className="cards">
        <img className="card" src={Card3} />
        <img className="card" src={Card4} />
        <img className="card" src={Card5} />
        <img className="card" src={Card4} />
        <img className="card" src={Card3} />
      </div>
    </div>
  );
}

export default FeaturesAllIn;

import "./CompareTheIdeal.css";
import Cards3 from "./../../../public/cards-3.svg";
import { useEffect, useState } from "react";
import CompareTheIdealData from "@typings/CompareTheIdealData";

function CompareTheIdeal() {
  const [templateData, setTemplateData] = useState<CompareTheIdealData>({
    id: 0,
    info: "",
    title1: "",
    title2: "",
  });

  async function getServerData() {
    const request = await fetch("http://localhost:5679/compare-the-ideal", {
      method: "POST",
    });

    const response = (await request.json()) as CompareTheIdealData;

    setTemplateData(response);
  }

  useEffect(() => {
    getServerData();
  }, []);

  return (
    <div className="CompareTheIdeal background-color">
      <div className="banner-container-128 containers">
        <div>
          <div className="info">{templateData.info}</div>
          <div className="title-h2">{templateData.title1}</div>
          <div className="title-h2">{templateData.title2}</div>
        </div>
        <div>
          <img className="card-3" src={Cards3} />
        </div>
      </div>
    </div>
  );
}

export default CompareTheIdeal;

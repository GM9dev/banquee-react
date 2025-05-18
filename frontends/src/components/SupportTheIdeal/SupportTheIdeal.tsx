import "./SupportTheIdeal.css";
import App10 from "./../../../public/app-10.svg";
import SupportTheIdealData from "@typings/SupportTheIdealData";
import { useState, useEffect } from "react";

function SupportTheIdeal() {
  const [templateData, setTemplateData] = useState<SupportTheIdealData>({
    info: "",
    text1: "",
    text2: "",
  });

  async function getServerData() {
    const request = await fetch("http://localhost:5679/support-the-ideal", {
      method: "POST",
    });

    const response = (await request.json()) as SupportTheIdealData;

    setTemplateData(response);
  }

  useEffect(() => {
    getServerData();
  }, []);

  return (
    <div className="SupportTheIdeal background-color">
      <div className="banner-container-128 containers">
        <div>
          <div className="info">{templateData.info}</div>
          <div className="title-h2">{templateData.text1}</div>
          <div className="title-h2">{templateData.text2}</div>
        </div>
        <div>
          <img className="app-10" src={App10} />
        </div>
      </div>
    </div>
  );
}

export default SupportTheIdeal;

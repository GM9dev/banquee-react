import "./FeaturesAllIn2.css";
import Cel from "./../../assets/app-9.svg";
import Card4 from "./../../assets/card-4.svg";
import Card5 from "./../../assets/card-5.svg";
import Card6 from "./../../assets/card-6.svg";
import Grid4 from "./../../assets/grid-4.svg";
import Grid5 from "./../../assets/grid-5.svg";
import Grid6 from "./../../assets/grid-6.svg";
import { useEffect, useState } from "react";
import FeaturesAllIn2Data from "@typings/FeaturesAllIn2Data";

function FeaturesAllIn2() {
  const [templateData, setTemplateData] = useState<FeaturesAllIn2Data>({
    mainTitle: "",
    mainText: "",
    mainText2: "",
    subTitle1: "",
    subTitle2: "",
    subTitle3: "",
    subTitle4: "",
    subTitle5: "",
    text1: "",
    text2: "",
    subtext: "",
  });

  async function getServerData() {
    const request = await fetch("http://localhost:5679/features-all-in-2", {
      method: "POST",
    });

    const response = (await request.json()) as FeaturesAllIn2Data;

    setTemplateData(response);
  }

  useEffect(() => {
    getServerData();
  }, []);

  return (
    <div className="FeaturesAllIn2 banner-container-160">
      <div className="block-columm">
        <div className="block-columm">
          <div className="title-1">{templateData.mainTitle}</div>
          <div className="text-2">{templateData.mainText}</div>
          <div className="text-2">{templateData.mainText2}</div>
        </div>
        <div className="block-two">
          <div className="background size-1">
            <div className="title-3">{templateData.subTitle1}</div>
            <div className="text-4">{templateData.text1}</div>
            <div className="text-4">{templateData.text2}</div>
            <img className="cel" src={Cel} />
          </div>
          <div className="background size-1">
            <div className="title-3">{templateData.subTitle2}</div>
            <div className="text-4">{templateData.text1}</div>
            <div className="text-4">{templateData.text2}</div>
            <div className="cards-three">
              <img className="card-6" src={Card4} />
              <img className="card-7" src={Card5} />
              <img className="card-8" src={Card6} />
            </div>
          </div>
        </div>
        <div className="block-two">
          <div className="background size-10">
            <div className="title-3">{templateData.subTitle3}</div>
            <div className="text-4">{templateData.subtext}</div>
            <img className="grid-4" src={Grid4} />
          </div>
          <div className="background size-10">
            <div className="title-3">{templateData.subTitle4}</div>
            <div className="text-4">{templateData.subtext}</div>
            <img className="grid-5" src={Grid5} />
          </div>
          <div className="background size-10">
            <div className="title-3">{templateData.subTitle5}</div>
            <div className="text-4">{templateData.subtext}</div>
            <img className="grid-6" src={Grid6} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturesAllIn2;

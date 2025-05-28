import { useEffect, useState } from "react";
import "./FeaturesChooseYourCard.css";
import Card9 from "./../../assets/card-9.svg";
import Card10 from "./../../assets/card-10.svg";
import Card11 from "./../../assets/card-10.svg";
import Component from "./../../assets/Component 2.svg";
import FeaturesChooseYourCardData from "@typings/FeaturesChooseYourCardData";

function FeaturesChooseYourCard() {
  const [templateData, setTemplateData] = useState<FeaturesChooseYourCardData>({
    id: 0,
    subtTitle: "",
    mainTitle: "",
    mainText1: "",
    mainText2: "",
    info1: "",
    subInfo: "",
    info2: "",
    info3: "",
    title1: "",
    price1: "",
    title2: "",
    price2: "",
    title3: "",
    text1: "",
    text2: "",
  });

  async function getServerData() {
    const request = await fetch(
      "http://localhost:5679/features-choose-your-card",
      {
        method: "POST",
      }
    );

    const response = (await request.json()) as FeaturesChooseYourCardData;

    setTemplateData(response);
  }

  useEffect(() => {
    getServerData();
  }, []);

  return (
    <div className="FeaturesChooseYourCard banner-container-160">
      <section className="block-choose">
        <div className="info">{templateData.subtTitle}</div>
        <div className="title-1">{templateData.mainTitle}</div>
        <div className="text-2">{templateData.mainText1}</div>
        <div className="text-2">{templateData.mainText2}</div>
      </section>
      <section className="block-plans">
        <div className="block-columm">
          <div className="block-popular">
            <div className="info">{templateData.info1}</div>
            <div className="green-button-2">{templateData.subInfo}</div>
          </div>
          <div className="block-price">
            <div className="title-2">{templateData.title1}</div>
          </div>
          <div className="text-features color">{templateData.text1}</div>
          <div className="text-features color">{templateData.text2}</div>
          <img className="cards-padd" src={Card9} />
          <img src={Component} />
        </div>
        <div className="block-columm">
          <div className="info">{templateData.info2}</div>
          <div className="block-price">
            <div className="title-2">{templateData.price1}</div>
            <div className="text-features color">{templateData.title2}</div>
          </div>
          <div className="text-features color">{templateData.text1}</div>
          <div className="text-features color">{templateData.text2}</div>
          <img className="cards-padd" src={Card10} />
          <img src={Component} />
        </div>
        <div className="block-columm">
          <div className="info">{templateData.info3}</div>
          <div className="block-price">
            <div className="title-2">{templateData.price2}</div>
            <div className="text-features color">{templateData.title3}</div>
          </div>
          <div className="text-features color">{templateData.text1}</div>
          <div className="text-features color">{templateData.text2}</div>
          <img className="cards-padd" src={Card11} />
          <img src={Component} />
        </div>
      </section>
    </div>
  );
}

export default FeaturesChooseYourCard;

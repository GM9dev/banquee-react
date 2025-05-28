import "./FeaturesSendManageKeepLorem.css";
import App4 from "./../../assets/app-4.svg";
import App5 from "./../../assets/app-5.svg";
import App6 from "./../../assets/app-6.svg";
import App7 from "./../../assets/app-7.svg";
import Badge from "./../../assets/badge.svg";
import { useEffect, useState } from "react";
import FeaturesSendManageKeepLoremData from "@typings/FeaturesSendManageKeepLoremData";

function FeaturesSendManageKeepLorem() {
  const [templateData, setTemplateData] =
    useState<FeaturesSendManageKeepLoremData>({
      id: 0,
      info: "",
      info2: "",
      info3: "",
      info4: "",
      title: "",
      title2: "",
      title3: "",
      title4: "",
      text: "",
      option1: "",
      option2: "",
      option3: "",
    });

  async function getServerData() {
    const request = await fetch(
      "http://localhost:5679/features-send-manage-keep-lorem",
      {
        method: "POST",
      }
    );

    const response = (await request.json()) as FeaturesSendManageKeepLoremData;

    setTemplateData(response);
  }

  useEffect(() => {
    getServerData();
  }, []);

  return (
    <div className="FeaturesSendManageKeepLorem banner-container-160 container">
      <section className="box">
        <div className="box-1">
          <div className="info">{templateData.info}</div>
          <div className="title-1">{templateData.title}</div>
          <div className="text-3">{templateData.text}</div>
          <div className="three-ben">
            <div className="text-4">
              <img className="badge" src={Badge} /> {templateData.option1}
            </div>
            <div className="text-4">
              <img className="badge" src={Badge} /> {templateData.option2}
            </div>
            <div className="text-4">
              <img className="badge" src={Badge} /> {templateData.option3}
            </div>
          </div>
        </div>
        <div>
          <img src={App4} />
        </div>
      </section>
      <section className="box">
        <div className="box-1">
          <div className="info">{templateData.info2}</div>
          <div className="title-1 distance-6">{templateData.title2}</div>
          <div className="text-3">{templateData.text}</div>
          <div className="three-ben">
            <div className="text-4">
              <img className="badge" src={Badge} /> {templateData.option1}
            </div>
            <div className="text-4">
              <img className="badge" src={Badge} /> {templateData.option2}
            </div>
            <div className="text-4">
              <img className="badge" src={Badge} /> {templateData.option3}
            </div>
          </div>
        </div>
        <div>
          <img src={App5} />
        </div>
      </section>
      <section className="box">
        <div className="box-1">
          <div className="info">{templateData.info3}</div>
          <div className="title-1 distance-7">{templateData.title3}</div>
          <div className="text-3">{templateData.text}</div>
          <div className="three-ben">
            <div className="text-4">
              <img className="badge" src={Badge} /> {templateData.option1}
            </div>
            <div className="text-4">
              <img className="badge" src={Badge} /> {templateData.option2}
            </div>
            <div className="text-4">
              <img className="badge" src={Badge} /> {templateData.option3}
            </div>
          </div>
        </div>
        <div>
          <img src={App6} />
        </div>
      </section>
      <section className="box">
        <div className="box-1">
          <div className="info">{templateData.info4}</div>
          <div className="title-1 distance-8">{templateData.title4}</div>
          <div className="text-3">{templateData.text}</div>
          <div className="three-ben">
            <div className="text-4">
              <img className="badge" src={Badge} /> {templateData.option1}
            </div>
            <div className="text-4">
              <img className="badge" src={Badge} /> {templateData.option2}
            </div>
            <div className="text-4">
              <img className="badge" src={Badge} /> {templateData.option3}
            </div>
          </div>
        </div>
        <div>
          <img src={App7} />
        </div>
      </section>
    </div>
  );
}

export default FeaturesSendManageKeepLorem;

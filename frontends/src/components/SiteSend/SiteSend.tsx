import Transactions2Image from "./../../assets/transactions-2.svg";
import Badge8Image from "./../../assets/badge-8.svg";
import "./SiteSend.css";
import { useState, useEffect } from "react";
import SiteSendData from "@typings/SiteSendData";

function SiteSend() {
  const [templateData, setTemplateData] = useState<SiteSendData>({
    id: 0 - 1,
    mainTitle: "",
    description: "",
    listBenefits: [],
  });

  async function getServerData() {
    const request = await fetch("http://localhost:5679/site-send", {
      method: "POST",
    });

    const response = (await request.json()) as SiteSendData;

    setTemplateData(response);
  }

  useEffect(() => {
    getServerData();
  }, []);

  return (
    <div className="SiteSend banner-container-128 background-green">
      <div className="banner-content">
        <div className="block-3">
          <section>
            <div className="first-block-4">
              <div className="title-1">
                {templateData.mainTitle}
                <p className="text-2">{templateData.description}</p>
              </div>
            </div>
            <div className="three-ben">
              {templateData.listBenefits.map((itemBenefit, index) => {
                return (
                  <div key={index} className="text-4">
                    <img className="img-ben" src={Badge8Image} /> {itemBenefit}
                  </div>
                );
              })}
            </div>
          </section>
          <section className="position-img">
            <img className="transactions" src={Transactions2Image} />
          </section>
        </div>
      </div>
    </div>
  );
}

export default SiteSend;

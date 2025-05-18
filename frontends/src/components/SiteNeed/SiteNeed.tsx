import RiCloseImage from "./../../assets/ri_close-fill.svg";
import RiAddImage from "./../../assets/ri_add-fill.svg";
import Vector3Image from "./../../assets/Vector-3.svg";
import Badge12Image from "./../../assets/badge-12.svg";
import Badge11Image from "./../../assets/badge-11.svg";
import "./SiteNeed.css";
import { useState, useEffect } from "react";
import SiteNeedData from "@typings/SiteNeedData";

function SiteNeed() {
  const [templateData, setTemplateData] = useState<SiteNeedData>({
    mainTitle: "",
    contactPhoneNumber: "",
    contactNumber: "",
    email: "",
    contactEmail: "",
    option: "",
    faqList: [],
  });

  async function getServerData() {
    const request = await fetch("http://localhost:5679/site-need", {
      method: "POST",
    });

    const response = (await request.json()) as SiteNeedData;

    setTemplateData(response);
  }

  useEffect(() => {
    getServerData();
  }, []);

  return (
    <div className="SiteNeed banner-container-160">
      <div className="banner-content">
        <div className="block-11">
          <section className="block-12">
            <div className="title-1">{templateData.mainTitle}</div>
            <div className="position-txt-2 distance-1">
              <img className="size-img" src={Badge11Image} />
              <div className="size-7">
                <div className="name">{templateData.contactPhoneNumber}</div>
                <div className="money">{templateData.contactNumber}</div>
              </div>
            </div>
            <div className="position-txt-2">
              <img className="size-img" src={Badge12Image} />
              <div className="size-7">
                <div className="name">{templateData.email}</div>
                <div className="money">{templateData.contactEmail}</div>
              </div>
            </div>
            <div className="compare-cards-3">
              {templateData.option}
              <img className="vector-3" src={Vector3Image} />
            </div>
          </section>
          <section className="block-12">
            {templateData.faqList.map((item, index) => {
              return (
                <div key={index} className="distance-4 padding border-bottom">
                  <div className="item-header">
                    <div className="info distance-1">{item.question}</div>
                    <img
                      className="add-img"
                      src={item.answer !== "" ? RiCloseImage : RiAddImage}
                    />
                  </div>

                  {item.answer !== "" ? (
                    <div className="color text-features distance-1">
                      {item.answer}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
          </section>
        </div>
      </div>
    </div>
  );
}

export default SiteNeed;

import RatingImage from "./../../assets/rating.svg";
import Badge9Image from "./../../assets/badge-9.svg";
import "./SitePeople.css";
import { useState, useEffect } from "react";
import SitePeopleData from "@typings/SitePeopleData";

function SitePeople() {
  const [templateData, setTemplateData] = useState<SitePeopleData>({
    subTitle: "",
    mainTitle: "",
    info: "",
    boxes: [],
  });

  async function getServerData() {
    const request = await fetch("http://localhost:5679/site-people", {
      method: "POST",
    });

    const response = (await request.json()) as SitePeopleData;

    setTemplateData(response);
  }

  useEffect(() => {
    getServerData();
  }, []);

  return (
    <div className="SitePeople banner-container-160">
      <div className="banner-content banner-size">
        <div className="block-8">
          <section>
            <div className="info">{templateData.subTitle}</div>
            <div className="title-1">{templateData.mainTitle}</div>
          </section>
          <section className="position-txt">
            <div className="text-4">
              <img className="distance-2" src={Badge9Image} />
              Rated <div className="green">4.8/5</div> from over 1000 users
            </div>
          </section>
        </div>
        <div className="block-9">
          {templateData.boxes.map((item, index) => {
            return (
              <div key={index} className={`size size-${index + 1}`}>
                <img className="rating" src={RatingImage} />
                <div className="title-3">{item.title}</div>
                <div className="distance-3">
                  <div
                    className="text-features"
                    dangerouslySetInnerHTML={{ __html: item.text }}
                  />
                </div>
                <div className="name">{item.name}</div>
                <div className="money">{item.job}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SitePeople;

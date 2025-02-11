import CardImage from "./../../assets/card.svg";
import AppImage from "./../../assets/app.svg";
import "./SiteOneApp.css";
import { useEffect, useState } from "react";

type SiteOneAppData = {
  mainTitle: string;
  appBoxes: Array<{ title: string; desc: string; image: string }>;
};

function SiteOneApp() {
  const [templateData, setTemplateData] = useState<SiteOneAppData>({
    mainTitle: "",
    appBoxes: [],
  });

  async function getServerData() {
    const request = await fetch("http://localhost:5679/site-one-app", {
      method: "POST",
    });

    const response = (await request.json()) as SiteOneAppData;

    setTemplateData(response);
  }

  useEffect(() => {
    getServerData();
  }, []);

  return (
    <div className="SiteOneApp banner-container-160">
      <div className="banner-content">
        <div className="block-2">
          <section className="first-block-3">
            <div className="title-h2">{templateData.mainTitle}</div>
            <div className="six-features">
              {templateData.appBoxes.map((itemBoxes, index) => {
                return (
                  <div key={index} className="app-boxes">
                    <img className="images" src={itemBoxes.image} />
                    <div className="app-titles">{itemBoxes.title}</div>
                    <div className="text-features">{itemBoxes.desc}</div>
                  </div>
                );
              })}
            </div>
          </section>
          <section className="app-image">
            <img src={AppImage} />
            <img className="card-image" src={CardImage} />
          </section>
        </div>
      </div>
    </div>
  );
}

export default SiteOneApp;

// TODO: type to model template data
// hint bonus: app-boxes are Array<{ title1: string; title2: string; desc: string }>
// use map to loop throught the app-boxes template
// google: react map array of objects

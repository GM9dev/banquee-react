import CardImage from "./../../assets/card.svg";
import AppImage from "./../../assets/app.svg";
import Badge7Image from "./../../assets/badge-7.svg";
import Badge6Image from "./../../assets/badge-6.svg";
import Badge5Image from "./../../assets/badge-5.svg";
import Badge4Image from "./../../assets/badge-4.svg";
import Badge3Image from "./../../assets/badge-3.svg";
import Badge2Image from "./../../assets/badge-2.svg";
import "./SiteOneApp.css";

type SiteOneAppData = {
  mainTitle: string;
  appBoxes: Array<{ title: string; desc: string; image: string }>;
};

function SiteOneApp() {
  const templateData: SiteOneAppData = {
    mainTitle: "One app. One banking.",
    appBoxes: [
      {
        title: "Instant transactions",
        desc: "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.",
        image: Badge2Image,
      },
      {
        title: "Saving accounts",
        desc: "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.",
        image: Badge3Image,
      },
      {
        title: "Mobile banking",
        desc: "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.",
        image: Badge4Image,
      },
      {
        title: "Advanced statistics",
        desc: "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.",
        image: Badge5Image,
      },
      {
        title: "Virtual cards",
        desc: "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.",
        image: Badge6Image,
      },
      {
        title: "Contactless payments",
        desc: "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.",
        image: Badge7Image,
      },
    ],
  };

  return (
    <div className="SiteOneApp banner-container-160">
      <div className="banner-content">
        <div className="block-2">
          <section className="first-block-3">
            <div className="title-h2">{templateData.mainTitle}</div>
            <div className="six-features">
              {templateData.appBoxes.map((itemBoxes) => {
                return (
                  <div className="app-boxes">
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

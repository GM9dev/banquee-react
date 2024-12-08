import Cards2Image from "./../../assets/cards-2.svg";
import "./SitePerfect.css";

type SitePerfectData = {
  subTitle: string;
  mainTitle: string;
  mainTitle2: string;
  description: string;
  description2: string;
  mainButtonText: string;
  secondButtonText: string;
};

function SitePerfect() {
  const templateData: SitePerfectData = {
    subTitle: "Account",
    mainTitle: "Perfect card",
    mainTitle2: "for your needs.",
    description: "Senectus et netus et malesuada fames ac turpis.",
    description2: "Sagittis vitae et leo duis ut diam.",
    mainButtonText: "Open Account",
    secondButtonText: "Compare Cards",
  };

  return (
    <div className="SitePerfect banner-container-160">
      <div className="banner-content">
        <div className="block-7">
          <div className="info">{templateData.subTitle}</div>
          <div className="title-h2">{templateData.mainTitle}</div>
          <div className="title-h2 bottom">{templateData.mainTitle2}</div>
          <p className="text-2">{templateData.description}</p>
          <p className="text-2">{templateData.description2}</p>
          <img className="cards-three" src={Cards2Image} />
          <div className="buttons">
            <div className="green-button-2">{templateData.mainButtonText}</div>
            <div className="compare-cards-2">
              {templateData.secondButtonText}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SitePerfect;

import Cards from "./../../assets/cards.svg";
import Vector3 from "./../../assets/Vector-3.svg";
import BadgeImage from "./../../assets/badge.svg";
import "./SiteBanking.css";

type SiteBankingData = {
  mainTitle: string;
  description: string;
  listBenefits: Array<string>;
  mainButtonText: string;
  secondButtonText: string;
};

function SiteBanking() {
  const templateData: SiteBankingData = {
    mainTitle: "Banking starts here.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    listBenefits: [
      "Instant Transfer",
      "Payments worldwide",
      "Saving accounts",
      "100% mobile banking",
    ],
    mainButtonText: "Open Account",
    secondButtonText: "Compare Cards",
  };

  return (
    <div className="SiteBanking banner-container-128">
      <div className="banner-content">
        <div className="block-1">
          <section className="first-block">
            <h1 className="banking-title">{templateData.mainTitle}</h1>
            <p className="text-1">{templateData.description}</p>
            <div className="four-benefits">
              {templateData.listBenefits.map((itemBenefit) => {
                return (
                  <div className="text-4">
                    <img className="badge" src={BadgeImage} />
                    {itemBenefit}
                  </div>
                );
              })}
            </div>
            <div className="buttons">
              <div className="green-button">{templateData.mainButtonText}</div>
              <div className="compare-cards">
                {templateData.secondButtonText}
                <img className="vector-3" src={Vector3} />
              </div>
            </div>
          </section>
          <section>
            <img className="size-9" src={Cards} />
          </section>
        </div>
      </div>
    </div>
  );
}

export default SiteBanking;

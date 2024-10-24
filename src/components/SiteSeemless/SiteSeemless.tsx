import BadgeImage from "./../../assets/badge.svg";
import GridImage from "./../../assets/grid.svg";
import "./SiteSeemless.css";

type SiteSeemlessData = {
  subTitle: string;
  mainTitle: string;
  description: string;
  listBenefits: Array<string>;
};

function SiteSeemless() {
  const templateData: SiteSeemlessData = {
    subTitle: "Tools",
    mainTitle: "Seemless integration",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    listBenefits: [
      "Secure and encrypted integration",
      "Fully API interface",
      "Payments worldwide",
    ],
  };

  return (
    <div className="SiteSeemless banner-container-160">
      <div className="banner-content">
        <section className="image-grid">
          <img className="grid" src={GridImage} />
        </section>
        <section className="block-6">
          <div className="first-block-2">
            <div className="info">{templateData.subTitle}</div>
            <div className="title-1">{templateData.mainTitle}</div>
            <p className="text-3">{templateData.description}</p>
          </div>
          <div className="second-block">
            <div className="list-2">
            {templateData.listBenefits.map((itemBenefit) => {
                return (
                  <div className="list-margin-2">
                    <img className="badge-4" src={BadgeImage} />
                    {itemBenefit}
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default SiteSeemless;

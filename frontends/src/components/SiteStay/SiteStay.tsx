import Grid2Image from "./../../assets/grid-2.svg";
import Vector3Image from "./../../assets/Vector-3.svg";
import BadgeImage from "./../../assets/badge.svg";
import "./SiteStay.css";

type SiteStayData = {
  subTitle: string;
  mainTitle: string;
  description: string;
  listBenefits: Array<string>;
  options: string;
}

function SiteStay() {
  const templateData: SiteStayData = {
    subTitle: "Notifications",
    mainTitle: "Stay notified",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    listBenefits: [
      "Malesuada Ipsum",
      "Vestibulum",
      "Parturient Lorem",
    ],
    options: "Compare Cards",
  };

  return (
    <div className="SiteStay banner-container-160">
      <div className="banner-content">
        <div className="block-5">
          <section className="section-1">
            <div className="block-text">
              <div className="info">{templateData.subTitle}</div>
              <div className="title-1">{templateData.mainTitle}</div>
              <p className="text-3">{templateData.description}</p>
              <div className="list">
              {templateData.listBenefits.map((itemBenefit) => {
                return (
                  <div className="list-margin">
                    <img className="badge-2" src={BadgeImage} />
                    {itemBenefit}
                  </div>
                );
              })}
              </div>
              <div className="compare-cards">{templateData.options}
                <img className="vector-3" src={Vector3Image} />
              </div>
            </div>
          </section>
          <section className="grid-2">
            <img src={Grid2Image} />
          </section>
        </div>
      </div>
    </div>
  );
}

export default SiteStay;

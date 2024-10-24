import App3Image from "./../../assets/app-3.svg";
import Grid3Image from "./../../assets/grid-3.svg";
import Badge10Image from "./../../assets/badge-10.svg";
import "./SiteOneApp2.css";

type SiteOneApp2Data = {
    mainTitle: string;
    description: string;
    listBenefits: Array<string>;
}

function SiteOneApp2() {
const templateData: SiteOneApp2Data = {
  mainTitle: "One app. One banking.",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  listBenefits: [
    "Instant Transfer",
    "Payments worldwide",
    "Saving accounts",
    "100% mobile banking",
  ]
};

  return (
    <div className="SiteOneApp2 banner-container">
      <div className="banner-content">
        <section className="block-10">
          <div className="app-text-2">One app. One banking.</div>
          <div className="text-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </div>
          <div className="four-benefits">
            {templateData.listBenefits.map((itemBenefit) => {
              return (
                <div className="text-features">
                  <img className="badge" src={Badge10Image} />
                  {itemBenefit}
                </div>
              );
            })}
          </div>
          <img src={Grid3Image} />
        </section>
        <section>
          <img className="app" src={App3Image} />
        </section>
      </div>
    </div>
  );
}

export default SiteOneApp2;

import Frame85Image from "./../../assets/Frame 8-5.svg";
import Frame84Image from "./../../assets/Frame 8-4.svg";
import Frame83Image from "./../../assets/Frame 8-3.svg";
import Frame82Image from "./../../assets/Frame 8-2.svg";
import Frame8Image from "./../../assets/Frame 8.svg";
import Vector3Image from "./../../assets/Vector-3.svg";
import "./SiteOrganize.css";

type SiteOrganizeData = {
  subTitle: string;
  mainTitle: string;
  description: string;
  options: string;
};

function SiteOrganize() {

  const templateData: SiteOrganizeData = {
    subTitle: "Saving Accounts",
    mainTitle: "Organize your money the right way",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    options: "All features",
  };

  return (
    <div className="SiteOrganize banner-container-160">
      <div className="banner-content">
        <div className="block-4">
          <section className="block-one">
            <div className="info">{templateData.subTitle}</div>
            <div className="title-1">{templateData.mainTitle}</div>
            <p className="text-2">{templateData.description}</p>
          </section>
          <section className="block-two">
            <div className="all-features">{templateData.options}
              <img className="vector-3" src={Vector3Image} />
            </div>
          </section>
        </div>
        <div className="items">
          <div>
            <img src={Frame8Image} />
            <div className="info">New Laptop</div>
            <div className="money">400$</div>
          </div>
          <div>
            <img src={Frame82Image} />
            <div className="info">Dream bike</div>
            <div className="money">200$</div>
          </div>
          <div>
            <img src={Frame83Image} />
            <div className="info">Holiday</div>
            <div className="money">14000$</div>
          </div>
          <div>
            <img src={Frame84Image} />
            <div className="info">Camera</div>
            <div className="money">100$</div>
          </div>
          <div>
            <img src={Frame85Image} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SiteOrganize;

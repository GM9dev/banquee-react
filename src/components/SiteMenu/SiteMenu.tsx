import VectorImage from "./../../assets/Vector.svg";
import "./SiteMenu.css";

type SiteMenuData = {
  sitelogo: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  login: string;
  openaccount: string;
};

function SiteMenu() {
  const templateData: SiteMenuData = {
    sitelogo: "banquee",
    option1: "Features",
    option2: "Compare",
    option3: "Support",
    option4: "Blog",
    login: "Login",
    openaccount: "Open Account",
  };

  return (
    <div className="SiteMenu email-menu">
      <div className="nav-left">{templateData.sitelogo}.</div>
      <div className="nav-center-container">
        <div className="nav-center">{templateData.option1}</div>
        <div className="nav-center">
          {templateData.option2}
          <img className="Vector" src={VectorImage} />
        </div>
        <div className="nav-center">{templateData.option3}</div>
        <div className="nav-center">
          {templateData.option4}
          <img className="Vector" src={VectorImage} />
        </div>
      </div>
      <div className="nav-right1">{templateData.login}</div>
      <div className="nav-right2">{templateData.openaccount}</div>
    </div>
  );
}

export default SiteMenu;

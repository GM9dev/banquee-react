import { useEffect, useState } from "react";
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
  // variable section - useState [variavel, setter da variavel]
  const [templateData, setTemplateData] = useState<SiteMenuData>({
    sitelogo: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    login: "",
    openaccount: "",
  });

  // function section
  // async/await - sao Promise (promessas) de resposta
  async function getServerData() {
    // request ou fetch
    const serverResponse = await fetch("http://localhost:5679/site-menu", {
      method: "POST",
    });

    // response
    const data = (await serverResponse.json()) as SiteMenuData;

    // variable setter update
    setTemplateData(data);
  }

  // react hooks section
  // onMount - quando o component e criado
  useEffect(() => {
    getServerData();
  }, []);

  // renderer ou template section
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

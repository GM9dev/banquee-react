import { useEffect, useState } from "react";
import VectorImage from "./../../assets/Vector.svg";
import "./SiteMenu.css";
import { Link } from "react-router";
import SiteMenuData from "@typings/SiteMenuData";

function SiteMenu() {
  // variable section - useState [variavel, setter da variavel]
  const [templateData, setTemplateData] = useState<SiteMenuData>({
    siteLogo: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    login: "",
    openAccount: "",
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
      <div className="nav-left">
        <Link to={"/"}>{templateData.siteLogo}</Link>
      </div>
      <div className="nav-center-container">
        <div className="nav-center">
          <Link to={"/features"}>{templateData.option1}</Link>
        </div>
        <div className="nav-center">
          {templateData.option2}
          <img className="vector" src={VectorImage} />
        </div>
        <div className="nav-center">{templateData.option3}</div>
        <div className="nav-center">
          {templateData.option4}
          <img className="vector" src={VectorImage} />
        </div>
      </div>
      <div className="nav-right1">{templateData.login}</div>
      <div className="nav-right2">{templateData.openAccount}</div>
    </div>
  );
}

export default SiteMenu;

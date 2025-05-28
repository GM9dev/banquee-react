import "./ComparePlan.css";
import Card9 from "./../../assets/card-9.svg";
import Card10 from "./../../assets/card-10.svg";
import Card11 from "./../../assets/card-11.svg";
import Component from "./../../assets/Component 2.svg";
import Badge13 from "./../../../public/badge-13.svg";
import Badge from "./../../assets/badge.svg";
import Badge14 from "./../../../public/badge-14.svg";
import Hifen from "./../../../public/-.svg";
import Badge15 from "./../../../public/badge-15.svg";
import Badge16 from "./../../../public/badge-16.svg";
import Badge17 from "./../../../public/badge-17.svg";
import Badge18 from "./../../../public/badge-18.svg";
import Badge19 from "./../../../public/badge-19.svg";
import Badge20 from "./../../../public/badge-20.svg";
import Badge21 from "./../../../public/badge-21.svg";
import Badge22 from "./../../../public/badge-22.svg";
import { useEffect, useState } from "react";
import ComparePlanData from "@typings/ComparePlanData";

function ComparePlan() {
  const [templateData, setTemplateData] = useState<ComparePlanData>({
    id: 0,
    plan: "",
    subInfo: "",
    price: "",
    text1: "",
    text2: "",
    plan2: "",
    price2: "",
    time: "",
    plan3: "",
    price3: "",
    menu1: "",
    info1: "",
    text3: "",
    condition: "",
    info2: "",
    info3: "",
    info4: "",
    info5: "",
    info6: "",
    info7: "",
    info8: "",
    info9: "",
    info10: "",
    menu2: "",
    condition2: "",
    condition3: "",
    menu3: "",
    condition4: "",
    condition5: "",
    condition6: "",
    condition7: "",
  });

  async function getServerData() {
    const request = await fetch("http://localhost:5679/compare-plan", {
      method: "POST",
    });

    const response = (await request.json()) as ComparePlanData;

    setTemplateData(response);
  }

  useEffect(() => {
    getServerData();
  }, []);

  return (
    <div className="ComparePlan banner-container-96">
      <section className="block-plans">
        <div className="block-columm">
          <div className="block-popular">
            <div className="info">{templateData.plan}</div>
            <div className="green-button-2">{templateData.subInfo}</div>
          </div>
          <div className="block-price">
            <div className="title-2">{templateData.price}</div>
          </div>
          <div className="money">{templateData.text1}</div>
          <div className="money">{templateData.text2}</div>
          <img className="cards-padd" src={Card9} />
          <img className="component" src={Component} />
        </div>
        <div className="block-columm">
          <div className="info">{templateData.plan2}</div>
          <div className="block-price">
            <div className="title-2">{templateData.price2}</div>
            <div className="money">{templateData.time}</div>
          </div>
          <div className="money">{templateData.text1}</div>
          <div className="money">{templateData.text2}</div>
          <img className="cards-padd" src={Card10} />
          <img className="component" src={Component} />
        </div>
        <div className="block-columm">
          <div className="info">{templateData.plan3}</div>
          <div className="block-price">
            <div className="title-2">{templateData.price3}</div>
            <div className="money">{templateData.time}</div>
          </div>
          <div className="money">{templateData.text1}</div>
          <div className="money">{templateData.text2}</div>
          <img className="cards-padd" src={Card11} />
          <img className="component" src={Component} />
        </div>
      </section>
      <section className="first-section">
        <div className="info">{templateData.menu1}</div>
        <div className="space-between">
          <div className="position-1">
            <img src={Badge13} />
            <div className="position-2">
              <div className="name">{templateData.info1}</div>
              <div className="money">{templateData.text3}</div>
            </div>
          </div>
          <div className="text-features">{templateData.condition}</div>
          <div className="position-3">
            <img src={Badge} />
          </div>
          <div className="position-3">
            <img src={Badge} />
          </div>
        </div>
        <div className="space-between">
          <div className="position-1">
            <img src={Badge14} />
            <div className="position-2">
              <div className="name">{templateData.info2}</div>
              <div className="money">{templateData.text3}</div>
            </div>
          </div>
          <div className="position-3">
            <img src={Hifen} />
          </div>
          <div className="text-features">{templateData.condition2}</div>
          <div className="text-features">{templateData.condition3}</div>
        </div>
        <div className="space-between">
          <div className="position-1">
            <img src={Badge15} />
            <div className="position-2">
              <div className="name">{templateData.info3}</div>
              <div className="money">{templateData.text3}</div>
            </div>
          </div>
          <div className="position-3">
            <img src={Badge} />
          </div>
          <div className="position-3">
            <img src={Badge} />
          </div>
          <div className="position-3">
            <img src={Badge} />
          </div>
        </div>
        <div className="space-between">
          <div className="position-1">
            <img src={Badge16} />
            <div className="position-2">
              <div className="name">{templateData.info4}</div>
              <div className="money">{templateData.text3}</div>
            </div>
          </div>
          <div className="position-3">
            <img src={Badge} />
          </div>
          <div className="position-3">
            <img src={Badge} />
          </div>
          <div className="position-3">
            <img src={Badge} />
          </div>
        </div>
      </section>
      <section className="first-section">
        <div className="info">{templateData.menu2}</div>
        <div className="space-between">
          <div className="position-1">
            <img src={Badge17} />
            <div className="position-2">
              <div className="name">{templateData.info5}</div>
              <div className="money">{templateData.text3}</div>
            </div>
          </div>
          <div className="position-3">
            <img src={Hifen} />
          </div>
          <div className="position-3">
            <img src={Badge} />
          </div>
          <div className="position-3">
            <img src={Badge} />
          </div>
        </div>
        <div className="space-between">
          <div className="position-1">
            <img src={Badge18} />
            <div className="position-2">
              <div className="name">{templateData.info6}</div>
              <div className="money">{templateData.text3}</div>
            </div>
          </div>
          <div className="text-features">{templateData.condition4}</div>
          <div className="text-features">{templateData.condition5}</div>
          <div className="text-features">{templateData.condition6}</div>
        </div>
        <div className="space-between">
          <div className="position-1">
            <img src={Badge19} />
            <div className="position-2">
              <div className="name">{templateData.info7}</div>
              <div className="money">{templateData.text3}</div>
            </div>
          </div>
          <div className="position-3">
            <img src={Badge} />
          </div>
          <div className="position-3">
            <img src={Badge} />
          </div>
          <div className="position-3">
            <img src={Badge} />
          </div>
        </div>
      </section>
      <section className="first-section">
        <div className="info">{templateData.menu3}</div>
        <div className="space-between">
          <div className="position-1">
            <img src={Badge20} />
            <div className="position-2">
              <div className="name">{templateData.info8}</div>
              <div className="money">{templateData.text3}</div>
            </div>
          </div>
          <div className="text-features">{templateData.condition4}</div>
          <div className="text-features">{templateData.condition5}</div>
          <div className="text-features">{templateData.condition6}</div>
        </div>
        <div className="space-between">
          <div className="position-1">
            <img src={Badge21} />
            <div className="position-2">
              <div className="name">{templateData.info9}</div>
              <div className="money">{templateData.text3}</div>
            </div>
          </div>
          <div className="position-3">
            <img src={Badge} />
          </div>
          <div className="position-3">
            <img src={Badge} />
          </div>
          <div className="position-3">
            <img src={Badge} />
          </div>
        </div>
        <div className="space-between">
          <div className="position-1">
            <img src={Badge22} />
            <div className="position-2">
              <div className="name">{templateData.info10}</div>
              <div className="money">{templateData.text3}</div>
            </div>
          </div>
          <div className="position-3">
            <img src={Badge} />
          </div>
          <div className="position-3">
            <img src={Badge} />
          </div>
          <div className="position-3">
            <img src={Badge} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default ComparePlan;

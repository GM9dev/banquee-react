import "./SupportFaqList.css";
import Badge27 from "./../../../public/badge-27.svg";
import Open from "./../../assets/ri_add-fill.svg";
import Close from "./../../assets/ri_close-fill.svg";
import SupportFaqListData from "@typings/SupportFaqListData";
import { useState, useEffect } from "react";

function SupportFaqList() {
  const [templateData, setTemplateData] = useState<SupportFaqListData>({
    id: 0,
    category: "",
    option1: "",
    option2: "",
    option3: "",
    faq1: "",
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    answer: "",
    question5: "",
    faq2: "",
    question6: "",
    question7: "",
    question8: "",
    question9: "",
    faq3: "",
    question10: "",
    question11: "",
    question12: "",
    question13: "",
  });

  async function getServerData() {
    const request = await fetch("http://localhost:5679/support-faq-list", {
      method: "POST",
    });

    const response = (await request.json()) as SupportFaqListData;

    setTemplateData(response);
  }

  useEffect(() => {
    getServerData();
  }, []);

  return (
    <div className="SupportFaqList banner-container-160">
      <div className="banner-content">
        <div className="background-color-3">
          <div className="margin name">{templateData.category}</div>
          <div className="text-features">{templateData.option1}</div>
          <div className="text-features">{templateData.option2}</div>
          <div className="text-features">{templateData.option3}</div>
        </div>
        <div className="section-two">
          <section className="block-12">
            <div className="subtitle">
              <img src={Badge27} />
              <div className="title-3">{templateData.faq1}</div>
            </div>
            <div className="distance-4 padding border-bottom">
              <div className="item-header">
                <div className="info distance-1">{templateData.question1}</div>
                <img className="add-img" src={Open} />
              </div>
            </div>
            <div className="distance-4 padding border-bottom">
              <div className="item-header">
                <div className="info distance-1">{templateData.question2}</div>
                <img className="add-img" src={Open} />
              </div>
            </div>
            <div className="distance-4 padding border-bottom">
              <div className="item-header">
                <div className="info distance-1">{templateData.question3}</div>
                <img className="add-img" src={Open} />
              </div>
            </div>
            <div className="distance-4 padding border-bottom">
              <div className="item-header">
                <div className="info distance-1">{templateData.question4}</div>
                <img className="add-img" src={Close} />
              </div>
              <div className="color distance-1 text-features">
                {templateData.answer}
              </div>
            </div>
            <div className="distance-4 padding border-bottom">
              <div className="item-header">
                <div className="info distance-1">{templateData.question5}</div>
                <img className="add-img" src={Open} />
              </div>
            </div>
          </section>
          <section className="block-12">
            <div className="subtitle padding-top">
              <img src="badge-27.svg" />
              <div className="title-3">{templateData.faq2}</div>
            </div>
            <div className="distance-4 padding border-bottom">
              <div className="item-header">
                <div className="info distance-1">{templateData.question6}</div>
                <img className="add-img" src={Open} />
              </div>
            </div>
            <div className="distance-4 padding border-bottom">
              <div className="item-header">
                <div className="info distance-1">{templateData.question7}</div>
                <img className="add-img" src={Open} />
              </div>
            </div>
            <div className="distance-4 padding border-bottom">
              <div className="item-header">
                <div className="info distance-1">{templateData.question8}</div>
                <img className="add-img" src={Open} />
              </div>
            </div>
            <div className="distance-4 padding border-bottom">
              <div className="item-header">
                <div className="info distance-1">{templateData.question9}</div>
                <img className="add-img" src={Open} />
              </div>
            </div>
          </section>
          <section className="block-12">
            <div className="subtitle padding-top">
              <img src="badge-27.svg" />
              <div className="title-3">{templateData.faq3}</div>
            </div>
            <div className="distance-4 padding border-bottom">
              <div className="item-header">
                <div className="info distance-1">{templateData.question10}</div>
                <img className="add-img" src={Open} />
              </div>
            </div>
            <div className="distance-4 padding border-bottom">
              <div className="item-header">
                <div className="info distance-1">{templateData.question11}</div>
                <img className="add-img" src={Open} />
              </div>
            </div>
            <div className="distance-4 padding border-bottom">
              <div className="item-header">
                <div className="info distance-1">{templateData.question12}</div>
                <img className="add-img" src={Open} />
              </div>
            </div>
            <div className="distance-4 padding border-bottom">
              <div className="item-header">
                <div className="info distance-1">{templateData.question13}</div>
                <img className="add-img" src={Open} />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default SupportFaqList;

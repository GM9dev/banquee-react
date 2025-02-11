import { useState, useEffect } from "react";
import "./SiteFooter.css";
import SiteFooterData from "@typings/SiteFooterData";

function SiteFooter() {
  const [templateData, setTemplateData] = useState<SiteFooterData>({
    sitelogo: "",
    boxes: [],
    lastWord1: "",
    lastWord2: "",
  });

  async function getServerData() {
    const request = await fetch("http://localhost:5679/site-footer", {
      method: "POST",
    });

    const response = (await request.json()) as SiteFooterData;

    setTemplateData(response);
  }

  useEffect(() => {
    getServerData();
  }, []);

  return (
    <div className="SiteFooter banner-container-end">
      <div className="banner-content-end">
        <div className="block-15">
          <section>
            <div className="nav-left">{templateData.sitelogo}</div>
          </section>
          <section className="block-16">
            {templateData.boxes.map((itemBoxes, index) => {
              return (
                <div key={index} className="size-8">
                  <div className="name distance-1">{itemBoxes.title}</div>
                  <div className="text-features color">{itemBoxes.option1}</div>
                  <div className="text-features color distance-7">
                    {itemBoxes.option2}
                  </div>
                  <div className="text-features color">{itemBoxes.option3}</div>
                </div>
              );
            })}
          </section>
        </div>
        <div className="block-17">
          <div className="text-6 money">© Made by</div>
          <div className="green text-6">Pawel Gola</div>
          <div className="money">- Powered by</div>
          <div className="green text-6">Webflow</div>
          <div className="distance-8 money">
            <div className="distance-9">{templateData.lastWord1}</div>
            <div>{templateData.lastWord2}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SiteFooter;

import "./CompareSupport.css";
import Badge23 from "./../../../public/badge-23.svg";
import Badge24 from "./../../../public/badge-24.svg";
import CompareSupportData from "@typings/CompareSupportData";
import { useEffect, useState } from "react";

function CompareSupport() {
  const [templateData, setTemplateData] = useState<CompareSupportData>({
    title: "",
    subTitle: "",
    phone: "",
    contact: "",
    email: "",
    contact2: "",
    info: "",
  });

  async function getServerData() {
    const request = await fetch("http://localhost:5679/compare-support", {
      method: "POST",
    });

    const response = (await request.json()) as CompareSupportData;

    setTemplateData(response);
  }

  useEffect(() => {
    getServerData();
  }, []);

  return (
    <div className="CompareSupport banner-container-96">
      <div className="rectangle">
        <div className="size">
          <div className="title-3">{templateData.title}</div>
          <div className="opacity text-4">{templateData.subTitle}</div>
        </div>
        <div className="block-three">
          <div className="position-1">
            <img src={Badge23} />
            <div className="position-4">
              <div className="name">{templateData.phone}</div>
              <div className="opacity">{templateData.contact}</div>
            </div>
          </div>
          <div className="position-1">
            <img src={Badge24} />
            <div className="position-4">
              <div className="name">{templateData.email}</div>
              <div className="opacity">{templateData.contact2}</div>
            </div>
          </div>
          <div className="background-color-2">{templateData.info}</div>
        </div>
      </div>
    </div>
  );
}

export default CompareSupport;

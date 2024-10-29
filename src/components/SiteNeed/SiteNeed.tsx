import RiCloseImage from "./../../assets/ri_close-fill.svg";
import RiAddImage from "./../../assets/ri_add-fill.svg";
import Vector3Image from "./../../assets/Vector-3.svg";
import Badge12Image from "./../../assets/badge-12.svg";
import Badge11Image from "./../../assets/badge-11.svg";
import "./SiteNeed.css";

type SiteNeedData = {
  mainTitle: string;
  contactPhoneNumber: string;
  contactNumber: string;
  email: string;
  contactEmail: string;
  option: string;
  list1: string;
  list2: string;
  list3: string;
  list4: string;
  textList4: string;
  list5: string;
};

function SiteNeed() {
  const templateData: SiteNeedData = {
    mainTitle: "Need help?",
    contactPhoneNumber: "+49 176 123 456",
    contactNumber: "Support Hotline",
    email: "help@banquee.com",
    contactEmail: "Support Email",
    option: "Support",
    list1: "How do I open an Banko account?",
    list2: "How do I order a new card?",
    list3: "How to change my account limits?",
    list4: "How does Banko premium works?",
    textList4:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.",
    list5: "Can I have two Banko accounts?",
  };

  return (
    <div className="SiteNeed banner-container-160">
      <div className="banner-content">
        <div className="block-11">
          <section className="block-12">
            <div className="title-1">{templateData.mainTitle}</div>
            <div className="position-txt-2 distance-1">
              <img className="size-img" src={Badge11Image} />
              <div className="size-7">
                <div className="name">{templateData.contactPhoneNumber}</div>
                <div className="money">{templateData.contactNumber}</div>
              </div>
            </div>
            <div className="position-txt-2">
              <img className="size-img" src={Badge12Image} />
              <div className="size-7">
                <div className="name">{templateData.email}</div>
                <div className="money">{templateData.contactEmail}</div>
              </div>
            </div>
            <div className="compare-cards-3">
              {templateData.option}
              <img className="vector-3" src={Vector3Image} />
            </div>
          </section>
          <section className="block-12">
            <div className="distance-4 border-bottom">
              <div className="info distance-1">{templateData.list1}</div>
              <img className="add-img" src={RiAddImage} />
            </div>
            <div className="distance-4 padding border-bottom">
              <div className="info distance-1">{templateData.list2}</div>
              <img className="add-img" src={RiAddImage} />
            </div>
            <div className="distance-4 padding border-bottom">
              <div className="info distance-1">{templateData.list3}</div>
              <img className="add-img" src={RiAddImage} />
            </div>
            <div className="distance-4 padding">
              <div className="info info-3">{templateData.list4}</div>
              <img className="add-img" src={RiCloseImage} />
            </div>
            <div className="text-5 border-bottom text-features">
              {templateData.textList4}
            </div>
            <div className="distance-4 padding">
              <div className="info">{templateData.list5}</div>
              <img className="add-img" src={RiAddImage} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default SiteNeed;

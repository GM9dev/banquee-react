import RiCloseImage from "./../../assets/ri_close-fill.svg";
import RiAddImage from "./../../assets/ri_add-fill.svg";
import Vector3Image from "./../../assets/Vector-3.svg";
import Badge12Image from "./../../assets/badge-12.svg";
import Badge11Image from "./../../assets/badge-11.svg";
import "./SiteNeed.css";

type FAQListType = {
  answer: string;
  question: string;
};

type SiteNeedData = {
  mainTitle: string;
  contactPhoneNumber: string;
  contactNumber: string;
  email: string;
  contactEmail: string;
  option: string;
  faqList: FAQListType[];
};

function SiteNeed() {
  const templateData: SiteNeedData = {
    mainTitle: "Need help?",
    contactPhoneNumber: "+49 176 123 456",
    contactNumber: "Support Hotline",
    email: "help@banquee.com",
    contactEmail: "Support Email",
    option: "Support",
    faqList: [
      { question: "How do I open an Banko account?", answer: "" },
      {
        question: "How do I order a new card?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      },
      { question: "How to change my account limits?", answer: "" },
      {
        question: "How does Banko premium works?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.",
      },
      { question: "Can I have two Banko accounts?", answer: "" },
    ],
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
            {templateData.faqList.map((item) => {
              return (
                <div className="distance-4 padding border-bottom">
                  <div className="item-header">
                    <div className="info distance-1">{item.question}</div>
                    <img
                      className="add-img"
                      src={item.answer !== "" ? RiCloseImage : RiAddImage}
                    />
                  </div>

                  {item.answer !== "" ? (
                    <div className="text-5 text-features distance-1">
                      {item.answer}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
          </section>
        </div>
      </div>
    </div>
  );
}

export default SiteNeed;

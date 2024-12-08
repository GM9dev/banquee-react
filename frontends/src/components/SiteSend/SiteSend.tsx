import Transactions2Image from "./../../assets/transactions-2.svg";
import Badge8Image from "./../../assets/badge-8.svg";
import "./SiteSend.css";

type SiteSendData = {
  mainTitle: string;
  description: string;
  listBenefits: Array<string>;
};

function SiteSend() {
  const templateData: SiteSendData = {
    mainTitle: "Send & receive money instantly",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    listBenefits: [
      "Malesuada Ipsum",
      "Vestibulum",
      "Parturient Lorem",
    ],
  };


  return (
    <div className="SiteSend banner-container-128 background-green">
      <div className="banner-content">
        <div className="block-3">
          <section>
            <div className="first-block-4">
              <div className="title-1">{templateData.mainTitle} 
                <p className="text-2">{templateData.description}</p>
              </div>
            </div>
            <div className="three-ben">
              {templateData.listBenefits.map((itemBenefit) => {
                return (
              <div className="text-ben">
                <img className="img-ben" src={Badge8Image} /> {itemBenefit}
              </div>
                );
              })}
            </div>
          </section>
          <section className="position-img">
            <img className="transactions" src={Transactions2Image} />
          </section>
        </div>
      </div>
    </div>
  );
}

export default SiteSend;

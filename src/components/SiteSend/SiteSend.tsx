import Transactions2Image from "./../../assets/transactions-2.svg";
import Badge8Image from "./../../assets/badge-8.svg";
import "./SiteSend.css";

function SiteSend() {
  return (
    <div className="SiteSend banner-container-128 background-green send-receive-section">
      <div className="banner-content2">
        <div className="block-3">
          <section>
            <div className="first-block3">
              <div className="third-title">
                Send & receive money instantly
                <p className="text-2 distance-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et.
                </p>
              </div>
            </div>
            <div className="three-ben">
              <div className="text-ben">
                <img className="img-ben" src={Badge8Image} /> Malesuada Ipsum
              </div>
              <div className="text-ben">
                <img className="img-ben" src={Badge8Image} /> Vestibulum
              </div>
              <div className="text-ben">
                <img className="img-ben" src={Badge8Image} /> Parturient Lorem
              </div>
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

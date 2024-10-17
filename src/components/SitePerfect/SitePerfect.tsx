import Cards2Image from "./../../assets/cards-2.svg";
import "./SitePerfect.css";

function SitePerfect() {
  return (
    <div className="SitePerfect banner-container-160">
      <div className="banner-content">
        <div className="block-7">
          <div className="info">Account</div>
          <div className="title-3">Perfect card</div>
          <div className="title-4">for your needs.</div>
          <p className="text-2">
            Senectus et netus et malesuada fames ac turpis.
          </p>
          <p className="text-2">Sagittis vitae et leo duis ut diam.</p>
          <img className="cards-three" src={Cards2Image} />
          <div className="buttons">
            <div className="green-button-2">Open Account</div>
            <div className="compare-cards-2">Compare Cards</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SitePerfect;

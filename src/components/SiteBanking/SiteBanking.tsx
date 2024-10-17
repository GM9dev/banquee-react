import Cards from "./../../assets/cards.svg"
import Vector3 from "./../../assets/Vector-3.svg"
import BadgeImage from "./../../assets/badge.svg"
import "./SiteBanking.css"

function SiteBanking() {
  return   <div className="SiteBanking.banner-container-128">
  <div className="banner-content">
    <div className="block-1">
      <section className="first-block">
        <h1 className="banking-text">Banking starts here.</h1>
        <p className="text-1 distance-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
        <div className="four-benefits">
          <div className="ben">
            <img className="badge" src={BadgeImage} />Instant Transfer
          </div>
          <div className="ben">
            <img className="badge" src={BadgeImage} />Payments worldwide
          </div>
          <div className="ben">
            <img className="badge" src={BadgeImage} />Saving accounts
          </div>
          <div className="ben">
            <img className="badge" src={BadgeImage} />100% mobile banking
          </div>
        </div>
        <div className="distance-10">
          <div className="green-button">Open Account</div>
          <div className="compare-cards">
            Compare Cards
            <img className="vector3" src={Vector3} />
          </div>
        </div>
      </section>
      <section>
        <img src={Cards} />
      </section>
    </div>
  </div>
</div>;
}

export default SiteBanking;
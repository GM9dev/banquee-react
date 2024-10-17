import Grid2Image from "./../../assets/grid-2.svg"
import Vector3Image from "./../../assets/Vector-3.svg"
import BadgeImage from "./../../assets/badge.svg"
import "./SiteStay.css";

function SiteStay() {
  return   <div className="SiteStay.banner-container-160">
  <div className="banner-content">
    <div className="block-5">
      <section className="section-1">
        <div className="block-text">
          <div className="info">Notifications</div>
          <div className="title-1 distance-3">Stay notified</div>
          <p className="text-3">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
            enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
          <div className="list">
            <div className="list-margin">
              <img className="badge-2" src={BadgeImage} />Malesuada Ipsum
            </div>
            <div className="list-margin">
              <img className="badge-2" src={BadgeImage} />Vestibulum
            </div>
            <div className="list-margin">
              <img className="badge-2" src={BadgeImage} />Parturient Lorem
            </div>
          </div>
          <div className="compare-cards">
            Compare Cards
            <img className="vector3" src={Vector3Image} />
          </div>
        </div>
      </section>
      <section className="grid-2">
        <img src={Grid2Image} />
      </section>
    </div>
  </div>
</div>;
}

export default SiteStay;
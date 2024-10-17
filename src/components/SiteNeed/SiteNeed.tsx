import RiCloseImage from "./../../assets/ri_close-fill.svg";
import RiAddImage from "./../../assets/ri_add-fill.svg";
import Vector3Image from "./../../assets/Vector-3.svg";
import Badge12Image from "./../../assets/badge-12.svg";
import Badge11Image from "./../../assets/badge-11.svg";
import "./SiteNeed.css";

function SiteNeed() {
  return (
    <div className="SiteNeed banner-container-160">
      <div className="banner-content">
        <div className="block-11">
          <section className="block-12">
            <div className="third-title">Need help?</div>
            <div className="div">
              <div className="position-txt-2 distance-1">
                <img className="size-img" src={Badge11Image} />
                <div className="size-7">
                  <div className="name">+49 176 123 456</div>
                  <div className="money">Support Hotline</div>
                </div>
              </div>
              <div className="position-txt-2">
                <img className="size-img" src={Badge12Image} />
                <div className="size-7">
                  <div className="name">help@banquee.com</div>
                  <div className="money">Support Email</div>
                </div>
              </div>
            </div>
            <div className="compare-cards-3">
              Support
              <img className="vector3" src={Vector3Image} />
            </div>
          </section>
          <section className="block-12">
            <div className="distance-8 border-bottom">
              <div className="info info-2">How do I open an Banko account?</div>
              <img className="add-img" src={RiAddImage} />
            </div>
            <div className="distance-8 padding-3 border-bottom">
              <div className="info info-2">How do I order a new card?</div>
              <img className="add-img" src={RiAddImage} />
            </div>
            <div className="distance-8 padding-3 border-bottom">
              <div className="info info-2">
                How to change my account limits?
              </div>
              <img className="add-img" src={RiAddImage} />
            </div>
            <div className="distance-8 padding-3">
              <div className="info info-3">How does Banko premium works?</div>
              <img className="add-img" src={RiCloseImage} />
            </div>
            <div className="text-6 border-bottom text-features">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
              accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis
              natoque penatibus et magnis dis parturient.
            </div>
            <div className="distance-8 padding-3">
              <div className="info info-4">Can I have two Banko accounts?</div>
              <img className="add-img" src={RiAddImage} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default SiteNeed;

import BadgeImage from "./../../assets/badge.svg";
import GridImage from "./../../assets/grid.svg";
import "./SiteSeemless.css";

function SiteSeemless() {
  return (
    <div className="SiteSeemless banner-container-160">
      <div className="banner-content">
        <section className="image-grid">
          <img className="grid" src={GridImage} />
        </section>
        <section className="block-6">
          <div className="first-block-4">
            <div className="info">Tools</div>
            <div className="padding-title-2">
              <div className="title-2">Seemless</div>
              <div className="title-2">integration</div>
            </div>
            <p className="text-3">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
          <div className="second-block-4">
            <div className="list-2">
              <div className="list-margin-2">
                <img className="badge-4" src={BadgeImage} />
                Secure and encrypted integration
              </div>
              <div className="list-margin-2">
                <img className="badge-4" src={BadgeImage} />
                Fully API interface
              </div>
              <div className="list-margin-2">
                <img className="badge-4" src={BadgeImage} />
                Payments worldwide
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default SiteSeemless;

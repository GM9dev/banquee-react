import CardImage from "./../../assets/card.svg";
import AppImage from "./../../assets/app.svg";
import Badge7Image from "./../../assets/badge-7.svg";
import Badge6Image from "./../../assets/badge-6.svg";
import Badge5Image from "./../../assets/badge-5.svg";
import Badge4Image from "./../../assets/badge-4.svg";
import Badge3Image from "./../../assets/badge-3.svg";
import Badge2Image from "./../../assets/badge-2.svg";
import "./SiteOneApp.css";

function SiteOneApp() {
  return (
    <div className="SiteOneApp banner-container-160">
      <div className="banner-content">
        <div className="block-2">
          <section className="first-block2">
            <div className="app-text">One app.</div>
            <div className="app-text">One banking.</div>
            <div className="six-features">
              <div className="app-boxes">
                <img className="images" src={Badge2Image} />
                <div className="app-titles">Instant</div>
                <div className="app-titles">transactions</div>
                <div className="text-features distance-15">
                  Odio euismod lacinia at quis. Amet purus gravida quis blandit
                  turpis.
                </div>
              </div>
              <div className="app-boxes">
                <img className="images" src={Badge3Image} />
                <div className="app-titles">Saving</div>
                <div className="app-titles">accounts</div>
                <div className="text-features distance-15">
                  Odio euismod lacinia at quis. Amet purus gravida quis blandit
                  turpis.
                </div>
              </div>
              <div className="app-boxes">
                <img className="images" src={Badge4Image} />
                <div className="app-titles">Mobile</div>
                <div className="app-titles">banking</div>
                <div className="text-features distance-15">
                  Odio euismod lacinia at quis. Amet purus gravida quis blandit
                  turpis.
                </div>
              </div>
              <div className="app-boxes">
                <img className="images" src={Badge5Image} />
                <div className="app-titles">Advanced</div>
                <div className="app-titles">statistics</div>
                <div className="text-features distance-15">
                  Odio euismod lacinia at quis. Amet purus gravida quis blandit
                  turpis.
                </div>
              </div>
              <div className="app-boxes">
                <img className="images" src={Badge6Image} />
                <div className="app-titles">Virtual</div>
                <div className="app-titles">cards</div>
                <div className="text-features distance-15">
                  Odio euismod lacinia at quis. Amet purus gravida quis blandit
                  turpis.
                </div>
              </div>
              <div className="app-boxes">
                <img className="images" src={Badge7Image} />
                <div className="app-titles">Contactless</div>
                <div className="app-titles">payments</div>
                <div className="text-features distance-15">
                  Odio euismod lacinia at quis. Amet purus gravida quis blandit
                  turpis.
                </div>
              </div>
            </div>
          </section>
          <section className="app-image">
            <img src={AppImage} />
            <img className="card-image" src={CardImage} />
          </section>
        </div>
      </div>
    </div>
  );
}

export default SiteOneApp;

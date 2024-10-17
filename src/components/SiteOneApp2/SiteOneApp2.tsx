import App3Image from "./../../assets/app-3.svg"
import Grid3Image from "./../../assets/grid-3.svg"
import Badge10Image from "./../../assets/badge-10.svg"
import "./SiteOneApp2.css";

function SiteOneApp2() {
  return   <div className="SiteOneApp2.banner-container-0">
  <div className="background-green-2">
    <section className="block-10">
      <div className="app-text-2 color">One app. One banking.</div>
      <div className="text-5 color">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna.
      </div>
      <div className="four-benefits color">
        <div className="ben-2 distance-7 text-features">
          <img className="badge" src={Badge10Image} />Instant Transfer
        </div>
        <div className="ben-2 distance-7 text-features">
          <img className="badge" src={Badge10Image} />Payments worldwide
        </div>
        <div className="ben-2 text-features">
          <img className="badge" src={Badge10Image} />Saving accounts
        </div>
        <div className="ben-2 text-features">
          <img className="badge" src={Badge10Image} />100% mobile banking
        </div>
      </div>
      <img src={Grid3Image} />
    </section>
    <section>
      <img className="app-4" src={App3Image} />
    </section>
  </div>
</div>;
}

export default SiteOneApp2;
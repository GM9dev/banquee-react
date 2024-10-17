import VectorImage from "./../../assets/Vector.svg"
import "./SiteMenu.css"

function SiteMenu() {
  return  <div className="SiteMenu email-menu">
  <div className="nav-left">banquee.</div>
  <div className="nav-center-container">
    <div className="nav-center">Features</div>
    <div className="nav-center nav-center2">
      Compare
      <img className="Vector" src={VectorImage} />
    </div>
    <div className="nav-center">Support</div>
    <div className="nav-center">
      Blog
      <img className="Vector" src={VectorImage} />
    </div>
  </div>
  <div className="nav-right1">Login</div>
  <div className="nav-right2">Open Account</div>
</div>;
}

export default SiteMenu;
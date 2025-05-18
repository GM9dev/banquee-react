import DropdownFeaturesCard from "../DropdownFeaturesCard/DropdownFeaturesCard";
import SiteMenu from "../SiteMenu/SiteMenu";
import "./DropdownFeatures.css";

function DropdownFeatures() {
  return (
    <div className="DropdownFeatures">
      <SiteMenu />
      <DropdownFeaturesCard />
    </div>
  );
}

export default DropdownFeatures;

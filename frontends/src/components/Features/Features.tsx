import FeaturesAllIn from "../FeaturesAllIn/FeaturesAllIn";
import SiteFooter from "../SiteFooter/SiteFooter";
import SiteMenu from "../SiteMenu/SiteMenu";
import FeaturesSendManageKeepLorem from "../FeaturesSendManageKeepLorem/FeaturesSendManageKeepLorem";
import FeaturesAllIn2 from "../FeaturesAllIn2/FeaturesAllIn2";
import FeaturesChooseYourCard from "../FeaturesChooseYourCard/FeaturesChooseYourCard";
import SiteOneApp2 from "../SiteOneApp2/SiteOneApp2";
import SiteNeed from "../SiteNeed/SiteNeed";
import "./Features.css";

function Features() {
  return (
    <div className="Features">
      <SiteMenu />
      <FeaturesAllIn />
      <FeaturesSendManageKeepLorem />
      <FeaturesAllIn2 />
      <FeaturesChooseYourCard />
      <SiteOneApp2 />
      <SiteNeed />
      <SiteFooter />
    </div>
  );
}

export default Features;

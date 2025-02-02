import SiteBanking from "../SiteBanking/SiteBanking";
import SiteBlog from "../SiteBlog/SiteBlog";
import SiteFooter from "../SiteFooter/SiteFooter";
import SiteMenu from "../SiteMenu/SiteMenu";
import SiteNeed from "../SiteNeed/SiteNeed";
import SiteOneApp from "../SiteOneApp/SiteOneApp";
import SiteOneApp2 from "../SiteOneApp2/SiteOneApp2";
import SiteOrganize from "../SiteOrganize/SiteOrganize";
import SitePeople from "../SitePeople/SitePeople";
import SitePerfect from "../SitePerfect/SitePerfect";
import SiteSeemless from "../SiteSeemless/SiteSeemless";
import SiteSend from "../SiteSend/SiteSend";
import SiteStay from "../SiteStay/SiteStay";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="HomePage">
      <SiteMenu />
      <SiteBanking />
      <SiteOneApp />
      <SiteSend />
      <SiteOrganize />
      <SiteStay />
      <SiteSeemless />
      <SitePerfect />
      <SitePeople />
      <SiteOneApp2 />
      <SiteNeed />
      <SiteBlog />
      <SiteFooter />
    </div>
  );
}

export default HomePage;

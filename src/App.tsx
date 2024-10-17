import "./App.css";
import SiteMenu from "./components/SiteMenu/SiteMenu";
import SiteBanking from "./components/SiteBanking/SiteBanking";
import SiteOneApp from "./components/SiteOneApp/SiteOneApp";
import SiteSend from "./components/SiteSend/SiteSend";
import SiteOrganize from "./components/SiteOrganize/SiteOrganize";
import SiteStay from "./components/SiteStay/SiteStay";
import SiteSeemless from "./components/SiteSeemless/SiteSeemless";
import SitePerfect from "./components/SitePerfect/SitePerfect";
import SitePeople from "./components/SitePeople/SitePeople";
import SiteOneApp2 from "./components/SiteOneApp2/SiteOneApp2";
import SiteNeed from "./components/SiteNeed/SiteNeed";
import SiteBlog from "./components/SiteBlog/SiteBlog";
import SiteFooter from "./components/SiteFooter/SiteFooter";

function App() {
  return (
    <div className="App">
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

export default App;

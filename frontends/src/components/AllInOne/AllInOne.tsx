import SiteBlog from "../SiteBlog/SiteBlog";
import SiteFooter from "../SiteFooter/SiteFooter";
import SiteMenu from "../SiteMenu/SiteMenu";

function AllInOne() {
  return (
    <div className="AllInOne">
      <SiteMenu />
      <SiteBlog />
      <SiteFooter />
    </div>
  );
}

export default AllInOne;

import CompareSupport from "../CompareSupport/CompareSupport";
import SiteFooter from "../SiteFooter/SiteFooter";
import SiteMenu from "../SiteMenu/SiteMenu";
import SupportFaqList from "../SupportFaqList/SupportFaqList";
import SupportTheIdeal from "../SupportTheIdeal/SupportTheIdeal";
import "./Support.css";

function Support() {
  return (
    <div className="Support">
      <SiteMenu />
      <SupportTheIdeal />
      <CompareSupport />
      <SupportFaqList />
      <SiteFooter />
    </div>
  );
}

export default Support;

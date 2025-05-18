import ComparePlan from "../ComparePlan/ComparePlan";
import CompareSupport from "../CompareSupport/CompareSupport";
import CompareTheIdeal from "../CompareTheIdeal/CompareTheIdeal";
import SiteFooter from "../SiteFooter/SiteFooter";
import SiteMenu from "../SiteMenu/SiteMenu";
import "./Compare.css";

function Compare() {
  return (
    <div className="Compare">
      <SiteMenu />
      <CompareTheIdeal />
      <ComparePlan />
      <CompareSupport />
      <SiteFooter />
    </div>
  );
}

export default Compare;

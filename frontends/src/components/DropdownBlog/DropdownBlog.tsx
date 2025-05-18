import DropdownBlogLatest from "../DropdownBlogLatest/DropdownBlogLatest";
import SiteMenu from "../SiteMenu/SiteMenu";
import "./DropdownBlog.css";

function DropdownBlog() {
  return (
    <div className="DropdownBlog">
      <SiteMenu />
      <DropdownBlogLatest />
    </div>
  );
}

export default DropdownBlog;

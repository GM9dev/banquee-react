import BlogRelated from "../BlogRelated/BlogRelated";
import BlogSingleText from "../BlogSingleText/BlogSingleText";
import SiteFooter from "../SiteFooter/SiteFooter";
import SiteMenu from "../SiteMenu/SiteMenu";
import "./BlogSingle.css";

function BlogSingle() {
  return (
    <div className="BlogSingle">
      <SiteMenu />
      <BlogSingleText />
      <BlogRelated />
      <SiteFooter />
    </div>
  );
}

export default BlogSingle;

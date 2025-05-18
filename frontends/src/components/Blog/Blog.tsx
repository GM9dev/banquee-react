import BlogArticle from "../BlogArticle/BlogArticle";
import BlogBlog from "../BlogBlog/BlogBlog";
import SiteFooter from "../SiteFooter/SiteFooter";
import SiteMenu from "../SiteMenu/SiteMenu";
import "./Blog.css";

function Blog() {
  return (
    <div className="Blog">
      <SiteMenu />
      <BlogBlog />
      <BlogArticle />
      <SiteFooter />
    </div>
  );
}

export default Blog;

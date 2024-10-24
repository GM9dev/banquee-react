import "./SiteFooter.css";

function SiteFooter() {
  return (
    <div className="SiteFooter banner-container-end">
      <div className="banner-content-end">
        <div className="block-15">
          <section>
            <div className="nav-left">banquee.</div>
          </section>
          <section className="block-16">
            <div className="size-8">
              <div className="name distance-1">About</div>
              <div className="text-features color">Features</div>
              <div className="text-features color distance-7">Pricing</div>
              <div className="text-features color">Support</div>
            </div>
            <div className="size-8">
              <div className="name distance-1">Blog</div>
              <div className="text-features color">Products</div>
              <div className="text-features color distance-7">
                Technology
              </div>
              <div className="text-features color">Crypto</div>
            </div>
            <div className="size-8">
              <div className="name distance-1">Webflow</div>
              <div className="text-features color">Styleguide</div>
              <div className="text-features color distance-7">Licensing</div>
              <div className="text-features color">Changelog</div>
            </div>
            <div className="size-8">
              <div className="name distance-1">Social Media</div>
              <div className="text-features color">Twitter</div>
              <div className="text-features color distance-7">Facebook</div>
              <div className="text-features color">Instagram</div>
            </div>
          </section>
        </div>
        <div className="block-17">
          <div className="text-6 money">© Made by</div>
          <div className="green text-6">Pawel Gola</div>
          <div className="money">- Powered by</div>
          <div className="green text-6">Webflow</div>
          <div className="distance-8 money">
            <div className="distance-9">Impressum</div>
            <div>Datenschutz</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SiteFooter;

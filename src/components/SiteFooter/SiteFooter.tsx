import "./SiteFooter.css";

function SiteFooter() {
  return (
    <div className="SiteFooter banner-container-end">
      <div className="banner-content-end">
        <div className="block-15">
          <section>
            <div className="nav-left distance-13">banquee.</div>
          </section>
          <section className="block-16">
            <div className="size-8">
              <div className="name distance-1">About</div>
              <div className="text-features color-2">Features</div>
              <div className="text-features color-2 distance-14">Pricing</div>
              <div className="text-features color-2">Support</div>
            </div>
            <div className="size-8">
              <div className="name distance-1">Blog</div>
              <div className="text-features color-2">Products</div>
              <div className="text-features color-2 distance-14">
                Technology
              </div>
              <div className="text-features color-2">Crypto</div>
            </div>
            <div className="size-8">
              <div className="name distance-1">Webflow</div>
              <div className="text-features color-2">Styleguide</div>
              <div className="text-features color-2 distance-14">Licensing</div>
              <div className="text-features color-2">Changelog</div>
            </div>
            <div className="size-8">
              <div className="name distance-1">Social Media</div>
              <div className="text-features color-2">Twitter</div>
              <div className="text-features color-2 distance-14">Facebook</div>
              <div className="text-features color-2">Instagram</div>
            </div>
          </section>
        </div>
        <div className="block-17">
          <div className="text-7 money">© Made by</div>
          <div className="green text-7">Pawel Gola</div>
          <div className="money">- Powered by</div>
          <div className="green text-7">Webflow</div>
          <div className="distance-16 money">
            <div className="distance-17">Impressum</div>
            <div>Datenschutz</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SiteFooter;

import "./SiteFooter.css";

type SiteFooterData = {
  sitelogo: string;
  boxes: Array<{
    title: string;
    option1: string;
    option2: string;
    option3: string;
  }>;
  lastword1: string;
  lastword2: string;
};

function SiteFooter() {
  const templateData: SiteFooterData = {
    sitelogo: "banquee",
    boxes: [
      {
        title: "About",
        option1: "Features",
        option2: "Pricing",
        option3: "Support",
      },
      {
        title: "Blog",
        option1: "Products",
        option2: "Technology",
        option3: "Crypto",
      },
      {
        title: "Webflow",
        option1: "Styleguide",
        option2: "Licensing",
        option3: "Changelog",
      },
      {
        title: "Social Media",
        option1: "Twitter",
        option2: "Facebook",
        option3: "Instagram",
      },
    ],
    lastword1: "Impressum",
    lastword2: "Datenschutz",
  };
  return (
    <div className="SiteFooter banner-container-end">
      <div className="banner-content-end">
        <div className="block-15">
          <section>
            <div className="nav-left">{templateData.sitelogo}</div>
          </section>
          <section className="block-16">
            {templateData.boxes.map((itemBoxes) => {
              return (
                <div className="size-8">
                  <div className="name distance-1">{itemBoxes.title}</div>
                  <div className="text-features color">{itemBoxes.option1}</div>
                  <div className="text-features color distance-7">
                    {itemBoxes.option2}
                  </div>
                  <div className="text-features color">{itemBoxes.option3}</div>
                </div>
              );
            })}
          </section>
        </div>
        <div className="block-17">
          <div className="text-6 money">© Made by</div>
          <div className="green text-6">Pawel Gola</div>
          <div className="money">- Powered by</div>
          <div className="green text-6">Webflow</div>
          <div className="distance-8 money">
            <div className="distance-9">{templateData.lastword1}</div>
            <div>{templateData.lastword2}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SiteFooter;

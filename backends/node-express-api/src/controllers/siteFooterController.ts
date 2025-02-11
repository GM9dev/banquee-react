import { Request, Response } from "express";
import SiteFooterData from "@typings/SiteFooterData";

function siteFooterController(request: Request, response: Response) {
  const data: SiteFooterData = {
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
    lastWord1: "Impressum",
    lastWord2: "Datenschutz",
  };

  response.status(200).json(data);
}

export default siteFooterController;

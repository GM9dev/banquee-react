import SiteSeemlessData from "@typings/SiteSeemlessData";
import { Request, Response } from "express";

function siteSeemlessController(request: Request, response: Response) {
  const data: SiteSeemlessData = {
    subTitle: "Tools",
    mainTitle: "Seemless integration",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    listBenefits: [
      "Secure and encrypted integration",
      "Fully API interface",
      "Payments worldwide",
    ],
  };

  response.status(200).json(data);
}

export default siteSeemlessController;

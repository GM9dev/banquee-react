import SiteOneApp2Data from "@typings/SiteOneApp2Data";
import { Request, Response } from "express";

function siteOneApp2Controller(request: Request, response: Response) {
  const data: SiteOneApp2Data = {
    mainTitle: "One app. One banking.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    listBenefits: [
      "Instant transactions",
      "Payments worldwide",
      "Saving accounts",
      "100% mobile banking",
    ],
  };

  response.status(200).json(data);
}

export default siteOneApp2Controller;

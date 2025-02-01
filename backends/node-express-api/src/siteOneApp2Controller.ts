import { Request, Response } from "express";

function siteOneApp2Controller(request: Request, response: Response) {
  response.status(200).json({
    mainTitle: "One app. One banking.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    listBenefits: [
      "Instant transactions",
      "Payments worldwide",
      "Saving accounts",
      "100% mobile banking",
    ],
  });
}

export default siteOneApp2Controller;

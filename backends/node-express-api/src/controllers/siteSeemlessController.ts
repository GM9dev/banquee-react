import { Request, Response } from "express";

function siteSeemlessController(request: Request, response: Response) {
  response.status(200).json({
    subTitle: "Tools",
    mainTitle: "Seemless integration",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    listBenefits: [
      "Secure and encrypted integration",
      "Fully API interface",
      "Payments worldwide",
    ],
  });
}

export default siteSeemlessController;

import { Request, Response } from "express";

function siteStayController(request: Request, response: Response) {
  response.status(200).json({
    subTitle: "Notifications",
    mainTitle: "Stay notified",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    listBenefits: ["Malesuada Ipsum", "Vestibulum", "Parturient Lorem"],
    options: "Compare Cards",
  });
}

export default siteStayController;

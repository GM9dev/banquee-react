import { Request, Response } from "express";

function siteBankingController(request: Request, response: Response) {
  response.status(200).json({
    mainTitle: "Banking starts here.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    listBenefits: [
      "Instant Transfer",
      "Payments worldwide",
      "Saving accounts",
      "100% mobile banking",
      "0% paper",
    ],
    mainButtonText: "Open Account",
    secondButtonText: "Compare Cards",
  });
}

export default siteBankingController;

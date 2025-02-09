import SiteBankingData from "@typings/SiteBankingData";
import { Request, Response } from "express";

function siteBankingController(request: Request, response: Response) {
  const data: SiteBankingData = {
    mainTitle: "Banking starts here.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    listBenefits: [
      "Instant Transfer",
      "Payments worldwide",
      "Saving accounts",
      "100% mobile banking",
    ],
    mainButtonText: "Open Account",
    secondButtonText: "Compare Cards",
  };

  response.status(200).json(data);
}

export default siteBankingController;

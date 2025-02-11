import SitePerfectData from "@typings/SitePerfectData";
import { Request, Response } from "express";

function sitePerfectController(request: Request, response: Response) {
  const data: SitePerfectData = {
    subTitle: "Account",
    mainTitle: "Perfect card",
    mainTitle2: "for your needs.",
    description: "Senectus et netus et malesuada fames ac turpis.",
    description2: "Sagittis vitae et leo duis ut diam.",
    mainButtonText: "Open Account",
    secondButtonText: "Compare Cards",
  };

  response.status(200).json(data);
}

export default sitePerfectController;

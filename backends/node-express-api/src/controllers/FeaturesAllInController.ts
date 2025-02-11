import { Request, Response } from "express";
import FeaturesAllInData from "@typings/FeaturesAllInData";

function featuresAllInController(request: Request, response: Response) {
  const data: FeaturesAllInData = {
    info: "Features",
    mainTitle: "All in one card.",
    description: "Senectus et netus et malesuada fames ac turpis.",
    description2: "Sagittis vitae et leo duis ut diam.",
    button1: "Open Account",
    button2: "Compare Cards",
  };

  response.status(200).json(data);
}

export default featuresAllInController;

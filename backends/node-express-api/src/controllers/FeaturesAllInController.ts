import { Request, Response } from "express";

function FeaturesAllInController(request: Request, response: Response) {
  response.status(200).json({
    info: "Features",
    mainTitle: "All in one card.",
    description: "Senectus et netus et malesuada fames ac turpis.",
    description2: "Sagittis vitae et leo duis ut diam.",
    button1: "Open Account",
    button2: "Compare Cards",
  });
}

export default FeaturesAllInController;

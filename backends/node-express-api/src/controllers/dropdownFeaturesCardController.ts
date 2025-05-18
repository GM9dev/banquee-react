import { Request, Response } from "express";

function dropdownFeaturesCardController(request: Request, response: Response) {
  response.status(200).json({
    plan1: "Basic",
    plan2: "Premium",
    plan3: "Gold",
    info: "Popular",
    text: "Lorem ipsum dolor",
  });
}

export default dropdownFeaturesCardController;

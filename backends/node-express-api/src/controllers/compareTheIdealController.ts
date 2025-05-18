import { Request, Response } from "express";

function compareTheIdealController(request: Request, response: Response) {
  response.status(200).json({
    info: "Compare Cards",
    title1: "The ideal",
    title2: "card for you",
  });
}

export default compareTheIdealController;

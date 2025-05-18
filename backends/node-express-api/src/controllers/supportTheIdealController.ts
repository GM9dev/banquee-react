import { Request, Response } from "express";

function supportTheIdealController(request: Request, response: Response) {
  response.status(200).json({
    info: "Support",
    text1: "How can",
    text2: "we help you?",
  });
}

export default supportTheIdealController;

import { json, Request, response, Response } from "express";

function siteSendController(req: Request, res: Response) {
  response.status(200).json({
    mainTitle: "Send & receive money instantly",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    listBenefits: ["Malesuada Ipsum", "Vestibulum", "Parturient Lorem"],
  });
}

export default siteSendController;

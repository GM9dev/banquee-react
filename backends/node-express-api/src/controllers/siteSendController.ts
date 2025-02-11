import SiteSendData from "@typings/SiteSendData";
import { Request, Response } from "express";

function siteSendController(request: Request, response: Response) {
  const data: SiteSendData = {
    mainTitle: "Send & receive money instantly",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    listBenefits: ["Malesuada Ipsum", "Vestibulum", "Parturient Lorem"],
  };

  response.status(200).json(data);
}

export default siteSendController;

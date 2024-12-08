import { Request, Response } from "express";

function siteMenuController(req: Request, res: Response) {
  res.status(200).json({
    sitelogo: "banquee",
    option1: "Feature",
    option2: "Compare",
    option3: "Support",
    option4: "Blog",
    login: "Login",
    openaccount: "Open Account",
  });
}

export default siteMenuController;

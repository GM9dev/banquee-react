import { Request, Response } from "express";

function siteMenuController(req: Request, res: Response) {
  res.status(200).json({
    siteLogo: "banquee",
    option1: "Features",
    option2: "Compare",
    option3: "Support",
    option4: "Blog",
    login: "Login",
    openAccount: "Open Account",
  });
}

export default siteMenuController;

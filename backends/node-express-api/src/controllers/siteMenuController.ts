import { Request, Response } from "express";
import SiteMenuData from "@typings/SiteMenuData";

function siteMenuController(req: Request, res: Response) {
  const data: SiteMenuData = {
    siteLogo: "banquee",
    option1: "Features",
    option2: "Compare",
    option3: "Support",
    option4: "Blog",
    login: "Login",
    openAccount: "Open Account",
  };

  res.status(200).json(data);
}

export default siteMenuController;

import { Request, Response } from "express";

function siteOrganizeController(req: Request, response: Response) {
  response.status(200).json({
    subTitle: "Saving Accounts",
    mainTitle: "Organize your money the right way",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    options: "All features",
    boxes: [
      {
        image: Frame8Image,
        goals: "New Laptop",
        price: "400$",
      },
      {
        image: Frame82Image,
        goals: "Dream bike",
        price: "200$",
      },
      {
        image: Frame83Image,
        goals: "Holiday",
        price: "14000$",
      },
      {
        image: Frame84Image,
        goals: "Camera",
        price: "100$",
      },
    ],
  });
}

export default siteOrganizeController;

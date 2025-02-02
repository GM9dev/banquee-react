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
        image: "Frame 8.svg",
        goals: "New Laptop",
        price: "400$",
      },
      {
        image: "Frame 8-2.svg",
        goals: "Dream bike",
        price: "200$",
      },
      {
        image: "Frame 8-3.svg",
        goals: "Holiday",
        price: "14000$",
      },
      {
        image: "Frame 8-4.svg",
        goals: "Camera",
        price: "100$",
      },
    ],
  });
}

export default siteOrganizeController;

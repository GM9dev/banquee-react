import { Request, Response } from "express";

function siteOneAppController(request: Request, response: Response) {
  response.status(200).json({
    mainTitle: "One app. One banking.",
    appBoxes: [
      {
        title: "Instant transactions",
        desc: "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.",
        image: "/badge-2.svg",
      },
      {
        title: "Saving accounts",
        desc: "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.",
        image: "/badge-3.svg",
      },
      {
        title: "Mobile banking",
        desc: "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.",
        image: "/badge-4.svg",
      },
      {
        title: "Advanced statistics",
        desc: "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.",
        image: "/badge-5.svg",
      },
      {
        title: "Virtual cards",
        desc: "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.",
        image: "/badge-6.svg",
      },
      {
        title: "Contactless payments",
        desc: "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.",
        image: "/badge-7.svg",
      },
    ],
  });
}

export default siteOneAppController;

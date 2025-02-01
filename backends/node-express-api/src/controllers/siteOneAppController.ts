import { Request, Response } from "express";

function siteOneAppController(request: Request, response: Response) {
  response.status(200).json({
    mainTitle: "One app. One banking.",
    appBoxes: [
      {
        title: "Instant transactions",
        desc: "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.",
        image: Badge2Image,
      },
      {
        title: "Saving accounts",
        desc: "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.",
        image: Badge3Image,
      },
      {
        title: "Mobile banking",
        desc: "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.",
        image: Badge4Image,
      },
      {
        title: "Advanced statistics",
        desc: "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.",
        image: Badge5Image,
      },
      {
        title: "Virtual cards",
        desc: "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.",
        image: Badge6Image,
      },
      {
        title: "Contactless payments",
        desc: "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.",
        image: Badge7Image,
      },
    ],
  });
}

export default siteOneAppController;

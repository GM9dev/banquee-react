import { Request, Response } from "express";
import SiteBlogData from "@typings/SiteBlogData";

function siteBlogController(request: Request, response: Response) {
  const data: SiteBlogData = {
    title: "Blog",
    options: "All Articles",
    boxes: [
      {
        image: "/image.svg",
        title: "How To Start Using Banko For Your Startup",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi.",
        link1: "Product",
        link2: "Technology",
      },
      {
        image: "/image-2.svg",
        title: "10 Things Nobody Told You About Banko",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi.",
        link1: "Product",
        link2: "Technology",
      },
      {
        image: "/image-3.svg",
        title: "7 Ways To Improve You Saving Habits",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi.",
        link1: "Product",
        link2: "Technology",
      },
    ],
  };
  response.status(200).json(data);
}

export default siteBlogController;

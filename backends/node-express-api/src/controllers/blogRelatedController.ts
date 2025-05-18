import { Request, Response } from "express";

function blogRelatedController(request: Request, response: Response) {
  response.status(200).json({
    mainTitle: "Related Articles",
    link: "All Articles",
    title1: "How To Start Using Banko For Your Startup",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi.",
    title2: "10 Things Nobody Told You About Banko",
    title3: "How To Start Using Banko For Your Startup",
    product: "Product",
    technology: "Technology",
  });
}

export default blogRelatedController;

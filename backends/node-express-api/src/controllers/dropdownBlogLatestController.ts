import { Request, Response } from "express";

function dropdownBlogLatestController(request: Request, response: Response) {
  response.status(200).json({
    category: "Categories",
    option1: "Products",
    option2: "Technology",
    option3: "Crypto",
    link: "All Articles",
    mainTitle: "Latest Articles",
    title1: "How to design a product that can grow itself 10x in year",
    title2: "Eget gravida cum sociis natoque",
    text: "Lorem ipsum dolor sit amet, consectetur...",
  });
}

export default dropdownBlogLatestController;

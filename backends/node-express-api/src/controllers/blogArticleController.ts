import { Request, Response } from "express";

function blogArticleController(request: Request, response: Response) {
  response.status(200).json({
    category: "Categories",
    option1: "All",
    option2: "Product",
    option3: "Technology",
    option4: "App",
    title1: "How To Start Using Banko For Your Startup",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi.",
    title2: "10 Things Nobody Told You About Banko",
    title3: "How To Start Using Banko For Your Startup",
    title4: "Why We Love Banko (And You Should, Too!)",
    title5: "5 Principles Of Crypto Investing",
    title6: "7 Things About Banko Your Friends Want To Know",
    app: "App",
    product: "Product",
    technology: "Technology",
  });
}

export default blogArticleController;

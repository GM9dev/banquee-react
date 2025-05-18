import { Request, Response } from "express";

function blogArticleController(request: Request, response: Response) {
  response.status(200).json({
    category: "Categories",
    option1: "All",
    option2: "Product",
    option3: "Technology",
    option4: "App",
    title1: "How To Start Using Banko For Your Startup",
    text1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi.",
    title2: "10 Things Nobody Told You About Banko",
    text2:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi.",
    title3: "How To Start Using Banko For Your Startup",
    text3:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi.",
    title4: "Why We Love Banko (And You Should, Too!)",
    text4:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi.",
    title5: "5 Principles Of Crypto Investing",
    text5:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi.",
    title6: "7 Things About Banko Your Friends Want To Know",
    text6:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi.",
    app: "App",
    product: "Product",
    technology: "Technology",
  });
}

export default blogArticleController;

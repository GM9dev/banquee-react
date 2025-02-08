import { Request, Response } from "express";

function FeaturesAllIn2Controller(request: Request, response: Response) {
  response.status(200).json({
    mainTitle: "All in one bank. Really.",
    mainText: "Senectus et netus et malesuada fames ac turpis.",
    mainText2: "Sagittis vitae et leo duis ut diam.",
    subTitle1: "Statistics",
    subTitle2: "Cards",
    subTitle3: "Easy integration",
    subTitle4: "Saving accounts",
    subTitle5: "Instant transactions",
    text1: "Lorem ipsum dolor sit amet, consectetur",
    text2: "adipiscing elit, sed do.",
    subtext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  });
}

export default FeaturesAllIn2Controller;

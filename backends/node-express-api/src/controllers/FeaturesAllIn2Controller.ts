import { Request, Response } from "express";
import FeaturesAllIn2Data from "@typings/FeaturesAllIn2Data";

function featuresAllIn2Controller(request: Request, response: Response) {
  const data: FeaturesAllIn2Data = {
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
  };

  response.status(200).json(data);
}

export default featuresAllIn2Controller;

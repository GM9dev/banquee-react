import { Request, Response } from "express";

function FeaturesChooseYourCardController(
  request: Request,
  response: Response
) {
  response.status(200).json({
    subtTitle: "Accounts",
    mainTitle: "Choose your card.",
    mainText1: "Senectus et netus et malesuada fames ac turpis.",
    mainText2: "Sagittis vitae et leo duis ut diam.",
    info1: "Basic",
    subInfo: "Popular",
    info2: "Premium",
    info3: "Gold",
    title1: "Free",
    price1: "$5",
    title2: "per month",
    price2: "$10",
    title3: "per month",
    text1: "Lorem ipsum dolor sit amet,",
    text2: "consectetur adipiscing elit.",
  });
}

export default FeaturesChooseYourCardController;

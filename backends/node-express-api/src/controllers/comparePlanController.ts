import { Request, Response } from "express";

function comparePlanController(request: Request, response: Response) {
  response.status(200).json({
    plan: "Basic",
    subInfo: "Popular",
    price: "Free",
    text1: "Lorem ipsum dolor sit amet,",
    text2: "consectetur adipiscing elit.",
    plan2: "Premium",
    price2: "$5",
    time: "per month",
    plan3: "Gold",
    price3: "$10",
    menu1: "Credit Card",
    info1: "Physical Card",
    text3: "Diam in arcu cursus euismod",
    condition: "Optional",
    info2: "Virtual Card",
    info3: "Contactless Payments",
    info4: "Mobile Payments",
    info5: "Free Payments Worldwide",
    info6: "Free ATM withdrawls",
    info7: "Mobile Banking",
    info8: "Saving Accounts",
    info9: "Advanced Statistics",
    info10: "Premium Parnter Offers",
    menu2: "Bank Account",
    condition2: "Up to 2",
    condition3: "Optional",
    menu3: "Extra Features",
    condition4: "2",
    condition5: "5",
    condition6: "Unlimited",
    condition7: "Optional",
  });
}

export default comparePlanController;

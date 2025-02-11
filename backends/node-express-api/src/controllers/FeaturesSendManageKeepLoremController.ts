import FeaturesSendManageKeepLoremData from "@typings/FeaturesSendManageKeepLoremData";
import { Request, Response } from "express";

function featuresSendManageKeepLoremController(
  request: Request,
  response: Response
) {
  const data: FeaturesSendManageKeepLoremData = {
    info: "Transactions",
    info2: "Cards",
    info3: "Advanced Statistics",
    info4: "Saving Accounts",
    title: "Send & receive money instantly",
    title2: "Manage your cards",
    title3: "Keep control over your money",
    title4: "Lorem et ipsum dolor",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    option1: "Malesuada Ipsum",
    option2: "Vestibulum",
    option3: "Parturient Lorem",
  };

  response.status(200).json(data);
}

export default featuresSendManageKeepLoremController;

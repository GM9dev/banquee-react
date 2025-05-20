import FeaturesChooseYourCardData from "@typings/FeaturesChooseYourCardData";
import { Request, Response } from "express";
import knex from "knex";

async function featuresChooseYourCardController(req: Request, res: Response) {
  const dbConn = knex({
    client: "mysql2",
    connection: {
      host: "mysql_banquee",
      port: 3306,
      user: "banquee",
      password: "root",
      database: "banquee_gesse",
    },
  });

  const result = await dbConn<FeaturesChooseYourCardData>(
    "features-choose-your-cards"
  )
    .select({
      id: "id",
      subtTitle: "subt_title",
      mainTitle: "main_title",
      mainText1: "main_text_1",
      mainText2: "main_text_2",
      info1: "info_1",
      subInfo: "sub_info",
      info2: "info_2",
      info3: "info_3",
      title1: "title_1",
      price1: "price_1",
      title2: "title_2",
      price2: "price_2",
      title3: "title_3",
      text1: "text_1",
      text2: "text_2",
    })
    .orderBy("id", "desc")
    .first();

  if (result) {
    const data: FeaturesChooseYourCardData = result;

    res.status(200).json(data);
  } else {
    res.status(200).json({});
  }
}

export default featuresChooseYourCardController;

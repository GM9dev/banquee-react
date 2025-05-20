import { Request, Response } from "express";
import FeaturesAllIn2Data from "@typings/FeaturesAllIn2Data";
import knex from "knex";

async function featuresAllIn2Controller(req: Request, res: Response) {
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

  const result = await dbConn<FeaturesAllIn2Data>("features_all_ins_2")
    .select({
      id: "id",
      mainTitle: "main_title",
      mainText: "main_text",
      mainText2: "main_text_2",
      subTitle1: "sub_title_1",
      subTitle2: "sub_title_2",
      subTitle3: "sub_title_3",
      subTitle4: "sub_title_4",
      subTitle5: "sub_title_5",
      text1: "text_1",
      text2: "text_2",
      subText: "sub_text",
    })
    .orderBy("id", "desc")
    .first();

  if (result) {
    const data: FeaturesAllIn2Data = result;

    res.status(200).json(data);
  } else {
    res.status(200).json({});
  }
}

export default featuresAllIn2Controller;

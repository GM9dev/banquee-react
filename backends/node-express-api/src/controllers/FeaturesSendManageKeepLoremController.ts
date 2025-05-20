import FeaturesSendManageKeepLoremData from "@typings/FeaturesSendManageKeepLoremData";
import { Request, Response } from "express";
import knex from "knex";

async function featuresSendManageKeepLoremController(
  req: Request,
  res: Response
) {
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

  const result = await dbConn<FeaturesSendManageKeepLoremData>(
    "features_send_manage_keep_lorems"
  )
    .select({
      id: "id",
      info: "info",
      info2: "info_2",
      info3: "info_3",
      info4: "info_4",
      title: "title",
      title2: "title_2",
      title3: "title_3",
      title4: "title_4",
      text: "text",
      option1: "option_1",
      option2: "option_2",
      option3: "option_3",
    })
    .orderBy("id", "desc")
    .first();

  if (result) {
    const data: FeaturesSendManageKeepLoremData = result;

    res.status(200).json(data);
  } else {
    res.status(200).json({});
  }
}

export default featuresSendManageKeepLoremController;

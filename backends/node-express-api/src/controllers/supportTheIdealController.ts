import SupportTheIdealData from "@typings/SupportTheIdealData";
import { Request, Response } from "express";
import knex from "knex";

async function supportTheIdealController(req: Request, res: Response) {
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

  const result = await dbConn<SupportTheIdealData>("support_the_ideals")
    .select({
      id: "id",
      info: "info",
      text1: "text_1",
      text2: "text_2",
    })
    .orderBy("id", "desc")
    .first();

  if (result) {
    const data: SupportTheIdealData = result;

    res.status(200).json(data);
  } else {
    res.status(200).json({});
  }
}

export default supportTheIdealController;

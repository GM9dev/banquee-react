import { Request, Response } from "express";
import FeaturesAllInData from "@typings/FeaturesAllInData";
import knex from "knex";

async function featuresAllInController(request: Request, response: Response) {
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

  const result = await dbConn<FeaturesAllInData>("features_all_ins")
    .select({
      id: "id",
      info: "site_logo",
      mainTitle: "main_title",
      description: "description",
      description2: "description_2",
      option4: "option_4",
      button1: "button_1",
      button2: "button_2",
    })
    .orderBy("id", "desc")
    .first();

  if (result) {
    const data: FeaturesAllInData = result;

    response.status(200).json(data);
  } else {
    response.status(200).json({});
  }
}

export default featuresAllInController;

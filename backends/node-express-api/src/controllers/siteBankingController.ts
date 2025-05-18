import SiteBankingData from "@typings/SiteBankingData";
import { Request, Response } from "express";
import knex from "knex";

// TODO: query data from database table "site_bankings" and serialize the data

async function siteBankingController(request: Request, response: Response) {
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

  const result = await dbConn<SiteBankingData>("sites_bankings")
    .select({
      id: "id",
      mainTitle: "main_title",
      description: "description",
      listBenefits: "list_benefits",
      mainButtonText: "main_button_text",
      secondButtonText: "second_button_text",
    })
    .orderBy("id", "desc")
    .first();

  if (result) {
    const data: SiteBankingData = result;

    response.status(200).json(data);
  } else {
    response.status(200).json({});
  }
}

export default siteBankingController;

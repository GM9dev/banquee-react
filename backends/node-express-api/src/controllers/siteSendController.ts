import SiteSendData from "@typings/SiteSendData";
import { Request, Response } from "express";
import knex from "knex";

async function siteSendController(req: Request, res: Response) {
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

  const result = await dbConn<SiteSendData>("site_sends")
    .select({
      id: "id",
      mainTitle: "main_title",
      description: "description",
      listBenefits: "list_benefits",
    })
    .orderBy("id", "desc")
    .first();

  if (result) {
    const data: SiteSendData = result;

    res.status(200).json(data);
  } else {
    res.status(200).json({});
  }
}

export default siteSendController;

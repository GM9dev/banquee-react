import SiteStayData from "@typings/SiteStayData";
import { Request, Response } from "express";
import knex from "knex";

async function siteStayController(req: Request, res: Response) {
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

  const result = await dbConn<SiteStayData>("site_stays")
    .select({
      id: "id",
      subTitle: "sub_title",
      mainTitle: "main_title",
      description: "description",
      listBenefits: "list_benefits",
      options: "options",
    })
    .orderBy("id", "desc")
    .first();

  if (result) {
    const data: SiteStayData = result;

    res.status(200).json(data);
  } else {
    res.status(200).json({});
  }
}

export default siteStayController;

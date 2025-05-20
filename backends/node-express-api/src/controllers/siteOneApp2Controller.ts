import SiteOneApp2Data from "@typings/SiteOneApp2Data";
import { Request, Response } from "express";
import knex from "knex";

async function siteOneApp2Controller(req: Request, res: Response) {
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

  const result = await dbConn<SiteOneApp2Data>("site_one_apps_2")
    .select({
      id: "id",
      mainTitle: "main_title",
      description: "description",
      listBenefits: "list_benefits",
    })
    .orderBy("id", "desc")
    .first();

  if (result) {
    const data: SiteOneApp2Data = result;

    res.status(200).json(data);
  } else {
    res.status(200).json({});
  }
}

export default siteOneApp2Controller;

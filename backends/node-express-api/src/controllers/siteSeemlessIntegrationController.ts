import SiteSeemlessIntegrationData from "@typings/SiteSeemlessIntegrationData";
import { Request, Response } from "express";
import knex from "knex";

async function siteSeemlessIntegrationController(req: Request, res: Response) {
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

  const result = await dbConn<SiteSeemlessIntegrationData>(
    "site_seemless_integrations"
  )
    .select({
      id: "id",
      subTitle: "sub_title",
      mainTitle: "main_title",
      description: "description",
      listBenefits: "list_benefits",
    })
    .orderBy("id", "desc")
    .first();

  if (result) {
    const data: SiteSeemlessIntegrationData = result;

    res.status(200).json(data);
  } else {
    res.status(200).json({});
  }
}

export default siteSeemlessIntegrationController;

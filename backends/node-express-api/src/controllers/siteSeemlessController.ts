import SiteSeemlessData from "@typings/SiteSeemlessData";
import { Request, Response } from "express";
import knex from "knex";

async function siteSeemlessController(request: Request, response: Response) {
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

  const result = await dbConn<SiteSeemlessData>("sites_seemless")
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
    const data: SiteSeemlessData = result;

    response.status(200).json(data);
  } else {
    response.status(200).json({});
  }
}

export default siteSeemlessController;

import { Request, Response } from "express";
import SiteMenuData from "@typings/SiteMenuData";
import knex from "knex";

async function siteMenuController(request: Request, response: Response) {
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

  const result = await dbConn<SiteMenuData>("menu_infos")
    .select({
      id: "id",
      siteLogo: "site_logo",
      option1: "option_1",
      option2: "option_2",
      option3: "option_3",
      option4: "option_4",
      login: "login",
      openAccount: "open_account",
    })
    .orderBy("id", "desc")
    .first();

  if (result) {
    const data: SiteMenuData = result;

    response.status(200).json(data);
  } else {
    response.status(200).json({});
  }
}

export default siteMenuController;

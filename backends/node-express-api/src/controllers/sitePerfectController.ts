import SitePerfectData from "@typings/SitePerfectData";
import { Request, Response } from "express";
import knex from "knex";

async function sitePerfectController(request: Request, response: Response) {
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

  const result = await dbConn<SitePerfectData>("site_perfects")
    .select({
      id: "id",
      subTitle: "sub_title",
      mainTitle: "main_title",
      mainTitle2: "main_title_2",
      description: "description",
      description2: "description_2",
      mainButtonText: "main_button_text",
      secondButtonText: "second_button_text",
    })
    .orderBy("id", "desc")
    .first();

  if (result) {
    const data: SitePerfectData = result;

    response.status(200).json(data);
  } else {
    response.status(200).json({});
  }
}

export default sitePerfectController;

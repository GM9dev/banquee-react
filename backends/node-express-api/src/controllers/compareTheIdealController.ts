import CompareTheIdealData from "@typings/CompareTheIdealData";
import { Request, Response } from "express";
import knex from "knex";

async function compareTheIdealController(req: Request, res: Response) {
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

  const result = await dbConn<CompareTheIdealData>("compare_the_ideals")
    .select({
      id: "id",
      info: "info",
      title1: "title_1",
      title2: "title_2",
    })
    .orderBy("id", "desc")
    .first();

  if (result) {
    const data: CompareTheIdealData = result;

    res.status(200).json(data);
  } else {
    res.status(200).json({});
  }
}

export default compareTheIdealController;

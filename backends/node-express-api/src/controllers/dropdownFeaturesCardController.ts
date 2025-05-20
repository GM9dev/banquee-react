import DropdownFeaturesCardData from "@typings/DropdownFeaturesCardData";
import { Request, Response } from "express";
import knex from "knex";

async function dropdownFeaturesCardController(req: Request, res: Response) {
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

  const result = await dbConn<DropdownFeaturesCardData>(
    "dropdown_features_cards"
  )
    .select({
      id: "id",
      plan1: "plan_1",
      plan2: "plan_2",
      plan3: "plan_3",
      info: "info",
      text: "text",
    })
    .orderBy("id", "desc")
    .first();

  if (result) {
    const data: DropdownFeaturesCardData = result;

    res.status(200).json(data);
  } else {
    res.status(200).json({});
  }
}

export default dropdownFeaturesCardController;

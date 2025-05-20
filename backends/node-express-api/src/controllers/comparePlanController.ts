import ComparePlanData from "@typings/ComparePlanData";
import { Request, Response } from "express";
import knex from "knex";

async function comparePlanController(req: Request, res: Response) {
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

  const result = await dbConn<ComparePlanData>("compare_plans")
    .select({
      id: "id",
      plan: "plan",
      subInfo: "sub_info",
      price: "price",
      text1: "text_1",
      text2: "text_2",
      plan2: "plan_2",
      price2: "price_2",
      time: "time",
      plan3: "plan_3",
      price3: "price_3",
      menu1: "menu_1",
      info1: "info_1",
      text3: "text_3",
      condition: "condition",
      info2: "info_2",
      info3: "info_3",
      info4: "info_4",
      info5: "info_5",
      info6: "info_6",
      info7: "info_7",
      info8: "info_8",
      info9: "info_9",
      info10: "info_10",
      menu2: "menu_2",
      condition2: "condition_2",
      condition3: "condition_3",
      menu3: "menu_3",
      condition4: "condition_4",
      condition5: "condition_5",
      condition6: "condition_6",
      condition7: "condition_7",
    })
    .orderBy("id", "desc")
    .first();

  if (result) {
    const data: ComparePlanData = result;

    res.status(200).json(data);
  } else {
    res.status(200).json({});
  }
}

export default comparePlanController;

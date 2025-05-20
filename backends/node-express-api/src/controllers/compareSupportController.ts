import CompareSupportData from "@typings/CompareSupportData";
import { Request, Response } from "express";
import knex from "knex";

async function compareSupportController(req: Request, res: Response) {
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

  const result = await dbConn<CompareSupportData>("compare_supports")
    .select({
      id: "id",
      title: "title",
      subTitle: "sub_title",
      phone: "phone",
      contact: "contact",
      email: "email",
      contact2: "contact_2",
      info: "info",
    })
    .orderBy("id", "desc")
    .first();

  if (result) {
    const data: CompareSupportData = result;

    res.status(200).json(data);
  } else {
    res.status(200).json({});
  }
}

export default compareSupportController;

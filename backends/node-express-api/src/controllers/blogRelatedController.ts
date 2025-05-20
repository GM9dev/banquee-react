import BlogRelatedData from "@typings/BlogRelatedData";
import { Request, Response } from "express";
import knex from "knex";

async function blogRelatedController(req: Request, res: Response) {
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

  const result = await dbConn<BlogRelatedData>("blog_relateds")
    .select({
      id: "id",
      mainTitle: "main_title",
      link: "link",
      title1: "title_1",
      text: "text",
      title2: "title_2",
      title3: "title_3",
      product: "product",
      technology: "technology",
    })
    .orderBy("id", "desc")
    .first();

  if (result) {
    const data: BlogRelatedData = result;

    res.status(200).json(data);
  } else {
    res.status(200).json({});
  }
}

export default blogRelatedController;

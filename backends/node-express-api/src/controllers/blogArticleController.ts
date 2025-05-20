import BlogArticleData from "@typings/BlogArticleData";
import { Request, Response } from "express";
import knex from "knex";

async function blogArticleController(req: Request, res: Response) {
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

  const result = await dbConn<BlogArticleData>("blog_articles")
    .select({
      id: "id",
      category: "category",
      option1: "option_1",
      option2: "option_2",
      option3: "option_3",
      option4: "option_4",
      title1: "title_1",
      text: "text",
      title2: "title_2",
      title3: "title_3",
      title4: "title_4",
      title5: "title_5",
      title6: "title_6",
      app: "app",
      product: "product",
      technology: "technology",
    })
    .orderBy("id", "desc")
    .first();

  if (result) {
    const data: BlogArticleData = result;

    res.status(200).json(data);
  } else {
    res.status(200).json({});
  }
}

export default blogArticleController;

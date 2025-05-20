import BlogSingleTextData from "@typings/BlogSingleTextData";
import { Request, Response } from "express";
import knex from "knex";

async function blogSingleTextController(req: Request, res: Response) {
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

  const result = await dbConn<BlogSingleTextData>("blog_single_texts")
    .select({
      id: "id",
      app: "app",
      mainTitle: "main_title",
      mainTitle2: "main_title_2",
      subtitle1: "subtitle_1",
      subtitle2: "subtitle_2",
      subtitle3: "subtitle_3",
      title1: "title_1",
      text1: "text_1",
      text2: "text_2",
      title2: "title_2",
      text3: "text_3",
      share: "share",
    })
    .orderBy("id", "desc")
    .first();

  if (result) {
    const data: BlogSingleTextData = result;

    res.status(200).json(data);
  } else {
    res.status(200).json({});
  }
}

export default blogSingleTextController;

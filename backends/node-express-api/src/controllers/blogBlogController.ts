import BlogBlogData from "@typings/BlogBlogData";
import { Request, Response } from "express";
import knex from "knex";

async function blogBlogController(req: Request, res: Response) {
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

  const result = await dbConn<BlogBlogData>("menu_infos")
    .select({
      id: "id",
      title: "title",
    })
    .orderBy("id", "desc")
    .first();

  if (result) {
    const data: BlogBlogData = result;

    res.status(200).json(data);
  } else {
    res.status(200).json({});
  }
}

export default blogBlogController;

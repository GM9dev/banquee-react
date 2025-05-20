import DropdownBlogLatestData from "@typings/DropdownBlogLatestData";
import { Request, Response } from "express";
import knex from "knex";

async function dropdownBlogLatestController(req: Request, res: Response) {
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

  const result = await dbConn<DropdownBlogLatestData>("dropdown_blog_latests")
    .select({
      id: "id",
      category: "category",
      option1: "option_1",
      option2: "option_2",
      option3: "option_3",
      link: "link",
      mainTitle: "main_title",
      title1: "title_1",
      title2: "title_2",
      text: "text",
    })
    .orderBy("id", "desc")
    .first();

  if (result) {
    const data: DropdownBlogLatestData = result;

    res.status(200).json(data);
  } else {
    res.status(200).json({});
  }
}

export default dropdownBlogLatestController;

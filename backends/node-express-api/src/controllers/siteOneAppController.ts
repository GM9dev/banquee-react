import { Request, Response } from "express";
import SiteOneAppData from "@typings/SiteOneAppData";
import knex from "knex";

async function siteOneAppController(req: Request, res: Response) {
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

  const result = await dbConn<SiteOneAppData>("site_one_apps")
    .select({
      id: "id",
      mainTitle: "main_title",
      appBoxes: "app_boxes",
    })
    .orderBy("id", "desc")
    .first();

  if (result) {
    const data: SiteOneAppData = result;

    res.status(200).json(data);
  } else {
    res.status(200).json({});
  }
}

export default siteOneAppController;

/*
appBoxes: [
   {
     title: "Instant transactions",
      desc: "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.",
      image: "/badge-2.svg",
     },
     {
      title: "Saving accounts",
      desc: "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.",
      image: "/badge-3.svg",
     },
     {
      title: "Mobile banking",
     desc: "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.",
     image: "/badge-4.svg",
      },
     {
      title: "Advanced statistics",
      desc: "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.",
       image: "/badge-5.svg",
     },
    {
      title: "Virtual cards",
       desc: "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.",
       image: "/badge-6.svg",
     },
     {
       title: "Contactless payments",
       desc: "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.",
       image: "/badge-7.svg",
     },
   ],
 };

  response.status(200).json(data);
}

*/

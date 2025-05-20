import SiteOrganizeData from "@typings/SiteOrganizeData";
import { Request, Response } from "express";
import knex from "knex";

async function siteOrganizeController(req: Request, res: Response) {
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

  const result = await dbConn<SiteOrganizeData>("site_organizes")
    .select({
      id: "id",
      subTitle: "sub_title",
      mainTitle: "main_title",
      description: "description",
      options: "options",
      boxes: "boxes",
    })
    .orderBy("id", "desc")
    .first();

  if (result) {
    const data: SiteOrganizeData = result;

    res.status(200).json(data);
  } else {
    res.status(200).json({});
  }
}

export default siteOrganizeController;

/* boxes: [
      {
       image: "Frame 8.svg",
       goals: "New Laptop",
       price: "400$",
     },
     {
       image: "Frame 8-2.svg",
       goals: "Dream bike",
       price: "200$",
     },
     {
       image: "Frame 8-3.svg",
      goals: "Holiday",
       price: "14000$",
     },
     {
       image: "Frame 8-4.svg",
      goals: "Camera",
       price: "100$",
      },
    ],
  };

  response.status(200).json(data);
  }

  export default siteOrganizeController;

  */

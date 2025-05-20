import { Request, Response } from "express";
import SiteFooterData from "@typings/SiteFooterData";
import knex from "knex";

async function siteFooterController(req: Request, res: Response) {
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

  const result = await dbConn<SiteFooterData>("site_footers")
    .select({
      id: "id",
      siteLogo: "site_logo",
      boxes: "boxes",
      lastWord1: "last_word_1",
      lastWord2: "last_word_2",
    })
    .orderBy("id", "desc")
    .first();

  if (result) {
    const data: SiteFooterData = result;

    res.status(200).json(data);
  } else {
    res.status(200).json({});
  }
}

export default siteFooterController;

/*
    boxes: [
      {
        title: "About",
        option1: "Features",
        option2: "Pricing",
        option3: "Support",
      },
      {
        title: "Blog",
        option1: "Products",
        option2: "Technology",
        option3: "Crypto",
      },
      {
        title: "Webflow",
        option1: "Styleguide",
        option2: "Licensing",
        option3: "Changelog",
      },
      {
        title: "Social Media",
        option1: "Twitter",
        option2: "Facebook",
        option3: "Instagram",
      },
    ],
    lastWord1: "Impressum",
    lastWord2: "Datenschutz",
  };

  response.status(200).json(data);
}

export default siteFooterController;

*/

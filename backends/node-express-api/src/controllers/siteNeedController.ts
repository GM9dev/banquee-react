import SiteNeedData from "@typings/SiteNeedData";
import { Request, Response } from "express";
import knex from "knex";

async function siteNeedController(request: Request, response: Response) {
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

  const result = await dbConn<SiteNeedData>("site_needs")
    .select({
      id: "id",
      mainTitle: "main_title",
      contactPhoneNumber: "contact_phone_number",
      contactNumber: "contact_number",
      email: "email",
      contactEmail: "contact_email",
      option: "option",
      faqList: "faq_list",
    })
    .orderBy("id", "desc")
    .first();

  if (result) {
    const data: SiteNeedData = result;

    response.status(200).json(data);
  } else {
    response.status(200).json({});
  }
}

export default siteNeedController;

/*
    faqList: [
      { question: "How do I open an Banko account?", answer: "" },
      {
        question: "How do I order a new card?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      },
      { question: "How to change my account limits?", answer: "" },
      {
        question: "How does Banko premium works?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.",
      },
      { question: "Can I have two Banko accounts?", answer: "" },
    ],
  };

  response.status(200).json(data);
}

export default siteNeedController;

*/

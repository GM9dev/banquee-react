import SupportFaqListData from "@typings/SupportFaqListData";
import { Request, Response } from "express";
import knex from "knex";

async function supportFaqListController(req: Request, res: Response) {
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

  const result = await dbConn<SupportFaqListData>("support_faq_lists")
    .select({
      id: "id",
      category: "category",
      option1: "option_1",
      option2: "option_2",
      option3: "option_3",
      faq1: "faq_1",
      question1: "question_1",
      question2: "question_2",
      question3: "question_3",
      question4: "question_4",
      answer: "answer",
      question5: "question_5",
      faq2: "faq_2",
      question6: "question_6",
      question7: "question_7",
      question8: "question_8",
      question9: "question_9",
      faq3: "faq3",
      question10: "question_10",
      question11: "question_11",
      question12: "question_12",
      question13: "question_13",
    })
    .orderBy("id", "desc")
    .first();

  if (result) {
    const data: SupportFaqListData = result;

    res.status(200).json(data);
  } else {
    res.status(200).json({});
  }
}

export default supportFaqListController;

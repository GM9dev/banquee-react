import SiteNeedData from "@typings/SiteNeedData";
import { Request, Response } from "express";

function siteNeedController(request: Request, response: Response) {
  const data: SiteNeedData = {
    mainTitle: "Need help?",
    contactPhoneNumber: "+49 176 123 456",
    contactNumber: "Support Hotline",
    email: "help@banquee.com",
    contactEmail: "Support Email",
    option: "Support",
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

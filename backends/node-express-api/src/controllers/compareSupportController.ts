import { Request, Response } from "express";

function compareSupportController(request: Request, response: Response) {
  response.status(200).json({
    title: "Still have questions?",
    subTitle: "We are here to help.",
    phone: "+49 176 123 456",
    contact: "Support Hotline",
    email: "help@bank.com",
    contact2: "Support Email",
    info: "Chat with us",
  });
}

export default compareSupportController;

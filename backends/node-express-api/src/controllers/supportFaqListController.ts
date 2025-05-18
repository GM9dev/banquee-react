import { Request, Response } from "express";

function supportFaqListController(request: Request, response: Response) {
  response.status(200).json({
    category: "Categories",
    option1: "Cards",
    option2: "Account",
    option3: "Personal Details",
    faq1: "Cards",
    question1: "How to setup my card?",
    question2: "How do I create a virtual card?",
    question3: "How to order an extra card?",
    question4: "My card will exprise soon. What to do?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.",
    question5: "How do I freeze my card?",
    faq2: "Account",
    question6: "How do I verify my account?",
    question7: "How to upgrade my account?",
    question8: "Can I have multiple accounts?",
    question9: "How do I cancel my account?",
    faq3: "Personal Details",
    question10: "How do I change my account address?",
    question11: "How to close my account?",
    question12: "Where do I find my tax ID?",
    question13: "How can I download my bank documents?",
  });
}

export default supportFaqListController;

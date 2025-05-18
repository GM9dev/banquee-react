import { Request, Response } from "express";

function blogBlogController(request: Request, response: Response) {
  response.status(200).json({
    title: "Blog",
  });
}

export default blogBlogController;

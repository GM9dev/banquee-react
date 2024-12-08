import express from "express";
import cors from "cors";
import siteMenuController from "./src/controllers/siteMenuController";

const server = express();

server.use(
  cors({
    origin: "http://localhost:5173",
  })
);

const port = 5679;

server.get("/", (req, res) => {
  res.send("Api for banquee.");
});

// route or endpoint
server.post("/site-menu", siteMenuController);

server.listen(port, () => {
  console.log(`Example server listening on port ${port}`);
});

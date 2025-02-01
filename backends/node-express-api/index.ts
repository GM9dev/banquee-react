import express from "express";
import cors from "cors";
import siteMenuController from "./src/controllers/siteMenuController";
import siteBankingController from "./src/controllers/siteBankingController";
import siteOneAppController from "./src/controllers/siteOneAppController";
import siteSendController from "./src/controllers/siteSendController";
import siteOrganizeController from "./src/controllers/siteOrganizeController";
import siteStayController from "./src/controllers/siteStayController";
import siteSeemlessController from "./src/controllers/siteSeemlessController";
import sitePerfectController from "./src/controllers/sitePerfectController";
import sitePeopleController from "./src/controllers/sitePeopleController";
import siteOneApp2Controller from "./src/siteOneApp2Controller";
import siteNeedController from "./src/controllers/siteNeedController";
import siteBlogController from "./src/controllers/siteBlogController";
import siteFooterController from "./src/controllers/siteFooterController";

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
server.post("/site-banking", siteBankingController);
server.post("/site-one-app", siteOneAppController);
server.post("/site-send", siteSendController);
server.post("/site-organize", siteOrganizeController);
server.post("/site-stay", siteStayController);
server.post("/site-seemless", siteSeemlessController);
server.post("/site-perfect", sitePerfectController);
server.post("/site-people", sitePeopleController);
server.post("/site-one-app-2", siteOneApp2Controller);
server.post("/site-need", siteNeedController);
server.post("/site-blog", siteBlogController);
server.post("/site-footer", siteFooterController);

server.listen(port, () => {
  console.log(`Example server listening on port ${port}`);
});

import express from "express";
import cors from "cors";
import siteMenuController from "./src/controllers/siteMenuController";
import siteBankingController from "./src/controllers/siteBankingController";
import siteOneAppController from "./src/controllers/siteOneAppController";
import siteSendController from "./src/controllers/siteSendController";
import siteOrganizeController from "./src/controllers/siteOrganizeController";
import siteStayController from "./src/controllers/siteStayController";
import sitePerfectController from "./src/controllers/sitePerfectController";
import sitePeopleController from "./src/controllers/sitePeopleController";
import siteOneApp2Controller from "./src/controllers/siteOneApp2Controller";
import siteNeedController from "./src/controllers/siteNeedController";
import siteBlogController from "./src/controllers/siteBlogController";
import siteFooterController from "./src/controllers/siteFooterController";
import featuresAllInController from "./src/controllers/featuresAllInController";
import featuresSendManageKeepLoremController from "./src/controllers/featuresSendManageKeepLoremController";
import featuresAllIn2Controller from "./src/controllers/featuresAllIn2Controller";
import featuresChooseYourCardController from "./src/controllers/featuresChooseYourCardController";
import compareTheIdealController from "./src/controllers/compareTheIdealController";
import comparePlanController from "./src/controllers/comparePlanController";
import compareSupportController from "./src/controllers/compareSupportController";
import supportTheIdealController from "./src/controllers/supportTheIdealController";
import supportFaqListController from "./src/controllers/supportFaqListController";
import blogBlogController from "./src/controllers/blogBlogController";
import blogArticleController from "./src/controllers/blogArticleController";
import blogSingleTextController from "./src/controllers/blogSingleTextController";
import blogRelatedController from "./src/controllers/blogRelatedController";
import dropdownBlogLatestController from "./src/controllers/dropdownBlogLatestController";
import dropdownFeaturesCardController from "./src/controllers/dropdownFeaturesCardController";
import siteSeemlessIntegrationController from "./src/controllers/siteSeemlessIntegrationController";

const server = express();

server.use(
  cors({
    origin: "http://localhost:5680",
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
server.post("/site-seemless-integration", siteSeemlessIntegrationController);
server.post("/site-perfect", sitePerfectController);
server.post("/site-people", sitePeopleController);
server.post("/site-one-app-2", siteOneApp2Controller);
server.post("/site-need", siteNeedController);
server.post("/site-blog", siteBlogController);
server.post("/site-footer", siteFooterController);
server.post("/features-all-in", featuresAllInController);
server.post(
  "/features-send-manage-keep-lorem",
  featuresSendManageKeepLoremController
);
server.post("/features-all-in-2", featuresAllIn2Controller);
server.post("/features-choose-your-card", featuresChooseYourCardController);
server.post("/compare-the-ideal", compareTheIdealController);
server.post("/compare-plan", comparePlanController);
server.post("/compare-support", compareSupportController);
server.post("/support-the-ideal", supportTheIdealController);
server.post("/support-faq-list", supportFaqListController);
server.post("/blog-blog", blogBlogController);
server.post("/blog-article", blogArticleController);
server.post("/blog-single-text", blogSingleTextController);
server.post("/blog-related", blogRelatedController);
server.post("/dropdown-blog-latest", dropdownBlogLatestController);
server.post("/dropdown-features-card", dropdownFeaturesCardController);

server.listen(port, () => {
  console.log(`Example server listening on port ${port}`);
});

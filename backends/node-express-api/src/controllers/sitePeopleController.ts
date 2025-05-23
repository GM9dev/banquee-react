import SitePeopleData from "@typings/SitePeopleData";
import { Request, Response } from "express";
import knex from "knex";

async function sitePeopleController(req: Request, res: Response) {
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

  const result = await dbConn<SitePeopleData>("site_peoples")
    .select({
      id: "id",
      subTitle: "sub_title",
      mainTitle: "main_title",
      info: "info",
      boxes: "boxes",
    })
    .orderBy("id", "desc")
    .first();

  if (result) {
    const data: SitePeopleData = result;

    res.status(200).json(data);
  } else {
    res.status(200).json({});
  }
}

export default sitePeopleController;

/*   boxes: [
      {
        title: "Sunt qui esse pariatur duis deserunt mollit",
        text: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.",
        name: "Cody Fisher",
        job: "Medical Assistant",
      },
      {
        title: "At lectus urna duis convallis tellus",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. <br /> <br /> In nibh mauris cursus mattis. At lectus urna duis convallis convallis tellus. Enim blandit volutpat maecenas volutpat.",
        name: "Jenny Wilson",
        job: "Nursing Assistant",
      },
      {
        title: "Elit aute irure tempor cupidatat incididunt",
        text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.",
        name: "Guy Hawkins",
        job: "President of Sales",
      },
      {
        title: "Sunt qui esse pariatur duis deserunt mollit",
        text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.",
        name: "Cody Fisher",
        job: "Medical Assistant",
      },
      {
        title: "Donec et fringilla neque",
        text: "Etiam accumsan porta neque in viverra. Proin eleifend, eros in tristique hendrerit, nisi purus cursus sapien, id ultrices nunc tellus a ipsum. Donec et fringilla neque. Aenean consequat purus quis lectus maximus fermentum.",
        name: "Darlene Robertson",
        job: "Dog Trainer",
      },
      {
        title: "Etiam accumsan porta neque eros",
        text: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.",
        name: "Dianne Russell",
        job: "Medical Assistant",
      },
    ],
  };

  response.status(200).json(data);
}

export default sitePeopleController;

*/

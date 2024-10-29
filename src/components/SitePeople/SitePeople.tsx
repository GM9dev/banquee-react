import RatingImage from "./../../assets/rating.svg";
import Badge9Image from "./../../assets/badge-9.svg";
import "./SitePeople.css";

type SitePeopleData = {
  subTitle: string;
  mainTitle: string;
  info: string;
  boxes: Array<{ title: string; text: string; name: string; job: string }>;
};

function SitePeople() {
  const templateData: SitePeopleData = {
    subTitle: "Testimonials",
    mainTitle: "People all over the world use banko.",
    info: "Rated 4.8/5 from over 1000 users",
    boxes: [
      {
        title: "Sunt qui esse pariatur duis deserunt mollit",
        text: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.",
        name: "Cody Fisher",
        job: "Medical Assistant",
      },
      {
        title: "At lectus urna duis convallis tellus",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. In nibh mauris cursus mattis. At lectus urna duis convallis convallis tellus. Enim blandit volutpat maecenas volutpat.",
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
  return (
    <div className="SitePeople banner-container-160">
      <div className="banner-content banner-size">
        <div className="block-8">
          <section>
            <div className="info">{templateData.subTitle}</div>
            <div className="title-1">{templateData.mainTitle}</div>
          </section>
          <section className="position-txt">
            <div className="rate">
              <img className="distance-2" src={Badge9Image} />
              Rated <div className="green">4.8/5</div> from over 1000 users
            </div>
          </section>
        </div>
        <div className="block-9">
          <div className="size size-1">
            <img className="rating" src={RatingImage} />
            <div className="title-3">{templateData.boxes[0].title}</div>
            <div className="distance-3">
              <div className="text-features">{templateData.boxes[0].text}</div>
            </div>
            <div className="name">{templateData.boxes[0].name}</div>
            <div className="money">{templateData.boxes[0].job}</div>
          </div>
          <div className="size size-2">
            <img className="rating" src={RatingImage} />
            <div className="title-3">{templateData.boxes[1].title}</div>
            <div className="distance-3">
              <div className="text-features">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
                accumsan sit amet nulla facilisi morbi.
                <br />
                <br />
                In nibh mauris cursus mattis. At lectus urna duis convallis
                convallis tellus. Enim blandit volutpat maecenas volutpat.
              </div>
            </div>
            <div className="name">{templateData.boxes[1].name}</div>
            <div className="money">{templateData.boxes[1].job}</div>
          </div>
          <div className="size size-3">
            <img className="rating" src={RatingImage} />
            <div className="title-3">{templateData.boxes[2].title}</div>
            <div className="distance-3">
              <div className="text-features">{templateData.boxes[2].text}</div>
            </div>
            <div className="name">{templateData.boxes[2].name}</div>
            <div className="money">{templateData.boxes[2].job}</div>
          </div>
          <div className="size size-4">
            <img className="rating" src={RatingImage} />
            <div className="title-3">{templateData.boxes[3].title}</div>
            <div className="distance-3">
              <div className="text-features">{templateData.boxes[3].text}</div>
            </div>
            <div className="name">{templateData.boxes[3].name}</div>
            <div className="money">{templateData.boxes[3].job}</div>
          </div>
          <div className="size size-5">
            <img className="rating" src={RatingImage} />
            <div className="title-3">{templateData.boxes[4].title}</div>
            <div className="distance-3">
              <div className="text-features">{templateData.boxes[4].text}</div>
            </div>
            <div className="name">{templateData.boxes[4].name}</div>
            <div className="money">{templateData.boxes[4].job}</div>
          </div>
          <div className="size size-6">
            <img className="rating" src={RatingImage} />
            <div className="title-3">{templateData.boxes[5].title}</div>
            <div className="distance-3">
              <div className="text-features">{templateData.boxes[5].text}</div>
            </div>
            <div className="name">{templateData.boxes[5].name}</div>
            <div className="money">{templateData.boxes[5].job}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SitePeople;

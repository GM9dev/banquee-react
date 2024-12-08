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
  return (
    <div className="SitePeople banner-container-160">
      <div className="banner-content banner-size">
        <div className="block-8">
          <section>
            <div className="info">{templateData.subTitle}</div>
            <div className="title-1">{templateData.mainTitle}</div>
          </section>
          <section className="position-txt">
            <div className="text-4">
              <img className="distance-2" src={Badge9Image} />
              Rated <div className="green">4.8/5</div> from over 1000 users
            </div>
          </section>
        </div>
        <div className="block-9">
          {templateData.boxes.map((item, index) => {
            return (
              <div className={`size size-${index + 1}`}>
                <img className="rating" src={RatingImage} />
                <div className="title-3">{item.title}</div>
                <div className="distance-3">
                  <div
                    className="text-features"
                    dangerouslySetInnerHTML={{ __html: item.text }}
                  />
                </div>
                <div className="name">{item.name}</div>
                <div className="money">{item.job}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SitePeople;

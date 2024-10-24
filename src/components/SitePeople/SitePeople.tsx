import RatingImage from "./../../assets/rating.svg";
import Badge9Image from "./../../assets/badge-9.svg";
import "./SitePeople.css";

type SitePeopleData = {
  subTitle: string;
  mainTitle: string;
  info: string;
}

function SitePeople() {
  const templateData: SitePeopleData = {
    subTitle: "Testimonials",
    mainTitle: "People all over the world use banko.",
    info: "Rated 4.8/5 from over 1000 users",
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
            <div className="title-3">
              Sunt qui esse pariatur duis deserunt mollit
            </div>
            <div className="distance-3">
              <div className="text-features">
                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                ullamco cillum dolor. Voluptate exercitation incididunt aliquip
                deserunt reprehenderit elit laborum.
              </div>
            </div>
            <div className="name">Cody Fisher</div>
            <div className="money">Medical Assistant</div>
          </div>
          <div className="size size-2">
            <img className="rating" src={RatingImage} />
            <div className="title-3">At lectus urna duis convallis tellus</div>
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
            <div className="name">Jenny Wilson</div>
            <div className="money">Nursing Assistant</div>
          </div>
          <div className="size size-3">
            <img className="rating" src={RatingImage} />
            <div className="title-3">
              Elit aute irure tempor cupidatat incididunt
            </div>
            <div className="distance-3">
              <div className="text-features">
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim
                tempor enim. Elit aute irure tempor cupidatat incididunt sint
                deserunt ut voluptate aute id deserunt nisi.
              </div>
            </div>
            <div className="name">Guy Hawkins</div>
            <div className="money">President of Sales</div>
          </div>
          <div className="size size-4">
            <img className="rating" src={RatingImage} />
            <div className="title-3">
              Sunt qui esse pariatur duis deserunt mollit
            </div>
            <div className="distance-3">
              <div className="text-features">
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim
                tempor enim. Elit aute irure tempor cupidatat incididunt sint
                deserunt ut voluptate aute id deserunt nisi.
              </div>
            </div>
            <div className="name">Cody Fisher</div>
            <div className="money">Medical Assistant</div>
          </div>
          <div className="size size-5">
            <img className="rating" src={RatingImage} />
            <div className="title-3">Donec et fringilla neque</div>
            <div className="distance-3">
              <div className="text-features">
                Etiam accumsan porta neque in viverra. Proin eleifend, eros in
                tristique hendrerit, nisi purus cursus sapien, id ultrices nunc
                tellus a ipsum. Donec et fringilla neque. Aenean consequat purus
                quis lectus maximus fermentum.
              </div>
            </div>
            <div className="name">Darlene Robertson</div>
            <div className="money">Dog Trainer</div>
          </div>
          <div className="size size-6">
            <img className="rating" src={RatingImage} />
            <div className="title-3">Etiam accumsan porta neque eros</div>
            <div className="distance-3">
              <div className="text-features">
                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                ullamco cillum dolor. Voluptate exercitation incididunt aliquip
                deserunt reprehenderit elit laborum.
              </div>
            </div>
            <div className="name">Dianne Russell</div>
            <div className="money">Medical Assistant</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SitePeople;

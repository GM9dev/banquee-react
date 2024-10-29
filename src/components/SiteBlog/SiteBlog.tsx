import Image3Image from "./../../assets/image-3.svg";
import Image2Image from "./../../assets/image-2.svg";
import ImageImage from "./../../assets/image.svg";
import Vector3Image from "./../../assets/Vector-3.svg";
import "./SiteBlog.css";

type SiteBlogData = {
  title: string;
  options: string;
  boxes: Array<{
    image: string;
    title: string;
    text: string;
    link1: string;
    link2: string;
  }>;
};

function SiteBlog() {
  const templateData: SiteBlogData = {
    title: "Blog",
    options: "All Articles",
    boxes: [
      {
        image: ImageImage,
        title: "How To Start Using Banko For Your Startup",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi.",
        link1: "Product",
        link2: "Technology",
      },
      {
        image: Image2Image,
        title: "10 Things Nobody Told You About Banko",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi.",
        link1: "Product",
        link2: "Technology",
      },
      {
        image: Image3Image,
        title: "7 Ways To Improve You Saving Habits",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi.",
        link1: "Product",
        link2: "Technology",
      },
    ],
  };
  return (
    <div className="SiteBlog banner-container-160">
      <div className="banner-content">
        <div>
          <section className="block-13">
            <div className="title-1">{templateData.title}</div>
            <div className="all-features">
              {templateData.options}
              <img className="vector-3" src={Vector3Image} />
            </div>
          </section>
          <section className="images-2">
            {templateData.boxes.map((itemBoxes) => {
              return (
                <div>
                  <img className="distance-5" src={itemBoxes.image} />
                  <div className="title-3">{itemBoxes.title}</div>
                  <div className="text-features distance-6">
                    {itemBoxes.text}
                  </div>
                  <div className="block-14">
                    <div className="font">{itemBoxes.link1}</div>
                    <div className="font">{itemBoxes.link2}</div>
                  </div>
                </div>
              );
            })}
            <div></div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default SiteBlog;

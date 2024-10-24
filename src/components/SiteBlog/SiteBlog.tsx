import Image3Image from "./../../assets/image-3.svg";
import Image2Image from "./../../assets/image-2.svg";
import ImageImage from "./../../assets/image.svg";
import Vector3Image from "./../../assets/Vector-3.svg";
import "./SiteBlog.css";

function SiteBlog() {
  return (
    <div className="SiteBlog banner-container-160">
      <div className="banner-content">
        <div>
          <section className="block-13">
            <div className="title-1">Blog</div>
            <div className="all-features">
              All Articles
              <img className="vector-3" src={Vector3Image} />
            </div>
          </section>
          <section className="images-2">
            <div>
              <img className="distance-5" src={ImageImage} />
              <div className="title-3">
                How To Start Using Banko For Your Startup
              </div>
              <div className="text-features distance-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
                accumsan sit amet nulla facilisi morbi.
              </div>
              <div className="block-14">
                <div className="font">Product</div>
                <div className="font">Technology</div>
              </div>
            </div>
            <div>
              <img className="distance-5" src={Image2Image} />
              <div className="title-3">
                10 Things Nobody Told You About Banko
              </div>
              <div className="text-features distance-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
                accumsan sit amet nulla facilisi morbi.
              </div>
              <div className="block-14">
                <div className="font">Product</div>
                <div className="font">Technology</div>
              </div>
            </div>
            <div>
              <img className="distance-5" src={Image3Image} />
              <div className="title-3">7 Ways To Improve You Saving Habits</div>
              <div className="text-features distance-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
                accumsan sit amet nulla facilisi morbi.
              </div>
              <div className="block-14">
                <div className="font">Product</div>
                <div className="font">Technology</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default SiteBlog;

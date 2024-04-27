import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img_1 from "../../assets/home/01.jpg";
import img_2 from "../../assets/home/02.jpg";
import img_3 from "../../assets/home/03.png";
import img_4 from "../../assets/home/04.jpg";
import img_5 from "../../assets/home/05.png";
import img_6 from "../../assets/home/06.png";
import img_7 from "../../assets/home/banner.jpg";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img src={img_1} />
        </div>
        <div>
          <img src={img_2} />
        </div>
        <div>
          <img src={img_3} />
        </div>
        <div>
          <img src={img_4} />
        </div>
        <div>
          <img src={img_5} />
        </div>
        <div>
          <img src={img_6} />
        </div>
        <div>
          <img src={img_7} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;

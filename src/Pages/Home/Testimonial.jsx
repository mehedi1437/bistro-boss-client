import SectionTitle from "../../Cemponents/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import '@smastrom/react-rating/style.css'
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

const Testimonial = () => {
  const [revirews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <SectionTitle
        heading={"testimonials"}
        subHeading={"What Out Client say ? "}
      ></SectionTitle>

      <div className="my-20 space-y-5 text-center">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {revirews?.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="m-24 w-1/2 mx-auto flex flex-col justify-center items-center space-y-10">
               <span><Rating style={{ maxWidth: 180 }} value={review.rating} readOnly /></span> 
                <p>{review.details}</p>
                <h3 className="text-3xl text-orange-500">{review.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;

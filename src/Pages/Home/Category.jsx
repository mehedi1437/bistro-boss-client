import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import img_1 from '../../assets/home/slide1.jpg'
import img_2 from '../../assets/home/slide2.jpg'
import img_3 from '../../assets/home/slide3.jpg'
import img_4 from '../../assets/home/slide4.jpg'
import img_5 from '../../assets/home/slide5.jpg'
import SectionTitle from '../../Cemponents/SectionTitle';
const Category = () => {
    return (
        <div className='my-20 '>
            <SectionTitle subHeading={'From 11 am to 10 pm '}  heading={'Order Online'}></SectionTitle>

             <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-10"
      >
        <SwiperSlide>
            <img src={img_1} alt="" />
            <h3 className='text-4xl text-center uppercase -mt-24 text-white'>salad</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={img_2} alt="" />
        <h3 className='text-4xl text-center uppercase -mt-24 text-white'>Shoup</h3>
        </SwiperSlide>
        <SwiperSlide><img src={img_3} alt="" />
        <h3 className='text-4xl text-center uppercase -mt-24 text-white'>Dessert</h3></SwiperSlide>
        <SwiperSlide>
        <img src={img_4} alt="" /> 
        <h3 className='text-4xl text-center uppercase -mt-24 text-white'>Pizza</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={img_5} alt="" />
        <h3 className='text-4xl text-center uppercase -mt-16 text-white'>Cake</h3>
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Category;
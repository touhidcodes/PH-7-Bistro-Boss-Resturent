import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import slider1 from "../../../assets/home/slide1.jpg";
import slider2 from "../../../assets/home/slide2.jpg";
import slider3 from "../../../assets/home/slide3.jpg";
import slider4 from "../../../assets/home/slide4.jpg";
import slider5 from "../../../assets/home/slide5.jpg";

const OrderCategory = () => {
	return (
		<div className='px-40'>
			<Swiper
				slidesPerView={4}
				spaceBetween={20}
				pagination={{
					clickable: true,
				}}
				modules={[Pagination]}
				className='mySwiper mt-10 mb-10'
			>
				<SwiperSlide>
					<img src={slider1} alt='' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={slider2} alt='' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={slider3} alt='' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={slider4} alt='' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={slider5} alt='' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={slider1} alt='' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={slider2} alt='' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={slider3} alt='' />
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default OrderCategory;

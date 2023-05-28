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
					<h4 className='uppercase text-3xl text-white -mt-28 text-center'>
						Salads
					</h4>
				</SwiperSlide>
				<SwiperSlide>
					<img src={slider2} alt='' />
					<h4 className='uppercase text-3xl text-white -mt-28 text-center'>
						Pizzas
					</h4>
				</SwiperSlide>
				<SwiperSlide>
					<img src={slider3} alt='' />
					<h4 className='uppercase text-3xl text-white -mt-28 text-center'>
						Soups
					</h4>
				</SwiperSlide>
				<SwiperSlide>
					<img src={slider4} alt='' />
					<h4 className='uppercase text-3xl text-white -mt-28 text-center'>
						Deserts
					</h4>
				</SwiperSlide>
				<SwiperSlide>
					<img src={slider5} alt='' />
					<h4 className='uppercase text-3xl text-white -mt-28 text-center'>
						Salads
					</h4>
				</SwiperSlide>
				<SwiperSlide>
					<img src={slider2} alt='' />
					<h4 className='uppercase text-3xl text-white -mt-28 text-center'>
						Pizzas
					</h4>
				</SwiperSlide>
				<SwiperSlide>
					<img src={slider3} alt='' />
					<h4 className='uppercase text-3xl text-white -mt-28 text-center'>
						Coffee
					</h4>
				</SwiperSlide>
				<SwiperSlide>
					<img src={slider4} alt='' />
					<h4 className='uppercase text-3xl text-white -mt-20 text-center'>
						Deserts
					</h4>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default OrderCategory;

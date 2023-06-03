import React, { useEffect, useState } from "react";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonial = () => {
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/reviews")
			.then((res) => res.json())
			.then((data) => setReviews(data));
	}, []);

	return (
		<section className='mb-10 mx-28 space-y-10'>
			<SectionTitle
				subheading={"What our Client Says"}
				heading={"Testimonials"}
			/>
			<Swiper navigation={true} modules={[Navigation]} className='mySwiper'>
				{reviews.map((review) => (
					<SwiperSlide key={review._id} className='px-20'>
						<div>
							<h4 className='text-2xl text-orange-400 text-center'>
								{review.name}
							</h4>
							<Rating
								style={{ maxWidth: 200 }}
								value={review.rating}
								readOnly
								className='mx-auto mt-5'
							/>
							<p className='mt-5'>{review.details}</p>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

export default Testimonial;

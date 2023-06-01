import React from "react";
import Banner from "../Banner/Banner";
import OrderCategory from "../OrderCategory/OrderCategory";
import MenuSection from "../MenuSection/MenuSection";
import Featured from "../Featured/Featured";
import Testimonial from "../Testimonial/Testimonial";
import { Helmet } from "react-helmet-async";

const Home = () => {
	return (
		<div>
			<Helmet>
				<title>Bistro Boss Menu</title>
			</Helmet>
			<Banner />
			<OrderCategory />
			<MenuSection />
			<Featured />
			<Testimonial />
		</div>
	);
};

export default Home;

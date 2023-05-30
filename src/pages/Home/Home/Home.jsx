import React from "react";
import Footer from "../../shared/Footer/Footer";
import Header from "../../shared/Header/Header";
import Banner from "../Banner/Banner";
import OrderCategory from "../OrderCategory/OrderCategory";
import MenuSection from "../MenuSection/MenuSection";
import Featured from "../Featured/Featured";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
	return (
		<div>
			<Banner />
			<OrderCategory />
			<MenuSection />
			<Featured />
			<Testimonial />
		</div>
	);
};

export default Home;

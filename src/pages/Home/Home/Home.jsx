import React from "react";
import Footer from "../../shared/Footer/Footer";
import Header from "../../shared/Header/Header";
import Banner from "../Banner/Banner";
import OrderCategory from "../OrderCategory/OrderCategory";

const Home = () => {
	return (
		<div>
			<Banner />
			<OrderCategory />
		</div>
	);
};

export default Home;

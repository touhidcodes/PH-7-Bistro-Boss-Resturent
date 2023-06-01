import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import MenuSection from "../../Home/MenuSection/MenuSection";

const Menu = () => {
	return (
		<div>
			<Helmet>
				<title>Bistro Boss Menu</title>
			</Helmet>
			<Cover img={menuImg} title='Our Menu' />
            <MenuSection/>
			<Cover img={menuImg} title='Our Menu' />
            <MenuSection/>
			<Cover img={menuImg} title='Our Menu' />
            <MenuSection/>
		</div>
	);
};

export default Menu;

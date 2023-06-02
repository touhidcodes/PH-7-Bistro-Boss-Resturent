import React from "react";
import { Helmet } from "react-helmet-async";
import useMenu from "../../../hooks/useMenu/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
import cover from "../../../assets/menu/banner3.jpg";
import pizzaCover from "../../../assets/menu/pizza-bg.jpg";
import dessertCover from "../../../assets/menu/dessert-bg.jpeg";
import soupCover from "../../../assets/menu/soup-bg.jpg";
import saladCover from "../../../assets/menu/salad-bg.jpg";

const Menu = () => {
	const [menu] = useMenu();
	const popularItems = menu.filter((item) => item.category === "popular");
	const dessert = menu.filter((item) => item.category === "dessert");
	const pizza = menu.filter((item) => item.category === "pizza");
	const soup = menu.filter((item) => item.category === "soup");
	const salad = menu.filter((item) => item.category === "salad");
	const offered = menu.filter((item) => item.category === "offered");
	return (
		<div>
			<Helmet>
				<title>Bistro Boss | Menu</title>
			</Helmet>
			<MenuCategory
				items={offered}
				btnTitle='View Offers'
				subheading="Don't Miss"
				heading='Todays Offer'
				coverImg={cover}
				coverTitle={"Our Menu"}
			/>
			<MenuCategory
				items={pizza}
				btnTitle='View Pizzas'
				subheading="Don't Miss"
				heading='Pizzas'
				coverImg={pizzaCover}
				coverTitle={"Our Menu"}
			/>
			<MenuCategory
				items={dessert}
				btnTitle='View Desserts'
				subheading="Don't Miss"
				heading='Desserts'
				coverImg={dessertCover}
				coverTitle={"Desserts"}
			/>
			<MenuCategory
				items={soup}
				btnTitle='View Soups'
				subheading="Don't Miss"
				heading='Soups'
				coverImg={soupCover}
				coverTitle={"Soups"}
			/>
			<MenuCategory
				items={salad}
				btnTitle='View Salads'
				subheading="Don't Miss"
				heading='Salads'
				coverImg={saladCover}
				coverTitle={"Salads"}
			/>
		</div>
	);
};

export default Menu;

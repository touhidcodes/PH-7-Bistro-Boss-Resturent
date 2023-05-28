import React, { useEffect, useState } from "react";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import MenuItems from "../../shared/MenuItems/MenuItems";

const MenuSection = () => {
	const [menu, setMenu] = useState([]);
	useEffect(() => {
		fetch("menu.json")
			.then((res) => res.json())
			.then((data) => {
				const popularItems = data.filter((item) => item.category === "popular");
				setMenu(popularItems);
			});
	}, []);

	return (
		<section className='mb-10'>
			<SectionTitle heading={"From Our Menu"} subheading={"Popular Menu"} />
			<div className='grid grid-cols-2 gap-8 mt-10 '>
				{menu.map((item) => (
					<MenuItems key={item._id} item={item} />
				))}
			</div>
		</section>
	);
};

export default MenuSection;

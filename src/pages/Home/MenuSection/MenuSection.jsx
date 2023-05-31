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
			<div className='flex justify-center'>
				<button className='btn btn-outline border-0 border-b-4 mt-10'>
					View Full Menusss
				</button>
			</div>
		</section>
	);
};

export default MenuSection;

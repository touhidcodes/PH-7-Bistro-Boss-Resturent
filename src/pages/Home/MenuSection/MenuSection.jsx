import React, { useEffect, useState } from "react";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import MenuItems from "../../shared/MenuItems/MenuItems";
import useMenu from "../../../hooks/useMenu/useMenu";

const MenuSection = () => {
	const [menu] = useMenu();
	const popularItems = menu.filter((item) => item.category === "popular");
	return (
		<section className='mb-10'>
			<SectionTitle heading={"From Our Menu"} subheading={"Popular Menu"} />
			<div className='grid grid-cols-2 gap-8 mt-10 '>
				{popularItems.map((item) => (
					<MenuItems key={item._id} item={item} />
				))}
			</div>
			<div className='flex justify-center'>
				<button className='btn btn-outline border-0 border-b-4 mt-10'>
					View Full Menu
				</button>
			</div>
		</section>
	);
};

export default MenuSection;

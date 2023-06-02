import React, { useEffect, useState } from "react";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import MenuItems from "../../shared/MenuItems/MenuItems";
import useMenu from "../../../hooks/useMenu/useMenu";
import MenuCategory from "../../Menu/MenuCategory/MenuCategory";

const MenuSection = () => {
	const [menu] = useMenu();
	const popularItems = menu.filter((item) => item.category === "popular");
	return (
		<section className='mb-10'>
			<MenuCategory
				items={popularItems}
				btnTitle={"View Full Menu"}
				heading={"From Our Menu"}
				subheading={"Popular Menu"}
			/>
		</section>
	);
};

export default MenuSection;

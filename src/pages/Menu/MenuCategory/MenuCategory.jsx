import React from "react";
import MenuItems from "../../shared/MenuItems/MenuItems";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import Cover from "../../shared/Cover/Cover";

const MenuCategory = ({
	items,
	btnTitle,
	subheading,
	heading,
	coverImg,
	coverTitle,
}) => {
	return (
		<div>
			{coverTitle && <Cover img={coverImg} title={coverTitle} />}
			<SectionTitle subheading={subheading} heading={heading} />
			<div className='grid grid-cols-2 gap-8 mt-10'>
				{items.map((item) => (
					<MenuItems key={item._id} item={item} />
				))}
			</div>
			<div className='flex justify-center mb-10'>
				<button className='btn btn-outline border-0 border-b-4 mt-10'>
					{btnTitle}
				</button>
			</div>
		</div>
	);
};

export default MenuCategory;

import React from "react";

const MenuItems = ({ item }) => {
	const { image, price, recipe, name } = item;
	return (
		<div className='flex space-x-4 justify-center items-center'>
			<img
				className='w-[100px] rounded-r-full rounded-bl-full'
				src={image}
				alt=''
			/>
			<div>
				<h3 className='uppercase'>
					{name}
					{" "}-----------------
				</h3>
				<p>{recipe}</p>
			</div>
			<p className='text-yellow-500'> {price}</p>
		</div>
	);
};

export default MenuItems;

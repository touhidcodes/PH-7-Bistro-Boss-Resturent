import React from "react";

const OrderCard = ({ item }) => {
	const { name, image, price, recipe } = item;
	return (
		<div className='card  bg-base-100 shadow-xl'>
			<figure>
				<img src={image} alt='Shoes' />
			</figure>
			<p className='bg-slate-700 text-white font-semibold absolute right-5 top-5 px-3 py-1 rounded-xl'>
				${price}
			</p>
			<div className='card-body'>
				<h2 className='card-title'>{name}</h2>
				<p>{recipe}</p>
				<div className='card-actions mx-auto mt-3'>
					<button className='btn btn-outline text-yellow-500 bg-slate-100 border-0 border-b-4'>
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default OrderCard;

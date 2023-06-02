import React from 'react';
import OrderCard from '../OrderCard/OrderCard';

const OrderTab = ({items}) => {
    return (
			<div className='grid grid-cols-3 gap-5 mx-20'>
				{items.map((item) => (
					<OrderCard key={item._id} item={item} />
				))}
			</div>
		);
};

export default OrderTab;
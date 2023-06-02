import React, { useState } from "react";
import Cover from "../../shared/Cover/Cover";
import order from "../../../assets/shop/banner2.jpg";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu/useMenu";
import OrderCard from "../OrderCard/OrderCard";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
	const categories = ["Salads", "Pizzas", "Desserts", "Soups", "Drinks"];
	const { category } = useParams();
	const initialIndex = categories.indexOf(category);
	console.log(initialIndex);
	const [tabIndex, setTabIndex] = useState(initialIndex);
	const [menu] = useMenu();

	const drinks = menu.filter((item) => item.category === "drinks");
	const dessert = menu.filter((item) => item.category === "dessert");
	const pizza = menu.filter((item) => item.category === "pizza");
	const soup = menu.filter((item) => item.category === "soup");
	const salad = menu.filter((item) => item.category === "salad");
	const offered = menu.filter((item) => item.category === "offered");
	return (
		<div>
			<Helmet>
				<title>Bistro Boss | Order Food</title>
			</Helmet>
			<Cover img={order} title='Order Food' />
			<div>
				<Tabs
					defaultIndex={tabIndex}
					onSelect={(index) => setTabIndex(index)}
					className='my-10'
				>
					<TabList>
						<Tab>Salads</Tab>
						<Tab>Pizzas</Tab>
						<Tab>Desserts</Tab>
						<Tab>Soups</Tab>
						<Tab>Drinks</Tab>
					</TabList>
					<TabPanel>
						<OrderTab items={salad} />
					</TabPanel>
					<TabPanel>
						<OrderTab items={pizza} />
					</TabPanel>
					<TabPanel>
						<OrderTab items={dessert} />
					</TabPanel>
					<TabPanel>
						<OrderTab items={soup} />
					</TabPanel>
					<TabPanel>
						<OrderTab items={drinks} />
					</TabPanel>
				</Tabs>
			</div>
		</div>
	);
};

export default Order;

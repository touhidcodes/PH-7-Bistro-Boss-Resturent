import React, { useState } from "react";
import Cover from "../../shared/Cover/Cover";
import order from "../../../assets/shop/banner2.jpg";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu/useMenu";

const Order = () => {
	const [tabIndex, setTabIndex] = useState(0);
	const [menu] = useMenu();
	const drinks= menu.filter((item) => item.category === "drinks");
	const dessert = menu.filter((item) => item.category === "dessert");
	const pizza = menu.filter((item) => item.category === "pizza");
	const soup = menu.filter((item) => item.category === "soup");
	const salad = menu.filter((item) => item.category === "salad");
	const offered = menu.filter((item) => item.category === "offered");
	return (
		<div>
			<Cover img={order} title='Order Food' />
			<div>
				<Tabs defaultIndex={0} onSelect={(index) => setTabIndex(index)}>
					<TabList>
						<Tab>Salad</Tab>
						<Tab>Pizza</Tab>
						<Tab>Dessert</Tab>
						<Tab>Soup</Tab>
						<Tab>Drinks</Tab>
					</TabList>
					<TabPanel></TabPanel>
					<TabPanel></TabPanel>
					<TabPanel></TabPanel>
					<TabPanel></TabPanel>
					<TabPanel></TabPanel>
				</Tabs>
			</div>
		</div>
	);
};

export default Order;

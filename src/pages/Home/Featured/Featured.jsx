import React from "react";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import featured from "../../../assets/home/featured.jpg";
import "./Featured.css"

const Featured = () => {
	return (
		<div className='mb-10'>
			<SectionTitle
				heading={"Featured From Menu"}
				subheading={"Check it Out Now"}
			/>
			<div className='flex justify-center items-center px-28 py-8 featured-section'>
				<div>
					<img src={featured} alt='' className='h-48 w-[800px]' />
				</div>
				<div className='ml-10 space-y-2 pr-28 '>
					<p className='uppercase'>March 20, 2023</p>
					<p className='uppercase'>Where can i get some?</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos error
						quibusdam nostrum cupiditate id? Dicta, similique est! Praesentium
						accusantium assumenda eum impedit. Vitae ratione eligendi, minima
						aliquam autem blanditiis nemo?
					</p>
				</div>
			</div>
		</div>
	);
};

export default Featured;

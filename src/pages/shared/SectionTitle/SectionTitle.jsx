import React from "react";

const SectionTitle = ({ subheading, heading }) => {
	return (
		<div className='text-center'>
			<p className='text-yellow-400 text-xl'>... {subheading} ...</p>
			<h3 className='text-4xl border-y-2 border-zinc-300 w-fit px-10 py-2 mx-auto mt-3'>
				{heading}
			</h3>
		</div>
	);
};

export default SectionTitle;

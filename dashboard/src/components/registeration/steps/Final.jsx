import React from 'react';
import { Link } from 'react-router-dom';

export const Final = () => {
	return (
		<div>
			<Link to='/admin-dashboard/admin'>
				<button
					onClick={() => handleClick('next')}
					className=' flex items-center justify-center w-full bg-green-500 text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-poiter hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out'>
					Go to Admin Dashboard
				</button>
			</Link>
		</div>
	);
};

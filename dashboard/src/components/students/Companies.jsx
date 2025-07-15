import React from 'react'

const Companies = () => {
  return (
		<div className='pt-12'>
			<p className=' text-3xl text-gray-500'>Trusted by learners from</p>
			<div className='flex flex-wrap items-center justify-center gap-6 md:gap-16 md:mt-10 mt-5'>
				<img src='/voma.png' alt='' className='w-20 md:w-28' />
				<img src='/bok.png' alt='' className='w-20 md:w-28' />
				<img src='/hcccs1.png' alt='' className='w-20 md:w-28' />
				<img src='/onb.jpg' alt='' className='w-20 md:w-28' />
				<img src='/mtn.png' alt='' className='w-20 md:w-28' />
			</div>
		</div>
	);
}

export default Companies
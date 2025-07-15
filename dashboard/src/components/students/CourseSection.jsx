import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import CourseCard from './CourseCard';

const CourseSection = () => {
	const { allCourses } = useContext(AppContext);
	return (
		<div className='py-16 md:px-40 px-8'>
			<h2 className='text-3xl font-medium text-gray-800 '>
				Learn for the best
			</h2>
			<p className='text-sm md:text-base text-gray-500 mt-3'>
				Descover our top-rated courses across various categories. From coding
				and desgin to <br /> business wellness, our courses are crafted to
				deliver results.
			</p>

			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-16 gap-2 md:p-0'>
				{allCourses.slice(0, 8).map((course, index) => (
					<CourseCard key={index} course={course} />
				))}
			</div>

			<Link
				to={'/course-list'}
				onClick={() => scrollTo(0, 0)}
				className='text-gray-500 border border-gray-500/30 px-10 rounded'>
				Show all courses
			</Link>
		</div>
	);
};

export default CourseSection;

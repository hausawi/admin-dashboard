import { Link } from 'react-router-dom';
import EventCalendar from '../../../components/dashboard/EventCalendar';
import Announcements from '../../../components/dashboard/Announcements';
import Events from '../../../components/dashboard/Events';
import BigCalendar from '../../../components/dashboard/BigCalendar';

const StudentPage = () => {
	return (
		<div className='p-4 flex gap-4 flex-col xl:flex-row'>
			{/* LEFT */}
			<div className='w-full xl:w-2/3'>
				<div className='h-full bg-white p-4 rounded-md'>
					<h1 className='text-xl font-semibold'>Schedule (4A)</h1>
					<BigCalendar />
				</div>
			</div>
			{/* RIGHTK */}
			<div className='w-full xl:w-1/3 flex flex-col gap-8'>
				<EventCalendar />
				<Events />
				<Announcements />
			</div>
		</div>
	);
};

export default StudentPage;

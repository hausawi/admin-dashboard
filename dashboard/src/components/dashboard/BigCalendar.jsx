import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useState } from 'react';
import { ListContext } from '../../ListContext';
import { calendarEvents } from '../../lib/data';

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
	const [view, setView] = useState(Views.WORK_WEEK);

	const handleOnChangeView = (selectedView) => {
		setView(selectedView);
	};
	return (
		<div>
			<Calendar
				localizer={localizer}
				events={calendarEvents}
				startAccessor='start'
				endAccessor='end'
				views={['work_week', 'day']}
				view={view}
				style={{ height: '98%' }}
				onView={handleOnChangeView}
				min={new Date(2025, 1, 0, 8, 0, 0)}
				max={new Date(2025, 1, 0, 19, 0, 0)}
			/>
		</div>
	);
};

export default BigCalendar;

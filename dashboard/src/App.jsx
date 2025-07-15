import { Route, Routes, useMatch } from 'react-router-dom';
import TeachersList from './app/list/TeachersList';
import StudentsList from './app/list/StudentsList';
import ParentsList from './app/list/ParentsList';
import LessonsList from './app/list/LessonsList';
import ExamsList from './app/list/ExamsList';
import AssignmentsList from './app/list/AssignmentsList';
import ResultsList from './app/list/ResultsList';
import EventsList from './app/list/EventsList';
import AnnouncementsList from './app/list/AnnouncementsList';
import AdminPage from './app/dashboard/admin/AdminPage';
import SinglePage from './app/dashboard/teachers/SinglePage';
import StudentSinglePage from './app/dashboard/students/StudentSinglePage';
import ParentPage from './app/dashboard/parents/ParentPage';
import TeacherPage from './app/dashboard/teachers/TeacherPage';
import StudentPage from './app/dashboard/students/StudentPage';
import CoursesList from './app/student/CoursesList';
import Dashboard from './app/educator/Dashboard';
import AddCourse from './app/educator/AddCourse';
import MyCourses from './app/educator/MyCourses';
import StudentsEnrolled from './app/educator/StudentsEnrolled';
import AdminDashboard from './app/dashboard/admin/AdminDashboard';
import EducatorDashboard from './app/dashboard/teachers/EducatorDashboard';
import AttendanceList from './app/list/AttendanceList';
import ParentDashboard from './app/dashboard/parents/ParentDashboard';
import ClassesList from './app/list/ClassesList';
import RegisterationPage from './app/registeration/RegisterationPage';
import StudentDashboard from './app/dashboard/students/StudentDashboard';
import NavBar from './components/dashboard/NavBar';
import Navbar from './components/educators/Navbar';

function App() {
	const isEducatorRoute = useMatch('/educator-dashboard/*');
	const isAdminRoute = useMatch('/admin-dashboard/*');
	const isParentRoute = useMatch('/parent-dashboard/*');
	const isStudentRoute = useMatch('/student-dashboard/*')
	return (
		<div className='text-default min-h-screen bg-white'>
			{!isEducatorRoute &&
			!isAdminRoute &&
			!isParentRoute &&
			!isStudentRoute ? (
				<Navbar />
			) : (
				''
			)}

			<Routes>
				<Route path='/' element={<RegisterationPage />} />

				<Route path='/student-dashboard' element={<StudentDashboard />}>
					<Route path='students' element={<StudentPage />} />
					<Route path='list/students/:id' element={<StudentSinglePage />} />
					<Route path='list/announcements' element={<AnnouncementsList />} />
					<Route path='list/assignments' element={<AssignmentsList />} />
					<Route path='list/results' element={<ResultsList />} />
					<Route path='list/events' element={<EventsList />} />
					<Route path='list/assignments' element={<AssignmentsList />} />
					<Route path='list/exams' element={<ExamsList />} />
					<Route path='add-course' element={<AddCourse />} />
					<Route path='my-courses' element={<MyCourses />} />
					<Route path='my-enrollments' element={<StudentsEnrolled />} />
				</Route>
				<Route path='/educator-dashboard' element={<EducatorDashboard />}>
					<Route path='educators' element={<TeacherPage />} />
					<Route path='list/educators/:id' element={<SinglePage />} />
					<Route path='parents' element={<ParentPage />} />
					<Route path='list/parents' element={<ParentsList />} />
					<Route path='students' element={<StudentPage />} />
					<Route path='list/students' element={<StudentsList />} />
					<Route path='list/students/:id' element={<StudentSinglePage />} />
					<Route path='list/announcements' element={<AnnouncementsList />} />
					<Route path='list/assignments' element={<AssignmentsList />} />
					<Route path='list/assignments' element={<AssignmentsList />} />
					<Route path='list/attendance' element={<AttendanceList />} />
					<Route path='my-enrollments' element={<StudentsEnrolled />} />
					<Route path='list/lessons' element={<LessonsList />} />
					<Route path='list/results' element={<ResultsList />} />
					<Route path='list/events' element={<EventsList />} />
					<Route path='list/exams' element={<ExamsList />} />
					<Route path='add-course' element={<AddCourse />} />
					<Route path='my-courses' element={<MyCourses />} />
				</Route>
				<Route path='/parent-dashboard' element={<ParentDashboard />}>
					<Route path='parents' element={<ParentPage />} />
					<Route path='list/announcements' element={<AnnouncementsList />} />
					<Route path='list/lessons' element={<LessonsList />} />
					<Route path='list/assignments' element={<AssignmentsList />} />
					<Route path='list/attendance' element={<AttendanceList />} />
					<Route path='list/results' element={<ResultsList />} />
					<Route path='list/events' element={<EventsList />} />
					<Route path='list/assignments' element={<AssignmentsList />} />
					<Route path='list/results' element={<ResultsList />} />
					<Route path='list/exams' element={<ExamsList />} />
				</Route>

				<Route path='/admin-dashboard' element={<AdminDashboard />}>
					<Route path='admin' element={<AdminPage />} />
					<Route path='list/teachers' element={<TeachersList />} />
					<Route path='list/parents' element={<ParentsList />} />
					<Route path='list/students' element={<StudentsList />} />
					<Route path='educator' element={<Dashboard />} />
					<Route path='teachers' element={<TeacherPage />} />
					<Route path='parents' element={<ParentPage />} />
					<Route path='students' element={<StudentPage />} />
					<Route path='list/courses' element={<CoursesList />} />
					<Route path='list/announcements' element={<AnnouncementsList />} />
					<Route path='list/assignments' element={<AssignmentsList />} />
					<Route path='list/attendance' element={<AttendanceList />} />
					<Route path='list/assignments' element={<AssignmentsList />} />
					<Route path='my-enrollments' element={<StudentsEnrolled />} />
					<Route path='list/lessons' element={<LessonsList />} />
					<Route path='list/classes' element={<ClassesList />} />
					<Route path='list/results' element={<ResultsList />} />
					<Route path='list/events' element={<EventsList />} />
					<Route path='list/exams' element={<ExamsList />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;

import { Link, Outlet } from 'react-router-dom';
import TableSearch from '../../components/dashboard/TableSearch';
import { assets } from '../../assets/assets';
import Pagination from '../../components/dashboard/Pagination';
import Table from '../../components/dashboard/Table';
import { role, teachersData } from '../../lib/data';

import React, { useContext, useEffect, useState } from 'react';
import { ListContext } from '../../ListContext';
import CreateFormModel from '../../components/dashboard/CreateFormModel';
import DeleteFormModel from '../../components/dashboard/DeleteFormModel';

export const columns = [
	{
		header: 'Info',
		accessor: 'info',
	},
	{
		header: 'Teacher ID',
		accessor: 'teacherId',
		className: 'hidden md:table-cell',
	},
	{
		header: 'Subjects',
		accessor: 'subjects',
		className: 'hidden md:table-cell',
	},
	{
		header: 'Classes',
		accessor: 'classes',
		className: 'hidden md:table-cell',
	},
	{
		header: 'Phone',
		accessor: 'phone',
		className: 'hidden md:table-cell',
	},
	{
		header: 'Address',
		accessor: 'address',
		className: 'hidden md:table-cell',
	},
	{
		header: 'Actions',
		accessor: 'action',
	},
];

const TeachersList = () => {
	const { teachersData,  createType} = useContext(ListContext);
	const [listItem, setListItem] = useState([]);
	useEffect(() => {
		setListItem(teachersData.slice());
	}, []);

	console.log(teachersData)
	return (
		<>
			<div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
				{/* TOP */}
				<div className='flex items-center justify-between'>
					<h1 className='hidden md:block text-lg font-semibold'>
						All Teachers
					</h1>
					<div className='flex flex-col md:flex-row items-center gap-4 w-full md:w-auto '>
						<TableSearch />
						<div className='flex items-center gap-4 self-end'>
							<button className='w-8 h-8 flex items-center justify-center rounded-full bg-hmoGreen'>
								<img src={assets.filter} width={14} height={14} alt='' />
							</button>
							<button className='w-8 h-8 flex items-center justify-center rounded-full bg-hmoGreen'>
								<img src={assets.sort} width={14} height={14} alt='' />
							</button>
							{role == 'admin' && (
								<CreateFormModel  createType='plus' />
								// <button className='w-8 h-8 flex items-center justify-center rounded-full bg-hmoGreen'>
								// 	<img src={assets.plus} width={14} height={14} alt='' />
								// </button>
							)}
							{console.log(createType)}
						</div>
					</div>
				</div>
				{/* LIST*/}
				<Table columns={columns} data={teachersData} />
				<table className='w-full mt-4'>
					<tbody>
						{listItem.map((item, index) => (
							<tr
								key={index}
								className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-hmoLightPurple'>
								<td className='flex items-center gap-4 p-4'>
									<img
										src={item.photo}
										alt=''
										width={40}
										height={40}
										className='md:hidden lg:block w-10 h-10 rounded-full object-cover'
									/>
									<div className='flex flex-col'>
										<h3 className='font-semibold'>{item.name}</h3>
										<p className=' text-xs text-gray-500'>{item?.email}</p>
									</div>
								</td>
								<td className='hidden md:table-cell'>{item.teacherId}</td>
								<td className='hidden md:table-cell'>
									{item.subjects.join(',')}
								</td>
								<td className='hidden md:table-cell'>
									{item.classes.join(',')}
								</td>
								<td className='hidden md:table-cell'>{item.phone}</td>
								<td className='hidden md:table-cell'>{item.address}</td>
								<td>
									<div className='flex items-center gap-2'>
										<Link to={`/educator-dashboard/list/educators/${item.id}`}>
											<button className='w-7 h-7 flex items-center justify-center rounded-full bg-hmoLightBlue'>
												<img src={assets.view} alt='' width={16} height={16} />
											</button>
										</Link>
										{role === 'admin' && (
											<DeleteFormModel  deleteType='delete' id={item.id} />
											// <button className='w-7 h-7 flex items-center justify-center rounded-full bg-hmoLightBlue'>
											// 	<img src='/delete.png' alt='' width={16} height={16} />
											// </button>
										)}
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
				{/* PAGINATION */}
				<Pagination />
			</div>
		</>
	);
};

export default TeachersList;

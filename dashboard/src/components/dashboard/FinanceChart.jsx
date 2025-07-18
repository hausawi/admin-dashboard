import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts';
import { assets } from '../../assets/assets';

const data = [
	{
		name: 'Jan',
		income: 4000,
		expense: 2400,
	},
	{
		name: 'Feb',
		income: 3000,
		expense: 1398,
	},
	{
		name: 'Mar',
		income: 2000,
		expense: 9800,
		amt: 2290,
	},
	{
		name: 'Apr',
		income: 2780,
		expense: 3908,
	},
	{
		name: 'May',
		income: 1890,
		expense: 4800,
	},
	{
		name: 'Jun',
		income: 2390,
		expense: 3800,
	},
	{
		name: 'jul',
		income: 3490,
		expense: 4300,
	},
	{
		name: '',
		income: 1890,
		expense: 4800,
	},
	{
		name: 'Aug',
		income: 2390,
		expense: 3800,
	},
	{
		name: 'Sep',
		income: 3490,
		expense: 4300,
	},
	{
		name: 'Oct',
		income: 3490,
		expense: 4300,
	},
	{
		name: 'Nov',
		income: 3490,
		expense: 4300,
	},
	{
		name: 'Dec',
		income: 3490,
		expense: 4300,
	},
];

const FinanceChart = () => {
	return (
		<div className='bg-white rounded-xl w-full h-full p-4'>
			<div className='flex justify-between items-center'>
				<h1 className='text-lg font-semibold'> Finance</h1>
				<img src={assets.moreDark} alt='' width={20} height={20} />
			</div>
			<ResponsiveContainer width='100%' height='90%'>
				<LineChart
					width={500}
					height={300}
					data={data}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 10,
					}}>
					<CartesianGrid strokeDasharray='3 3' stroke='#ddd' />
					<XAxis
						dataKey='name'
						axisLine={false}
						tick={{ fill: '#d1d5db' }}
						tickLine={false}
						tickMargin={20}
					/>
					<YAxis
						axisLine={false}
						tick={{ fill: '#d1d5db' }}
						tickLine={false}
						tickMargin={10}
					/>
					<Tooltip />
					<Legend
						align='center'
						verticalAlign='top'
						wrapperStyle={{ paddingTop: '10px', paddingBottom: '30px' }}
					/>
					<Line
						type='monotone'
						dataKey='income'
						stroke='#C0A9BC'
						strokeWidth={5}
					/>
					<Line
						type='monotone'
						dataKey='expense'
						stroke='#1E80C1'
						strokeWidth={5}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default FinanceChart;

import { v1 as uuid } from 'uuid';

import CarPalaceLogo from './carwashpalacelogo.png';

const jobs = [
	{
		id: uuid(),
		logo: CarPalaceLogo,
		position: 'Detail Specialist and Sales Associate',
		company: 'Car Wash Palace and Detail Center',
		date: 'May 2017 - Present',
		location: 'Orlando, FL',
		description:
			'Currently have the highest customer satisfaction rate in auto detailing services and leading the company in membership sales. Received two employee of the month awards.',
	},
];

export default jobs;

import { v1 as uuid } from 'uuid';

import ucfLogo from './ucf-logo.png';

const schools = [
	{
		id: uuid(),
		schoolLogo: ucfLogo,
		school: 'University of Central Florida',
		degree: "Bachelor's degree, Computer Science",
		gpa: 'GPA: 3.811',
		date: '2017 - 2021',
		activities:
			'National Science Foundation FLIT-PATH Research, KnightHacks 2020',
		description:
			"Pursued a major in Computer Science and extensive elective coursework in Competitive Programming, Computer Vision, Functional Programming, Game Development, Multicore Processing, Software Engineering, and Web Development. Developed the All Things Books mobile application in KnightHacks' 2020 Hackathon.",
	},
];

export default schools;

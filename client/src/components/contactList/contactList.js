import { v1 as uuid } from 'uuid';

import { GoMarkGithub } from 'react-icons/go';
import { FaLinkedin } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

const contacts = [
	{
		id: uuid(),
		logo: <IoMdMail />,
		type: 'Email',
		link: 'stefanwerleman@yahoo.com',
	},
	{
		id: uuid(),
		logo: <FaLinkedin />,
		type: 'LinkedIn',
		link: 'https://www.linkedin.com/in/stefanwerleman',
	},
	{
		id: uuid(),
		logo: <GoMarkGithub />,
		type: 'GitHub',
		link: 'https://github.com/stefanwerleman',
	},
];

export default contacts;

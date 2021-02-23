import { v1 as uuid } from 'uuid';

const skills = [
	{
		id: uuid(),
		langs: ['c'],
		header: 'C',
		text:
			'This was the first programming language I learned in my senior year of high school. This is how learned the concepts of dynamic memory management and low-level architecture. I have implemented some of my first algorithms and data structures in this language, such as sorting algorithms, stacks, queues, and linked lists.',
	},
	{
		id: uuid(),
		langs: ['java'],
		header: 'Java',
		text:
			'I used this language for my second algorithms and data structures class. I have implemented hash tables, graphs, greedy algorithms, and dynamic programming. I mainly use this language for coding interviews and coding competitions.',
	},
	{
		id: uuid(),
		langs: ['javascript'],
		header: 'JavaScript',
		text:
			'When it comes to developing web and mobile applications, this is my favorite language to use. I used this language to develop a facebook clone by directly manipulating the DOM.',
	},
	{
		id: uuid(),
		langs: ['python', 'django', 'jupyter'],
		header: 'Python, Django & Jupyter',
		text:
			'This is one of my favorite programming language because you can do many things with, such as Machine Learning and Data Science. I am starting to use this language for coding interviews and preparations because its syntax is much more concise than Java or C++ for solving interview problems.',
	},
	{
		id: uuid(),
		langs: ['html', 'css'],
		header: 'HTML & CSS',
		text:
			'I mainly use HTML for small scale web applications like the facebook clone. I use CSS FlexBox for styling and layout formatting purposes.',
	},
	{
		id: uuid(),
		langs: ['cpp'],
		header: 'C++',
		text:
			'This was probably one of the most difficult languages I had to learn because it merges Object Oriented Programming and Memory Management. I am starting to use C++ for multi-threaded programming and coding compeitions..',
	},
	{
		id: uuid(),
		langs: ['ruby'],
		header: 'Ruby',
		text:
			'I learned this langauge for the sake of learning a new language. I want to know how to develop websites using the Ruby on Rails framework to see the difference between Ruby and other web-based programming langauges.',
	},
	{
		id: uuid(),
		langs: ['react'],
		header: 'React & React Native',
		text:
			'React is my favorite JavaScript framework. I use React for any medium/large scaled web or mobile applications. This personal website and the All Things Books applications were developed using React.',
	},
	{
		id: uuid(),
		langs: ['node'],
		header: 'Node.js',
		text:
			'I mainly use Node.js to develop servers or RestAPIs for all my web or mobile applications to communicate with open-source APIs and databases.',
	},
	{
		id: uuid(),
		langs: ['npm'],
		header: 'NPM',
		text:
			'This my favorite package manager to run all of my JavaScript-based development environmnent and to install various packages.',
	},
	{
		id: uuid(),
		langs: ['github'],
		header: 'Git & GitHub',
		text:
			'Most of my recent projects were saved using Git and GitHub. This is a staple for any of my project because I would like employers to see them and it is a good place to refer back to whenever I forget something.',
	},
	{
		id: uuid(),
		langs: ['linux', 'windows'],
		header: 'Linux & Windows',
		text:
			'I use Windows as my main OS, but I currently run the Ubuntu WSL for all development purposes. All of my projects are linux based but I still like to use certain Windows features.',
	},
	{
		id: uuid(),
		langs: ['mocha', 'jest'],
		header: 'Mocha & Jest',
		text:
			'I use Mocha to test the backend of my web and mobile applications and use Jest to React applications.',
	},
	{
		id: uuid(),
		langs: ['mongodb'],
		header: 'MongoDB',
		text:
			'This was the first database program I used. I used Mongo Atlas to store all messages in my Facebook Clone.',
	},
	{
		id: uuid(),
		langs: ['excel', 'word', 'powerpoint'],
		header: 'Excel, Word & PowerPoint',
		text:
			'These three applications are the reasons why I still use Windows. I am certified in all of these applications.',
	},
];

export default skills;

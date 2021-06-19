import { v1 as uuid } from 'uuid';

let count = 0;

const projects = [
	{
		id: uuid(),
		number: count++,
		links: [
			{
				github: 'https://github.com/stefanwerleman/portfolio',
			},
			{
				url: 'https://www.stefanwerleman.com',
			},
		],
		title: 'This Personal Website',
		description:
			'This personal website demostrates my entire portfolio. With the help of ReactJS and NodeJS I was able create this fully functioning website for all of you to see. I used Google Cloud Marketplace\'s SendGrid API to manage the email in the "Contact Me" section.',
		tools: [
			'javascript',
			'react',
			'bootstrap',
			'css',
			'node',
			'python',
			'django',
			'googlecloud',
			'linux',
		],
	},
	{
		id: uuid(),
		number: count++,
		links: [
			{
				github: 'https://github.com/KnightHacks-GMSJ/AllThingsBooks',
			},
			{ url: null },
		],
		title: 'All Things Books',
		description:
			'Developed a search engine for books, publishers, and authors using React Native. This project was made during the 2020 KnightHacks Virtual Hackathon. I was responsible for receiving the list of books from the Google Cloud Books API and processing them to make a list.',
		tools: ['reactnative', 'javascript', 'googlecloud', 'linux'],
	},
	{
		id: uuid(),
		number: count++,
		links: [
			{ github: 'https://github.com/stefanwerleman/facebook-clone' },
			{ url: null },
		],
		title: 'Facebook Clone',
		description:
			'This website simulates a basic chat room that any user can use. If a user would like to send a message, then he or she can write their username and a message to post. I used HTML, CSS, and JavaScript to develop the front-end without using any frameworks. I also developed an Express.JS REST API to funnel all messages and its data to a MongoDB database. I used Mongo Atlas to host the database. The main goal for me is to practice and learn how to develop a full-stack web application from scratch.',
		tools: [
			'javascript',
			'node',
			'mongodb',
			'html',
			'css',
			'mocha',
			'linux',
		],
	},
	{
		id: uuid(),
		number: count++,
		links: [
			{
				github: 'https://github.com/stefanwerleman/full-stack-app',
			},
			{
				url:
					'https://stefanwerleman-full-stack-app.stefanwerleman.workers.dev/',
			},
		],
		title: 'Cloudflare Workers Full Stack App',
		description:
			'Developed a web application that sends the user to two of one webpages. This challenge helped me learn how to write applications with the Cloudflare Workers API. The command-line tool Wrangler was used on the Linux terminal to run and deploy the application.',
		tools: ['javascript', 'linux'],
	},
	{
		id: uuid(),
		number: count++,
		links: [
			{
				github: null,
			},
			{
				url: null,
			},
		],
		title: 'Skip List',
		description:
			'Built a Java container class that containsmethods and operations to perform complex insertion and deletion algorithms for this probabilistic data structure. Utilized heavy algorithm analysis to verify the time and space complexity of the data structure.',
		tools: ['java', 'linux'],
	},
	{
		id: uuid(),
		number: count++,
		links: [
			{
				github: 'https://github.com/stefanwerleman/trie-container',
			},
			{
				url: null,
			},
		],
		title: 'Trie Object',
		description:
			'Wrote a Ruby container class that simulates the Trie data structure. Supports basic insertion, search, and deletion operations. Includes other functions, such as converting the Trie into an array and printing all the strings contained in the Trie. Used Git and GitHub to save all the code. I made this container to practice a new language I learned.',
		tools: ['ruby', 'linux'],
	},
	{
		id: uuid(),
		number: count++,
		links: [
			{
				github: null,
			},
			{
				url: null,
			},
		],
		title: 'Document Drop Application',
		description:
			'This website allows users to store information in the form of a note for it to be sent to recipients via email if an untimely death occurs. I developed the front end using JavaScript and the ReactJS framework. We used the SendGrid API to send the emails out to its recipients.',
		tools: [
			'javascript',
			'react',
			'bootstrap',
			'mongodb',
			'googlecloud',
			'css',
			'jest',
			'linux',
		],
	},
	{
		id: uuid(),
		number: count++,
		links: [
			{
				github: null,
			},
			{
				url: null,
			},
		],
		title: 'Constrained Topo Sort',
		description:
			'Implemented a Java program that verifies whether an arbitrary directed graph has a valid topological ordering which some vertex, x, comes before some other vertex, y. Used multiple data structures from the Java API and Graph Theory to model this process.',
		tools: ['java', 'linux'],
	},
	{
		id: uuid(),
		number: count++,
		links: [
			{
				github: null,
			},
			{
				url: null,
			},
		],
		title: 'Run Like Hell',
		description:
			'Implemented a Java, Python, and C version program that utilized Dynamic Programming to break down an inefficient recursive solution to an optimal solution.',
		tools: ['python', 'c', 'java', 'linux'],
	},
	{
		id: uuid(),
		number: count++,
		links: [
			{
				github: null,
			},
			{
				url: null,
			},
		],
		title: 'Sneaky Knights',
		description:
			'Developed a Java and a Python program receives a list of coordinates and an arbitrarily large board for knights and determines whether any of the knights can attack one another. Developed an algorithm that converted the coordinate strings into indices for a 2D array and used a hash-table to cache and check each knight’s location',
		tools: ['python', 'c', 'linux'],
	},
	{
		id: uuid(),
		number: count++,
		links: [
			{
				github: null,
			},
			{
				url: null,
			},
		],
		title: 'Lonely Party Array',
		description:
			'Developed a special array-like data structure in C and C++ that does not allocate any unused and wasted space like a typical array does. Utilized the GCC Valgrind tool to check for any memory leaks.',
		tools: ['c', 'cpp', 'linux'],
	},
	{
		id: uuid(),
		number: count++,
		links: [
			{
				github: null,
			},
			{
				url: null,
			},
		],
		title: 'Listy Strings',
		description:
			'Made a C and C++ program that parses any string from an input file and produces a linked list of the characters in the string. This project focused on regex applications and dynamic memory management, so I used the GCC Valgrind tool to check for memory leaks.',
		tools: ['cpp', 'c', 'linux'],
	},
];

export default projects;

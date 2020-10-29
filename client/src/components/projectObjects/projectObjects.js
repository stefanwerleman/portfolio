import uuid from "uuid";

let count = 0;

const projects = [
    {
        id: uuid(),
        number: count++,
        links: [
            { github: "https://github.com/stefanwerleman/facebook-clone" },
            { url: null },
        ],
        title: "Facebook Clone",
        description:
            "Developed a full-stack website that simulates a basic user chat system. Stored all data using MongoDB and conducted all testing with the Mocha framework.",
        tools: [
            "javascript",
            "node",
            "mongodb",
            "html",
            "css",
            "mocha",
            "linux",
        ],
    },
    {
        id: uuid(),
        number: count++,
        links: [
            {
                github: "https://github.com/KnightHacks-GMSJ/AllThingsBooks",
            },
            { url: null },
        ],
        title: "All Things Books",
        description:
            "Developed a search engine for books, publishers, and authors using React Native. This project was made during the 2020 KnightHacks Virtual Hackathon. I was responsible for receiving the list of books from the Google Cloud Books API and processing them to make a list.",
        tools: ["reactnative", "javascript", "googlecloud", "linux"],
    },
    {
        id: uuid(),
        number: count++,
        links: [
            {
                github: "https://github.com/stefanwerleman/portfolio",
            },
            {
                url: "https://www.stefanwerleman.com",
            },
        ],
        title: "This Personal Website",
        description:
            'This personal website demostrates my entire portfolio. With the help of ReactJS and NodeJS I was able create this fully functioning website for all of you to see. I used Google Cloud Marketplace\'s SendGrid API to manage the email in the "Contact Me" section.',
        tools: [
            "javascript",
            "react",
            "bootstrap",
            "node",
            "googlecloud",
            "linux",
        ],
    },
    {
        id: uuid(),
        number: count++,
        links: [
            {
                github: "https://github.com/stefanwerleman/full-stack-app",
            },
            {
                url:
                    "https://stefanwerleman-full-stack-app.stefanwerleman.workers.dev/",
            },
        ],
        title: "Cloudflare Workers Full Stack App",
        description:
            "Developed a web application that sends the user to two of one webpages. This challenge helped me learn how to write applications with the Cloudflare Workers API. The command-line tool Wrangler was used on the Linux terminal to run and deploy the application.",
        tools: ["javascript", "linux"],
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
        title: "Skip List",
        description:
            "Built a Java container class that containsmethods and operations to perform complex insertion and deletion algorithms for this probabilistic data structure. Utilized heavy algorithm analysis to verify the time and space complexity of the data structure.",
        tools: ["java", "linux"],
    },
    {
        id: uuid(),
        number: count++,
        links: [
            {
                github: "https://github.com/stefanwerleman/trie-container",
            },
            {
                url: null,
            },
        ],
        title: "Trie Object",
        description:
            "Wrote a Ruby container class that simulates the Trie data structure. Supports basic insertion, search, and deletion operations. Includes other functions, such as converting the Trie into an array and printing all the strings contained in the Trie. Used Git and GitHub to save all the code. I made this container to practice a new language I learned.",
        tools: ["ruby", "linux"],
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
        title: "Document Drop Application",
        description:
            "This website allows users to store information in the form of a note for it to be sent to recipients via email if an untimely death occurs. I developed the front end using JavaScript and the ReactJS framework. We used the SendGrid API to send the emails out to its recipients.",
        tools: [
            "javascript",
            "react",
            "bootstrap",
            "mongodb",
            "googlecloud",
            "css",
            "jest",
            "linux",
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
        title: "Constrained Topo Sort",
        description:
            "This website allows users to store information in the form of a note for it to be sent to recipients via email if an untimely death occurs. I developed the front end using JavaScript and the ReactJS framework. We used the SendGrid API to send the emails out to its recipients.",
        tools: ["java", "linux"],
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
        title: "Run Like Hell",
        description:
            "This website allows users to store information in the form of a note for it to be sent to recipients via email if an untimely death occurs. I developed the front end using JavaScript and the ReactJS framework. We used the SendGrid API to send the emails out to its recipients.",
        tools: ["java", "linux"],
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
        title: "Sneaky Rooks",
        description:
            "This website allows users to store information in the form of a note for it to be sent to recipients via email if an untimely death occurs. I developed the front end using JavaScript and the ReactJS framework. We used the SendGrid API to send the emails out to its recipients.",
        tools: ["c", "linux"],
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
        title: "Lonely Party Array",
        description:
            "This website allows users to store information in the form of a note for it to be sent to recipients via email if an untimely death occurs. I developed the front end using JavaScript and the ReactJS framework. We used the SendGrid API to send the emails out to its recipients.",
        tools: ["c", "linux"],
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
        title: "Listy Strings",
        description:
            "This website allows users to store information in the form of a note for it to be sent to recipients via email if an untimely death occurs. I developed the front end using JavaScript and the ReactJS framework. We used the SendGrid API to send the emails out to its recipients.",
        tools: ["c", "linux"],
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
        title: "Reflections and Kindred Spirits",
        description:
            "This website allows users to store information in the form of a note for it to be sent to recipients via email if an untimely death occurs. I developed the front end using JavaScript and the ReactJS framework. We used the SendGrid API to send the emails out to its recipients.",
        tools: ["c", "linux"],
    },
];

export default projects;

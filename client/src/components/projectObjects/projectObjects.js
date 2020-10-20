import uuid from "uuid";

const projects = [
    {
        id: uuid(),
        links: [
            { github: "https://github.com/stefanwerleman/facebook-clone" },
            { url: null },
        ],
        title: "Facebook Clone",
        description:
            "Developed a full-stack website that simulates a basic user chat system. Stored all data using MongoDB and conducted all testing with the Mocha framework.",
        tools: ["javascript", "node", "mongodb", "html", "css", "mocha"],
    },
    {
        id: uuid(),
        links: [
            {
                github: "https://github.com/KnightHacks-GMSJ/AllThingsBooks",
            },
            { url: null },
        ],
        title: "All Things Books",
        description:
            "Developed a search engine for books, publishers, and authors using React Native. This project was made during the 2020 KnightHacks Virtual Hackathon. I was responsible for receiving the list of books from the Google Cloud Books API and processing them to make a list.",
        tools: ["reactnative", "javascript", "googlecloud"],
    },
    {
        id: uuid(),
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
        tools: ["javascript", "react", "bootstrap", "node", "googlecloud"],
    },
    {
        id: uuid(),
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
        tools: ["javascript"],
    },
    {
        id: uuid(),
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
        tools: ["java"],
    },
    {
        id: uuid(),
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
            "Wrote a Ruby container class that simulates the Trie data structure. Supports basic insertion, search, and deletion operations. Includes other functions, such as converting the Trie into an array and printing all the strings contained in the Trie. Used Git and GitHub to save all the code. I made this container to practice a enw language I learned.",
        tools: ["ruby"],
    },
];

export default projects;

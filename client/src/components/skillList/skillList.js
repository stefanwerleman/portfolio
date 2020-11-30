import uuid from "uuid";

const skills = [
    {
        id: uuid(),
        langs: ["c"],
        header: "C",
        text:
            "This was the first programming language I learned at UCF. I have implemented some of my first algorithms and data structures in this language, such as sorting algorithms, stacks, queues, and linked lists.",
    },
    {
        id: uuid(),
        langs: ["java"],
        header: "Java",
        text:
            "I used this language for my second algorithms and data structures class. I implemented data structures and algorithms related to graph theory. This is my go to language for programming competitions.",
    },
    {
        id: uuid(),
        langs: ["javascript"],
        header: "JavaScript",
        text:
            "This is my go to language when it comes to developing websites or mobile applications. I developed a facebook clone website using DOM manipulation.",
    },
    {
        id: uuid(),
        langs: ["python", "django"],
        header: "Python & Django",
        text:
            "This is one of my favorite programming languages because of how powerful and open-source it is. I am currently learning Data Science and Machine Learning with this language. I will be making a data science based mobile application soon in this language. I am also using Jupyter Notebook to analyze data for my Physics with Calculus Lab.",
    },
    {
        id: uuid(),
        langs: ["html", "css"],
        header: "HTML & CSS",
        text:
            "I mainly use HTML for smaller web applications like the facebook clone, but I use and will continue to use CSS for every web application I develop.",
    },
    {
        id: uuid(),
        langs: ["cpp"],
        header: "C++",
        text:
            "This was probably one of the most difficult languages I had to learn but this language has a lot value in it. I am starting to code in this language for my programming competitions for performance reasons.",
    },
    {
        id: uuid(),
        langs: ["ruby"],
        header: "Ruby",
        text:
            "This language is new to me, so I only have some beginner level projects in this language. The main thing I want to learn with this language is the Ruby on Rails framework.",
    },
    {
        id: uuid(),
        langs: ["react"],
        header: "React & React Native",
        text:
            "React is my favorite JavaScript framework. I used React for this personal website and I used React Native to develop my All Things Books app for the KnightHacks Hackathon.",
    },
    {
        id: uuid(),
        langs: ["node"],
        header: "Node.js",
        text:
            "I mainly use Node.js to develop my server or RestAPI for all my web applications. With Node.js, I use Express.js for all routing purposes.",
    },
    {
        id: uuid(),
        langs: ["github"],
        header: "Git & GitHub",
        text:
            "Most of my recent projects were saved using Git and GitHub. This is a staple for any of my web or mobile projects because I would like employers to see them and it is a good place to refer back to whenever I forget something.",
    },
    {
        id: uuid(),
        langs: ["linux", "windows"],
        header: "Linux & Windows",
        text:
            "I mainly use Linux to run my dev environment, but on Ubuntu WSL. All of my projects are linux based but I still like to use certain Windows features.",
    },
    {
        id: uuid(),
        langs: ["mocha", "jest"],
        header: "Mocha & Jest",
        text:
            "I used Mocha to test the server of my facebook clone application but I am starting to lean towards Jest whenever I am using React and Node.js.",
    },
    {
        id: uuid(),
        langs: ["mongodb"],
        header: "MongoDB",
        text:
            "This was the first database program I used. With my facebook clone app I used Mongo Atlas to help me store data in the Cloud.",
    },
    {
        id: uuid(),
        langs: ["excel", "word", "powerpoint"],
        header: "Excel, Word & PowerPoint",
        text:
            "These three applications are the reasons why I still use Windows I have been using these applications since high school and I still use them today.",
    },
];

export default skills;

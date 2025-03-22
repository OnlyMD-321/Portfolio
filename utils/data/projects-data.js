import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import it from '/public/image/it.avif';
import sm from '/public/image/sm.avif';
import transit from '/public/image/transit.avif';

export const projectsData = [
    {
        id: 1,
        name: 'CryptoCore Crypto Portfolio',
        description: "I have developed a full-stack web app called CryptoCore Crypto Portfolio. I created the UI using React, Bootstrap, SCSS, and other necessary npm libraries. I developed the API using Express, PostgreSQL, CoinMarketCap API, and other necessary npm libraries. The app allows users to track their crypto portfolio, view real-time prices, and analyze market trends. It also includes a feature to send email notifications when prices reach certain thresholds.",
        tools: ['NodeJS', 'ExpressJS', 'PostgreSOL', 'CoinMarketCap API', 'OAuth', 'Node Mailer', 'JWT', 'Github', 'Render'],
        role: 'Backend Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Algolock',
        description: 'Learning platform to manage programming courses and help the students to improve their skills using integrated programming user interface with multiple programming languages.',
        tools: ['HTML', 'CSS', 'JS', 'JQuery', , 'Bootstrap', 'PHP', 'MySQL', 'Laravel', 'Git', 'GitHub', "Gmail Passkey"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: ayla,
    },
    {
        id: 3,
        name: 'BRS-Consult',
        description: 'A simple Website that shows the services of the company in the logistics sector .',
        tools: ['Wordpress','Elementor','CSS', 'JS', 'JQuery', 'Bootstrap', 'PHP', 'MySQL', 'Git', 'GitHub', "Gmail Passkey"],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: transit,
    },
    {
        id: 4,
        name: 'Z Social Media',
        description: "My team and I developed a social media platform called Z Social Media. The app allows users to create posts, like posts, comment on posts, and chat with other users in real-time.",
        tools: ['ReactJS', 'Redux', 'NodeJS', 'ExpressJS', 'Socket.io', 'MongoDB', 'JWT', 'OAuth', 'Railway','Github', ],
        code: '',
        demo: '',
        image: sm,
        role: 'Full Stack Developer',
    },
    {
        id: 5,
        name: 'Cyberground.ma',
        description: "I developed a simple web app called Cyberground.ma. This website shows the services of the company in the IT sector.",
        tools: ['Wordpress', 'Elementor', 'CSS', 'JS', 'JQuery', 'Bootstrap', 'PHP', 'MySQL', 'Git', 'GitHub', "Gmail Passkey"],        
        code: '',
        demo: '',
        image: it,
        role: 'Full Stack Developer',
    },
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
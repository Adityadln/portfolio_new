/**
 * @type {import("../../types/Project").Project[]}
 */
const projects = [
    {
        id: "NIT_Mentoring_Portal",
        links: {
            github: "retraigo/nitt-mentoring"
        },
        techs: ["vue", "ts","prisma"],
        hasImage: true,
    },
    {
        id: "Chat_App",
        links: {
            github: "Adityadln/Chat-app",
        },
        techs: ["js", "ejs", "socket"],
        hasImage: true
    },
    {
        id: "Catch_the_Match",
        links: {
            github: "Adityadln/memoryMatch-H",
            live: "adityadln.github.io/memoryMatch-H/html/Game-Hacker.html"
        },
        techs: ["js"],
        hasImage: true,
    },
    {
        id: "Blog_App",
        links: {
            github:"Adityadln/blogapp-mern"
        },
        techs: ["react", "node", "mongo","docker"],
        hasImage: true,
    },
    {
        id: "CNN_Food_Classifier",
        techs: ["python", "pytorch", "gradio"],
        links: {
            huggingface: "spaces/adi-dln/dln-foodvision-mini",
        },
        hasImage: true,
    },
    {
        id: "Snake_Game",
        techs: ["js", "html", "css"],
        links: {
            github: "Adityadln/Snake-H",
        },
        hasImage: true,
    }
];

export default projects;

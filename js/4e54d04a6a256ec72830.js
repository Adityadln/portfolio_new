"use strict";
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([[847],{

/***/ 778:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ description }) => {
    return /*html*/`
        <div class="path">
            <h1 class="h1 path__name">${window.location.pathname.slice(1)}</h1>
            <p class="path__description">${description}</p>
        </div>
    `
});

/***/ }),

/***/ 847:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Path_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(778);
/* harmony import */ var _components_ProjectList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(975);





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t, t2) => {
    return /*html*/ `
        ${(0,_components_Path_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({ description: t.description })}
        ${(0,_components_ProjectList_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({ title: t.decent, filter: (p) => !p.isSmall }, t2.projects)}
        ${(0,_components_ProjectList_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({ title: t.small, filter: (p) => p.isSmall && !p.isInProgress }, t2.projects)}
    `;
});


/***/ }),

/***/ 928:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    ts: "TypeScript",
    js: "JavaScript",
    python: "Python",
    c:"C",
    c_plus_plus: "C++",
    mongo: "MongoDB",
    mysql: "MySQL",
    html: "HTML",
    css: "CSS",
    ejs: "EJS",
    node: "Node.js",
    vscode: "VSCode",
    figma: "Figma",
    git: "Git & GitHub",
    react: "React",
    express: "Express",
    vue:"Vue",
    linux:"Linux",
    numpy:"Numpy",
    pandas:"Pandas",
    matplotlib:"Matplotlib",
    scikit_learn:"Scikit-learn",
    pytorch:"PyTorch",
    huggingface:"HuggingFace",
    vim:"Vim",
    nano:"Nano",
    socket:"Socket.io",
    prisma:"Prisma",
    docker:"Docker",
    gradio:"Gradio",
    sql:"SQL"
});

/***/ }),

/***/ 975:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ ProjectList)
});

;// ./src/app/consts/projects.js
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

/* harmony default export */ const consts_projects = (projects);

// EXTERNAL MODULE: ./src/app/consts/websites.js
var websites = __webpack_require__(175);
// EXTERNAL MODULE: ./src/app/consts/techs.js
var techs = __webpack_require__(928);
// EXTERNAL MODULE: ./src/app/consts/media.js + 1 modules
var media = __webpack_require__(934);
;// ./src/app/components/Project.js





function mapLinks(links) {
    function map(link) {
        let href =
        "https://" + (link === "live" ? "" : websites/* default */.A[link]) + links[link];

        if (link === "figma") href = `https://figma.com/community/file/${links[link]}`
        if (link === "github" && links[link].startsWith("/")) href = media/* default */.A.github + links[link]


        const className = link === "cached" ? "button__secondary" : "";
        const name = `${link[0].toUpperCase()}${link.slice(1)}`;

        return /*html*/ `<a href="${href}" class="button ${className}">${name} =></a>`;
    }

    return Object.keys(links).map(map).join("");
}

/* harmony default export */ const Project = (({ id }, t) => {
    const { hasImage, techs: projectTech, links } = consts_projects.find(
        (project) => project.id === id
    );

    return /*html*/ `
        <div class="project">
            ${
                hasImage
                    ? `<img src="/images/projects/${id}.webp" alt="${t[id].name}" class="project__image">`
                    : ""
            }
            
            <ul class="project__techs">
                ${projectTech
                    .map(
                        (tech) =>
                            /*html*/ `<li class="project__tech">${techs/* default */.A[tech]}</li>`
                    )
                    .join("")}
            </ul> 

            <div class="project__content">
                <div class="project__name">${t[id].name}</div>
                <div class="project__description">${t[id].description}</div>
                <div class="project__links">${mapLinks(links)}</div>
            </div>
        </div> 
    `;
});

;// ./src/app/components/ProjectList.js




/* harmony default export */ const ProjectList = (({ title, filter = () => true, limit = consts_projects.length }, t) => {
    return /*html*/ `
            ${title ? `<div> <h2 class="h2">${title}</h2>` : ""}
            <div class="project-list">
                ${consts_projects
                    .filter(filter)
                    .slice(0, limit)
                    .sort((a, b) => a.hasImage - b.hasImage)
                    .map(({ id }) => Project({ id }, t))
                    .join("")}
            </div>
        ${title ? "</div>" : ""}
    `;
});


/***/ })

}]);
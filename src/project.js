import {displayModals,displayProjects,switchProj,displayTodo} from "./DOMstuff.js";

let projList = [];

const createProject = (name) => {
    const projName = name;
    const projId = crypto.randomUUID();
    const todos = [];
    return { projName, projId, todos };
};

const addProject = (name) => {

    const project = createProject(name);
    projList.push(project);
    return project;
};


const storeProj = () => {
    const saveBtn = document.querySelector("#save-project-btn");
    saveBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const name = document.querySelector("#project-name-input").value.trim();
        if (!name) return;
        addProject(name);
        displayProjects();
        document.querySelector(".project-form").reset();
        document.querySelector("#project-modal").classList.add("hidden");
    });
};


export { projList, addProject, storeProj };


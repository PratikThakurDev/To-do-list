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
    saveToLocalStorage();
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


const saveToLocalStorage = () => {
    localStorage.setItem("projects", JSON.stringify(projList));
};

const loadFromLocalStorage = () => {
    const data = localStorage.getItem("projects");
    if (data) {
        const parsed = JSON.parse(data);
        projList.length = 0;
        parsed.forEach(p => projList.push(p));
    }

};

export { projList, addProject, storeProj, saveToLocalStorage, loadFromLocalStorage };



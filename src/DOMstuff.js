import create from "./project.js"

const displayModals = ()=>{

    const toAddProj = ()=>{
        document.querySelector("#add-project-btn").addEventListener("click", () => {
            document.querySelector("#project-modal").classList.remove("hidden");
        });

    }

    const toAddTodo = ()=>{
        document.querySelector("#add-todo-btn").addEventListener("click", () => {
            document.querySelector("#todo-modal").classList.remove("hidden");
        });

    }

    const toCloseAddTodo = ()=>{
        document.querySelector("#cancel-todo-btn").addEventListener("click", () => {
            document.querySelector("#todo-modal").classList.add("hidden");
        });
    }

    const toCloseAddProj = ()=>{
        document.querySelector("#cancel-project-btn").addEventListener("click", () => {
            document.querySelector("#project-modal").classList.add("hidden");
        });
    }

    return{toAddProj,toAddTodo,toCloseAddProj,toCloseAddTodo}
}

const displayProjects = ()=>{

    const saveBtn = document.querySelector("#save-project-btn");
    saveBtn.addEventListener("click",()=>{
        const listSection = document.querySelector("#project-list");
        const proj = document.createElement("li");
        const projName = document.querySelector("#project-name-input").value.trim();
        proj.classList.add("project");
        proj.textContent = `${projName}`;
        listSection.append(proj);
    })

}

export {displayModals,displayProjects};
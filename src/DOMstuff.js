import {projList} from "./project.js"

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

const displayProjects = () => {
    const listSection = document.querySelector("#project-list");
    listSection.innerHTML = ""; // ✅ clear previous list

    projList.forEach((project) => {
        const proj = document.createElement("li");
        proj.classList.add("project");
        proj.textContent = project.projName;
        listSection.append(proj);
    });
};

//     {
        
//     }



const displayTodo = ()=>{

    const saveBtn = document.querySelector("#save-todo-btn");
    saveBtn.addEventListener("click",()=>{
        const todoList = document.querySelector('#todo-list');
        const priority = document.querySelector('#todo-priority').value;
        const todo = document.createElement('li');
        todo.classList.add('todo-item');
        todo.classList.add(`${priority}`);
        const todoHeader = document.createElement("div");
        todoHeader.classList.add('todo-header');
        const input = document.createElement("input");
        input.type = 'checkbox';
        const todoTitle = document.createElement("span");
        todoTitle.classList.add("todo-title");
        todoTitle.textContent = `${document.querySelector('#todo-title').value}`;
        const todoDue = document.createElement('span');
        todoDue.classList.add("todo-due");
        const dateInput = document.querySelector("#todo-due-date").value;
        const date = new Date(dateInput);
        todoDue.textContent = `Due: ${date.toDateString()}`;
        const todoBody = document.createElement("div");
        todoBody.classList.add("todo-body");
        const todoDesc = document.createElement('p');
        todoDesc.classList.add("todo-description");
        todoDesc.textContent = `${document.querySelector('#todo-description').value}`;
        const todoActions = document.createElement("div");
        todoActions.classList.add("todo-actions");
        const editBtn = document.createElement('button');
        editBtn.classList.add('edit-button');
        editBtn.textContent = "✏️";
        const delBtn = document.createElement("button");
        delBtn.classList.add("delete-button");
        delBtn.textContent = "🗑";
        todoHeader.append(input,todoTitle,todoDue);
        todoActions.append(editBtn,delBtn);
        todoBody.append(todoDesc,todoActions);
        todo.append(todoHeader,todoBody);
        todoList.append(todo);
    })
}

const switchProj = ()=>{
    const projList = document.querySelector("#project-list");
    projList.addEventListener("click",(event)=>{
        const currentProj = document.querySelector('.active');
        currentProj.classList.remove("active");
        const clickedProj = event.target;
        clickedProj.classList.add("active");
    })
}

export {displayModals,displayProjects,switchProj,displayTodo};
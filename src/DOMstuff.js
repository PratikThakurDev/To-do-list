import {projList,saveToLocalStorage} from "./project.js"
import { createTodo,addTodo } from "./todo.js";

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
        document.querySelector("#cancel-todo-btn").addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(".todo-form").reset();  
            document.querySelector("#todo-modal").classList.add("hidden");
        });
    }

    const toCloseAddProj = ()=>{
        document.querySelector("#cancel-project-btn").addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(".project-form").reset();  
            document.querySelector("#project-modal").classList.add("hidden");
        });
    }

    return{toAddProj,toAddTodo,toCloseAddProj,toCloseAddTodo}
}

const displayProjects = () => {
    const listSection = document.querySelector("#project-list");
    listSection.innerHTML = ""; 

    projList.forEach((project) => {
        const proj = document.createElement("li");
        proj.classList.add("project");
        proj.dataset.id = `${project.projId}`;
        proj.textContent = project.projName;
        listSection.append(proj);
    });
};

const displayTodo = ()=>{
    const todoList = document.querySelector("#todo-list");
    todoList.innerHTML = "";
    const clickedProj = document.querySelector(".active");
    if(!clickedProj){
        return
    }
    projList.forEach((project)=>{
        if(clickedProj.dataset.id === project.projId){
            const todoHeading = document.querySelector("#project-title");
            todoHeading.textContent = `${project.projName}`;
            project.todos.forEach((todo)=>{
            const todoList = document.querySelector('#todo-list');
            const priority = todo.priority;
            const todoElement = document.createElement('li');
            todoElement.classList.add('todo-item');
            todoElement.classList.add(`${priority}`);
            todoElement.dataset.id = `${todo.todoId}`;
            const todoHeader = document.createElement("div");
            todoHeader.classList.add('todo-header');
            const input = document.createElement("input");
            input.type = 'checkbox';
            const todoTitle = document.createElement("span");
            todoTitle.classList.add("todo-title");
            todoTitle.textContent = todo.todoTitle;
            const todoDue = document.createElement('span');
            todoDue.classList.add("todo-due");
            const dateInput = document.querySelector("#todo-due-date").value;
            const date = new Date(dateInput);
            todoDue.textContent = todo.todoDueDate;
            const todoBody = document.createElement("div");
            todoBody.classList.add("todo-body");
            const todoDesc = document.createElement('p');
            todoDesc.classList.add("todo-description");
            todoDesc.textContent = todo.todoDesc;
            const todoActions = document.createElement("div");
            todoActions.classList.add("todo-actions");
            const editBtn = document.createElement('button');
            editBtn.classList.add('edit-btn');
            editBtn.textContent = "✏️";
            const delBtn = document.createElement("button");
            delBtn.classList.add("delete-btn");
            delBtn.textContent = "🗑";
            todoHeader.append(input,todoTitle,todoDue);
            todoActions.append(editBtn,delBtn);
            todoBody.append(todoDesc,todoActions);
            todoElement.append(todoHeader,todoBody);
            todoList.append(todoElement);
            })
        }
    })
   

}

const switchProj = () => {
    const projList = document.querySelector("#project-list");

    projList.addEventListener("click", (event) => {
        const currentProj = document.querySelector(".active");
        if (currentProj) {
            currentProj.classList.remove("active");
        }

        const clickedProj = event.target;
        clickedProj.classList.add("active");

        displayTodo()
        
    });
};

const deleteTodo = ()=>{
    const todoList = document.querySelector("#todo-list");
    const todoItems = document.querySelectorAll(".todo-item");

    todoList.addEventListener("click",(event)=>{
        const target = event.target
        if(!target.classList.contains("delete-btn")){
            return
        }
        const todoToDel = target.closest(".todo-item");
        const todoDelId = todoToDel.dataset.id;
        if(!todoDelId){
            return
        }
        const activeProj = document.querySelector(".active");
        if (!activeProj) return;
        projList.forEach((project)=>{
            if(activeProj.dataset.id === project.projId){
                project.todos = project.todos.filter(todo => todo.todoId !== todoDelId);

            }
        })
        displayTodo()
        saveToLocalStorage(); 

    })
}

const editTodo = () => {
    const todoList = document.querySelector("#todo-list");

    todoList.addEventListener("click", (event) => {
        const target = event.target;

        if (!target.classList.contains("edit-btn")) return;

        const todoElement = target.closest(".todo-item");
        if (!todoElement) return;

        const todoId = todoElement.dataset.id;
        if (!todoId) return;

        const activeProj = document.querySelector(".active");
        if (!activeProj) return;

        const project = projList.find(p => p.projId === activeProj.dataset.id);
        if (!project) return;

        const todo = project.todos.find(t => t.todoId === todoId);
        if (!todo) return;

        document.querySelector("#todo-title").value = todo.todoTitle;
        document.querySelector("#todo-description").value = todo.todoDesc;
        document.querySelector("#todo-due-date").value = new Date(todo.todoDueDate).toISOString().split('T')[0];
        document.querySelector("#todo-priority").value = todo.priority;

        document.querySelector("#todo-modal").classList.remove("hidden");

        // Replace Save handler with Edit handler
        const saveBtn = document.querySelector("#save-todo-btn");
        const newSaveBtn = saveBtn.cloneNode(true); // remove old listeners
        saveBtn.parentNode.replaceChild(newSaveBtn, saveBtn);

        newSaveBtn.addEventListener("click", (e) => {
            e.preventDefault();

            todo.todoTitle = document.querySelector("#todo-title").value.trim();
            todo.todoDesc = document.querySelector("#todo-description").value.trim();
            const dateInput = document.querySelector('#todo-due-date').value.trim();
            todo.todoDueDate = new Date(dateInput).toDateString();
            todo.priority = document.querySelector("#todo-priority").value.trim();

            document.querySelector(".todo-form").reset();
            document.querySelector("#todo-modal").classList.add("hidden");

            displayTodo();
            saveToLocalStorage(); 

        });
    });
};





export {displayModals,displayProjects,switchProj,displayTodo,deleteTodo,editTodo};
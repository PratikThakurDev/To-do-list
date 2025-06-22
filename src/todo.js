import {displayModals,displayProjects,switchProj,displayTodo} from "./DOMstuff.js";

import {projList,saveToLocalStorage} from "./project.js"

const createTodo = () =>{

    const todoTitle = document.querySelector("#todo-title").value.trim();
    const todoDesc = document.querySelector("#todo-description").value.trim();
    const dateInput = document.querySelector('#todo-due-date').value.trim();
    const date = new Date(dateInput);
    const todoDueDate = date.toDateString();
    const priority = document.querySelector("#todo-priority").value.trim();
    const todoId = crypto.randomUUID();

    return {todoTitle,todoDesc,todoDueDate,priority,todoId}
}

const addTodo = ()=>{
    const saveBtn = document.querySelector("#save-todo-btn");
    saveBtn.addEventListener("click",(e)=>{
        e.preventDefault();

        const clickedProj = document.querySelector(".active");
        if(!clickedProj){
            return
        }
        projList.forEach((project)=>{
            if(clickedProj.dataset.id === project.projId){
                const todo = createTodo();
                project.todos.push(todo);
                displayTodo();
                saveToLocalStorage(); 
            }   
        })
        document.querySelector(".todo-form").reset();
        document.querySelector("#todo-modal").classList.add("hidden");
    })


}

export {createTodo,addTodo};
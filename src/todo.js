
import {projList} from "./project.js"

const createTodo = () =>{

    const todoTitle = document.querySelector("#todo-title");
    const todoDesc = document.querySelector("#todo-description");
    const dateInput = document.querySelector('#todo-due-date');
    const date = new Date(dateInput);
    const todoDueDate = date.toDateString();
    const priority = document.querySelector("#todo-priority");

    return {todoTitle,todoDesc,todoDueDate,priority}
}

const addTodo = ()=>{
    const saveBtn = document.querySelector("#save-todo-btn");
    saveBtn.addEventListener("click",()=>{
        const clickedProj = document.querySelector(".active");
        projList.forEach((project)=>{
            if(clickedProj.dataset.id === project.projId){
                todo = createTodo();
                project.todos.push(todo);
            }   
        })
    })


}

export {createTodo,addTodo};
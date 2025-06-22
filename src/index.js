import "./styles.css";
import {displayModals,displayProjects,switchProj,displayTodo,deleteTodo,editTodo} from "./DOMstuff.js";
import { storeProj ,loadFromLocalStorage} from "./project.js";
import { createTodo,addTodo} from "./todo.js";

loadFromLocalStorage();
const displayModal= displayModals();

displayProjects();
switchProj();
deleteTodo();
editTodo();

displayModal.toAddProj();
displayModal.toAddTodo();
displayModal.toCloseAddProj();
displayModal.toCloseAddTodo();

displayTodo();                                                               

storeProj(); 
addTodo();
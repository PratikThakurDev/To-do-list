import "./styles.css";
import {displayModals,displayProjects,switchProj,displayTodo} from "./DOMstuff.js";
import { storeProj } from "./project.js";


const displayModal= displayModals()

displayProjects()
switchProj()



displayModal.toAddProj()
displayModal.toAddTodo()
displayModal.toCloseAddProj()
displayModal.toCloseAddTodo()

displayTodo()                                                                          

storeProj(); // ✅ add this line

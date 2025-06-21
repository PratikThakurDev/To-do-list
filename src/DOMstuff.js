const showModals = ()=>{

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
    return{toAddProj,toAddTodo}
}



export default showModals;
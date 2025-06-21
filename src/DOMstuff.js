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

export default displayModals;
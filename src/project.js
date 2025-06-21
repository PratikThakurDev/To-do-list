const createProject = ()=>{
    const name = document.querySelector("#project-name-input").value.trim();
    const projName = name;
    const projId = crypto.randomUUID();
    const todo = [];
    return {projName,projId,todo}
}


export default createProject;
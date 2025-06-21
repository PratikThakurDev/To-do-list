const createProject = (name)=>{
    const projName = name;
    const projId = crypto.randomUUID();
    const todo = [];
    return {projName,projId,todo}
}


export default createProject;
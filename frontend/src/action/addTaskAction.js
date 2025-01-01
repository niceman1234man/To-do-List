
export const addTaskAction=(task)=>{
    return{
        type:"ADD_TASK",
        payload:task
    }
}

export const getTaskAction=(task)=>{
return{
    type:"GET_TASK",
    payload:task
}
}


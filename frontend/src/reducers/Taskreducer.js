const initailstate={
    text:[]
}
export const addTaskreducer=(state=initailstate,action)=>{
    switch(action.type){
        case 'ADD_TASK':
          return {
         ...state,
          text: [ ...state.text,action.payload]
          };
        case 'GET_TASK':
                return {
                    ...state,
                    text: [action.payload ]// Replace tasks with the new list from payload
                };
            
        default:
            return state;
     
    }

   
}
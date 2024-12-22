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

        default:
            return state;
     
    }

   
}
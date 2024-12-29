const initailstate={
    isAuthunticated:false,
    user:{}
}
export const userReducer=(state=initailstate,action)=>{
    switch(action.type){
        case 'ADD_User':
          return {
         ...state,
           user:action.payload
          };
        case 'LOGIN_User':
          return {
           ...state,
             user:action.payload
            };

        default:
            return state;
        
     
    }

   
}
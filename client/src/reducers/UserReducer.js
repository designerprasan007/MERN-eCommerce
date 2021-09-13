export const UserReducer = (state = [], action) =>{
    switch(action.type){
        case 'USER_STORED':
            return({userSuccess: action.payload})
        case 'USER_FAILED':
            return({userFail : action.payload})
        default:
            return state
    }   
}
export const AuthReducer =(state={}, action) => {
	switch(action.type){
		case 'LOGIN_ADMIN':
			return{userdata:action.payload};
		case 'REGISTER_ERROR':
			return{error:action.payload};
		case 'LOGIN_SUCCESS':
				return({userdata: action.payload});
		case 'LOGIN_ERROR':
			return{loginerror: action.payload};
		case 'LOGIN_RESET':
			return {}; 
		default:
			return state
	}
}
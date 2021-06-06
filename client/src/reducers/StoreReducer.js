export const StoreReducer = (state=[], action) =>{
	switch(action.type){
		case 'NOT_AUTHORIZED':
			return {unautherror: action.payload}
		default:
			return state
	}

}
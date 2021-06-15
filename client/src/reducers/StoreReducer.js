export const StoreReducer = (state=[], action) =>{
	switch(action.type){
		case 'NOT_AUTHORIZED':
			return {unautherror: action.payload}
		case 'STORE_CREATED':
			return {storeSuccess: action.payload}
		case 'STORE_FAILED':
			return {stroreFail:action.payload}	
		default:
			return state
	}

}
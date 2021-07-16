export const StoreReducer = (state=[], action) =>{
	switch(action.type){
		case 'NOT_AUTHORIZED':
			return {unautherror: action.payload}
		case 'STORE_LOGIN_ERROR':
			return{loginerror: action.payload};
		case 'STORE_CREATED':
			return {storeSuccess: action.payload}
		case 'STORE_FAILED':
			return {stroreFail:action.payload}
		case 'PRODUCT_DATA':
			return{productData:action.payload}	
		case 'LOGIN_RESET':
			return {}; 
		default:
			return state
	}

}